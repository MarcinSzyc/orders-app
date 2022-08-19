import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AggregateDocument = Aggregate & Document;

@Schema({ versionKey: false })
export class Aggregate {
  @Prop()
  id: string;

  @Prop()
  productName: string;

  @Prop()
  ordersCount: number;

  @Prop()
  cumulatedSales: number;
}

export const AggregateSchema = SchemaFactory.createForClass(Aggregate);
