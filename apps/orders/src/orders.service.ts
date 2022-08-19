import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';
import { AggregateService } from './aggregate/aggregate.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly aggregateService: AggregateService,
  ) {}

  async createOrder(request: CreateOrderRequest) {
    await this.aggregateService.createAggregateEntry(request);
    return await this.ordersRepository.create(request);
  }

  async getOrders() {
    return await this.ordersRepository.find({});
  }
}
