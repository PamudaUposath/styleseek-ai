import { OnModuleInit } from '@nestjs/common';
import { Product } from '@styleseek/shared';
export declare class CatalogueService implements OnModuleInit {
    private readonly logger;
    private products;
    onModuleInit(): void;
    private loadProducts;
    getAllProducts(): Product[];
    getAvailableProducts(): Product[];
    getProductById(id: string): Product | undefined;
    searchProducts(query: string): Product[];
    isValidAvailableProduct(id: string): boolean;
}
