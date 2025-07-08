import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProductById(productId: string): Promise<Product | null> {
    return await this.productModel.findById(productId);
  }

  async createProduct(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async deleteProduct(productId: string): Promise<Product | null> {
    return await this.productModel.findByIdAndDelete(productId);
  }

  async updateProduct(productId: string, updateProductDto: UpdateProductDto): Promise<Product | null> {
    return await this.productModel.findByIdAndUpdate(productId, updateProductDto);
  }
}
