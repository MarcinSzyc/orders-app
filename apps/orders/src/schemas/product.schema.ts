import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ versionKey: false })
export class Product {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
