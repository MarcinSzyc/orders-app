import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Customer } from '../schemas/customer.schema';
import { Item } from '../schemas/item.schema';

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  date: string;

  @Type(() => Customer)
  customer: Customer;

  @IsArray()
  @Type(() => Item)
  items: Item[];
}
