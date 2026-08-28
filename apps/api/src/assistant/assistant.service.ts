import { Injectable, Logger } from '@nestjs/common';
import { CatalogueService } from '../catalogue/catalogue.service';
import { DeterministicFilterService } from './deterministic-filter.service';
import { BedrockService } from './bedrock.service';
import {
  RecommendRequest,
  RecommendResponse,
  RecommendedProduct,
  AIRecommendationItem
} from '@styleseek/shared';
import { randomUUID } from 'crypto';

@Injectable()
export class AssistantService {
  private readonly logger = new Logger(AssistantService.name);

  constructor(
    private readonly catalogueService: CatalogueService,
    private readonly filterService: DeterministicFilterService,
    private readonly bedrockService: BedrockService
  ) {}

  async processRequest(
    dto: RecommendRequest,
    requestId: string = randomUUID()
  ): Promise<RecommendResponse> {
    const userMessage = dto.message;
    this.logger.log(`[${requestId}] Processing request: "${userMessage}"`);

    // Step 1: Extract deterministic constraints (budget, colour, category, size)
    const constraints = this.filterService.extractConstraints(userMessage);

    // Step 2: Filter available candidates from catalogue (single source of truth)
    const allAvailable = this.catalogueService.getAvailableProducts();
    const candidateProducts = this.filterService.filterCandidates(allAvailable, constraints);

    this.logger.log(`[${requestId}] ${candidateProducts.length} candidate products found after filtering`);

    // If zero products match hard deterministic rules (e.g. budget too low), return empty immediately
    if (candidateProducts.length === 0) {
      return {
        message: "I couldn't find an available product matching those requirements. Try changing your budget, colour, or style.",
        products: [],
        requestId
      };
    }

    // Step 3: Invoke Amazon Bedrock & Nova
    let aiMessage = 'I found a few options that match your request.';
    let aiRecommendations: AIRecommendationItem[] = [];

    try {
      const aiOutput = await this.bedrockService.getRecommendations(
        userMessage,
        candidateProducts,
        dto.history || []
      );
      aiMessage = aiOutput.message || aiMessage;
      aiRecommendations = aiOutput.recommendations || [];
    } catch (err) {
      this.logger.warn(`[${requestId}] Bedrock call failed or unavailable, falling back to candidate ranking.`);
      aiMessage = 'AI recommendations are temporarily unavailable. Here are matching items from our collection:';
      // Deterministic fallback: pick top candidates up to limit
      aiRecommendations = candidateProducts.slice(0, 4).map(p => ({
        productId: p.id,
        reason: `Matches your search for ${p.category.toLowerCase()} within your specified preference.`
      }));
    }

    // Step 4: Strict validation of AI recommendations against catalogue (Source of Truth)
    const validatedProducts: RecommendedProduct[] = [];
    const seenIds = new Set<string>();

    for (const rec of aiRecommendations) {
      if (!rec.productId || typeof rec.productId !== 'string') continue;
      if (seenIds.has(rec.productId)) continue;

      // 4a: Must exist in catalogue and be IN_STOCK
      const product = this.catalogueService.getProductById(rec.productId);
      if (!product || product.stockStatus === 'OUT_OF_STOCK' || product.quantity <= 0) {
        this.logger.warn(`[${requestId}] Rejected invalid/out-of-stock AI product ID: ${rec.productId}`);
        continue;
      }

      // 4b: Must satisfy hard budget constraints if user specified under LKR X
      if (constraints.maxBudget !== undefined && product.price > constraints.maxBudget) {
        this.logger.warn(`[${requestId}] Rejected AI product ${product.id} (LKR ${product.price}) violating max budget LKR ${constraints.maxBudget}`);
        continue;
      }

      seenIds.add(product.id);
      validatedProducts.push({
        ...product,
        recommendationReason: rec.reason || `Fits your style and requirements.`
      });

      // Limit recommendations to 5 max
      if (validatedProducts.length >= 5) break;
    }

    // If AI returned 0 valid items, hydrate directly from candidate products fallback
    if (validatedProducts.length === 0 && candidateProducts.length > 0) {
      const fallbackList = candidateProducts.slice(0, 4);
      for (const p of fallbackList) {
        validatedProducts.push({
          ...p,
          recommendationReason: `Selected item matching your request.`
        });
      }
    }

    return {
      message: aiMessage,
      products: validatedProducts,
      requestId
    };
  }
}
