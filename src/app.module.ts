import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { ClientsModule } from './modules/clients/clients.module';
import MONGO_CONFIG from './config/mongo.config';

@Module({
  imports: [ProductsModule, ClientsModule, MONGO_CONFIG],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
