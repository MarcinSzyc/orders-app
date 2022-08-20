import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ versionKey: false })
export class Customer {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  name: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
