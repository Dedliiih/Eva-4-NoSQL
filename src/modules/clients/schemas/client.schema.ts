import { Prop, Schema, SchemaFactory, MongooseModule } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address, AddressSchema } from './address.schema';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rut: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: AddressSchema })
  address: Address;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
export const ClientSchemaModule = MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]);
