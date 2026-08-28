"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var CatalogueService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueService = void 0;
const common_1 = require("@nestjs/common");
const productsJsonData = __importStar(require("./data/products.json"));
let CatalogueService = CatalogueService_1 = class CatalogueService {
    logger = new common_1.Logger(CatalogueService_1.name);
    products = [];
    onModuleInit() {
        this.loadProducts();
    }
    loadProducts() {
        try {
            // Use imported JSON data directly for guaranteed bundler compatibility
            const rawList = Array.isArray(productsJsonData)
                ? productsJsonData
                : productsJsonData.default || [];
            this.products = rawList;
            this.logger.log(`Catalogue initialized with ${this.products.length} products`);
        }
        catch (err) {
            this.logger.error('Failed to load product catalogue', err);
            this.products = [];
        }
    }
    getAllProducts() {
        return this.products;
    }
    getAvailableProducts() {
        return this.products.filter(p => p.stockStatus !== 'OUT_OF_STOCK' && p.quantity > 0);
    }
    getProductById(id) {
        return this.products.find(p => p.id === id);
    }
    searchProducts(query) {
        const q = query.toLowerCase();
        return this.products.filter(p => p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q)) ||
            p.colours.some((c) => c.toLowerCase().includes(q)));
    }
    isValidAvailableProduct(id) {
        const product = this.getProductById(id);
        return !!product && product.stockStatus !== 'OUT_OF_STOCK' && product.quantity > 0;
    }
};
exports.CatalogueService = CatalogueService;
exports.CatalogueService = CatalogueService = CatalogueService_1 = __decorate([
    (0, common_1.Injectable)()
], CatalogueService);
//# sourceMappingURL=catalogue.service.js.map