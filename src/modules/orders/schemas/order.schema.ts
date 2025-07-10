import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Order {
  @Prop({ required: true })
  client: string;

  @Prop({ required: true })
  products: string[];

  @Prop()
  price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
export const OrderSchemaModule = MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]);
