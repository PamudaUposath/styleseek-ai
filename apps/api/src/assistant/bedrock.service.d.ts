import { Product, AIStructuredOutput, ChatMessage } from '@styleseek/shared';
export declare class BedrockService {
    private readonly logger;
    private getSystemPrompt;
    getRecommendations(userMessage: string, candidateProducts: Product[], history?: ChatMessage[]): Promise<AIStructuredOutput>;
    private parseAndCleanJson;
}
