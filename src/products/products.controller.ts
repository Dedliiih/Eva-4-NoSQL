import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @Render('products.hbs')
  async getProducts() {
    const products = await this.productsService.getProducts();
    return { products };
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }
}
