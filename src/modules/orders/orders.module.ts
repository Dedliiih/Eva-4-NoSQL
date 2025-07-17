import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderSchemaModule } from './schemas/order.schema';
import { ProductSchemaModule } from '../products/schemas/products.schema';
import { ProductsService } from '../products/products.service';
import { ClientsService } from '../clients/clients.service';
import { ClientSchemaModule } from '../clients/schemas/client.schema';

@Module({
  imports: [OrderSchemaModule, ProductSchemaModule, ClientSchemaModule],
  controllers: [OrdersController],
  providers: [OrdersService, ProductsService, ClientsService]
})
export class OrdersModule {}
