import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Product } from '@styleseek/shared';
import * as productsJsonData from './data/products.json';

@Injectable()
export class CatalogueService implements OnModuleInit {
  private readonly logger = new Logger(CatalogueService.name);
  private products: Product[] = [];

  onModuleInit() {
    this.loadProducts();
  }

  private loadProducts() {
    try {
      // Use imported JSON data directly for guaranteed bundler compatibility
      const rawList = Array.isArray(productsJsonData)
        ? productsJsonData
        : (productsJsonData as any).default || [];

      this.products = rawList;
      this.logger.log(`Catalogue initialized with ${this.products.length} products`);
    } catch (err) {
      this.logger.error('Failed to load product catalogue', err);
      this.products = [];
    }
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getAvailableProducts(): Product[] {
    return this.products.filter(p => p.stockStatus !== 'OUT_OF_STOCK' && p.quantity > 0);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(query: string): Product[] {
    const q = query.toLowerCase();
    return this.products.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.colours.some(c => c.toLowerCase().includes(q))
    );
  }

  isValidAvailableProduct(id: string): boolean {
    const product = this.getProductById(id);
    return !!product && product.stockStatus !== 'OUT_OF_STOCK' && product.quantity > 0;
  }
}
