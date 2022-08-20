import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Customer } from './customer.schema';
import { Item } from './item.schema';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ versionKey: false })
export class Order {
  @Prop()
  id: string;

  @Prop()
  date: string;

  @Prop()
  customer: Customer;

  @Prop([Item])
  items: Item[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
