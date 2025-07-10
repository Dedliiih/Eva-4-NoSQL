import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderSchemaModule } from './schemas/order.schema';
import { ProductSchemaModule } from '../products/schemas/products.schema';

@Module({
  imports: [OrderSchemaModule, ProductSchemaModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
