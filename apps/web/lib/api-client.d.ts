import { RecommendRequest, RecommendResponse, Product } from '@styleseek/shared';
export declare function requestRecommendations(dto: RecommendRequest): Promise<RecommendResponse>;
export declare function fetchProducts(): Promise<Product[]>;
