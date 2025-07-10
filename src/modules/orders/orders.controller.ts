import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('pedidos')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('crear')
  @Render('create-order.hbs')
  async getCreateOrder() {}

  @Post()
  @Redirect('/pedidos')
  create(@Body() createOrderDto: CreateOrderDto) {
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
