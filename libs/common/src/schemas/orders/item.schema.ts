import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ProductSchema, Product } from './product.schema';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ versionKey: false })
export class Item {
  @ApiProperty()
  @Prop({
    type: ProductSchema,
  })
  product: Product;

  @ApiProperty()
  @Prop()
  quantity: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
