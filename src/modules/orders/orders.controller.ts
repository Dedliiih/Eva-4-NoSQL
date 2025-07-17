import { Controller, Get, Post, Body, Param, Render, Redirect } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductsService } from '../products/products.service';
import { ClientsService } from '../clients/clients.service';

@Controller('pedidos')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly clientsService: ClientsService,
    private readonly productsService: ProductsService
  ) {}

  @Get('crear')
  @Render('create-order.hbs')
  async getCreateOrder() {
    const products = await this.productsService.getProducts();
    const clients = await this.clientsService.getClients();
    return { clients, products, productsJson: JSON.stringify(products) };
  }

  @Post()
  @Redirect('/pedidos')
  create(@Body() createOrderDto: CreateOrderDto) {
    console.log(createOrderDto);
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @Render('orders.hbs')
  async findAll() {
    const orders = await this.ordersService.findAll();
    return { orders };
  }

  @Post('eliminar/:id')
  @Redirect('/pedidos')
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(id);
  }
}
