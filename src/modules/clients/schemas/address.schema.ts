import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Address {
  @Prop()
  city: string;

  @Prop()
  street: string;

  @Prop()
  houseNumber: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
