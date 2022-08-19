import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Customer {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
