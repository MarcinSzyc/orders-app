import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';
import { ApiResponse } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateOrderRequest,
  })
  async createOrder(@Body() request: CreateOrderRequest) {
    return await this.ordersService.createOrder(request);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: [CreateOrderRequest],
  })
  async getOrders() {
    return await this.ordersService.getOrders();
  }
}
