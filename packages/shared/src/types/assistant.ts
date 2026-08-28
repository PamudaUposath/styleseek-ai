import { RecommendedProduct } from './product';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface RecommendRequest {
  message: string;
  history?: ChatMessage[];
}

export interface AIRecommendationItem {
  productId: string;
  reason: string;
}

export interface AIStructuredOutput {
  message: string;
  recommendations: AIRecommendationItem[];
}

export interface RecommendResponse {
  message: string;
  products: RecommendedProduct[];
  requestId: string;
}
