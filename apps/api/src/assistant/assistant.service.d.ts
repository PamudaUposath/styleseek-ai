import { CatalogueService } from '../catalogue/catalogue.service';
import { DeterministicFilterService } from './deterministic-filter.service';
import { BedrockService } from './bedrock.service';
import { RecommendRequest, RecommendResponse } from '@styleseek/shared';
export declare class AssistantService {
    private readonly catalogueService;
    private readonly filterService;
    private readonly bedrockService;
    private readonly logger;
    constructor(catalogueService: CatalogueService, filterService: DeterministicFilterService, bedrockService: BedrockService);
    processRequest(dto: RecommendRequest, requestId?: string): Promise<RecommendResponse>;
    private generateConversationalMessage;
    private generateProductRationale;
}
