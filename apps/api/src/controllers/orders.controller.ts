import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateOrderRequest } from '../dto/create-order.request';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateOrderRequest,
  })
  async handleOrder(@Body() request: CreateOrderRequest) {
    return await this.ordersService.handleOrder(request);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: [CreateOrderRequest],
  })
  getOrders() {
    return this.ordersService.getOrders();
  }
}
