import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ProductSchema, Product } from './product.schema';

@Schema({ versionKey: false })
export class Item {
  @Prop({
    type: ProductSchema,
  })
  product: Product;

  @Prop()
  quantity: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
