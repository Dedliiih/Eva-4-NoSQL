import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { Product } from '../products/schemas/products.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    if (typeof createOrderDto.products === 'string') {
      createOrderDto.products = [createOrderDto.products];
    }

    const orderProducts = createOrderDto.products;
    let orderPrice = 0;

    for (const product of orderProducts) {
      const searchProduct = await this.productModel.find({
        name: { $in: product }
      });
      orderPrice += searchProduct[0].price;
    }

    createOrderDto.price = orderPrice;

    const newOrder = new this.orderModel(createOrderDto);
    return newOrder.save();
  }

  async findAll() {
    return await this.orderModel.find().lean().exec();
  }

  async remove(id: string) {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
