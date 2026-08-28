export type StockStatus = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';

export type Category =
  | 'T-Shirts'
  | 'Shirts'
  | 'Hoodies'
  | 'Jeans'
  | 'Trousers'
  | 'Shorts'
  | 'Dresses'
  | 'Jackets'
  | 'Accessories';

export type Audience = 'Men' | 'Women' | 'Unisex';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  audience: Audience;
  price: number;
  currency: 'LKR';
  colours: string[];
  sizes: string[];
  stockStatus: StockStatus;
  quantity: number;
  tags: string[];
  imageUrl: string;
}

export interface RecommendedProduct extends Product {
  recommendationReason: string;
}
