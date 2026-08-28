import { CatalogueService } from './catalogue.service';
import { Product } from '@styleseek/shared';
export declare class CatalogueController {
    private readonly catalogueService;
    constructor(catalogueService: CatalogueService);
    getAllProducts(): Product[];
    getProductById(id: string): Product;
}
