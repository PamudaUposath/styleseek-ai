import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { Product } from '@styleseek/shared';

@Controller('api/products')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.catalogueService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    const product = this.catalogueService.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID '${id}' was not found`);
    }
    return product;
  }
}
