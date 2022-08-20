import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Customer } from '@app/common/schemas/orders/customer.schema';
import { ApiProperty } from '@nestjs/swagger';
import { Item } from '@app/common/schemas/orders/item.schema';

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
