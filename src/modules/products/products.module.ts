import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchemaModule } from './schemas/products.schema';

@Module({
  imports: [ProductSchemaModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
