import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type AggregateDocument = Aggregate & Document;

@Schema({ versionKey: false })
export class Aggregate {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  productName: string;

  @ApiProperty()
  @Prop()
  ordersCount: number;

  @ApiProperty()
  @Prop()
  cumulatedSales: number;
}

@Schema({ versionKey: false })
export class AggregateYesterday {
  @ApiProperty()
  @Prop()
  product: string;

  @ApiProperty()
  @Prop()
  total_value: string;

  @ApiProperty()
  @Prop()
  ordersWithProduct: number;

  @ApiProperty()
  @Prop()
  product_id: string;
}

export const AggregateSchema = SchemaFactory.createForClass(Aggregate);
