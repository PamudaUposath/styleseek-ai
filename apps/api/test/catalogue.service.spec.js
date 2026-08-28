"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalogue_service_1 = require("../src/catalogue/catalogue.service");
describe('CatalogueService', () => {
    let service;
    beforeEach(() => {
        service = new catalogue_service_1.CatalogueService();
        service.onModuleInit();
    });
    it('should load products from products.json', () => {
        const products = service.getAllProducts();
        expect(products.length).toBeGreaterThanOrEqual(30);
    });
    it('should return a specific product by ID', () => {
        const product = service.getProductById('STY-001');
        expect(product).toBeDefined();
        expect(product?.name).toBe('Essential Black Oversized T-Shirt');
        expect(product?.currency).toBe('LKR');
    });
    it('should correctly filter out-of-stock items', () => {
        const available = service.getAvailableProducts();
        expect(available.every(p => p.stockStatus !== 'OUT_OF_STOCK' && p.quantity > 0)).toBe(true);
        const outOfStockItem = service.getProductById('STY-027');
        expect(outOfStockItem?.stockStatus).toBe('OUT_OF_STOCK');
        expect(service.isValidAvailableProduct('STY-027')).toBe(false);
    });
    it('should search products by query keyword', () => {
        const tshirts = service.searchProducts('T-Shirt');
        expect(tshirts.length).toBeGreaterThan(0);
        expect(tshirts.some(p => p.id === 'STY-001')).toBe(true);
    });
});
//# sourceMappingURL=catalogue.service.spec.js.map