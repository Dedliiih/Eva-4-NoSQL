import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientSchemaModule } from './schemas/client.schema';

@Module({
  imports: [ClientSchemaModule],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
