import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Customer } from '../../../../apps/orders/src/schemas/customer.schema';
import { Item } from '../../../../apps/orders/src/schemas/item.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @Type(() => Customer)
  customer: Customer;

  @ApiProperty({ type: [Item] })
  @IsArray()
  @Type(() => Item)
  items: Item[];
}
