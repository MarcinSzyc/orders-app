import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateOrderRequest } from '../dto/create-order.request';
import { OrdersService } from '../services/orders.service';
import { AggregateService } from '../services/aggregate.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly aggregateService: AggregateService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateOrderRequest,
  })
  async createOrder(@Body() request: CreateOrderRequest) {
    await this.aggregateService.createAggregateEntry(request);
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