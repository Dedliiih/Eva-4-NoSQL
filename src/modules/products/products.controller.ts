import { Body, Controller, Delete, Get, Param, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/products.schema';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @Render('products.hbs')
  async getProducts(): Promise<{ products: Product[] }> {
    const products = await this.productsService.getProducts();
    return { products };
  }

  @Get('crear')
  @Render('create-product.hbs')
  async getCreateProduct() {
    return;
  }

  @Post()
  @Redirect('/productos')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<ProductDocument> {
    return await this.productsService.createProduct(createProductDto);
  }

  @Post('eliminar/:id')
  @Redirect('/productos')
  async deleteProduct(@Param('id') productId: string): Promise<Product | null> {
    return await this.productsService.deleteProduct(productId);
  }

  @Get('editar/:id')
  @Render('edit-product.hbs')
  async getUpdateProduct(@Param('id') productId: string): Promise<{ product: Product | null }> {
    const product = await this.productsService.getProductById(productId);
    return { product };
  }

  @Post('editar/:id')
  @Redirect('/productos')
  async updateProduct(@Param('id') productId: string, @Body() updateProductDto: UpdateProductDto): Promise<Product | null> {
    return await this.productsService.updateProduct(productId, updateProductDto);
  }
}
