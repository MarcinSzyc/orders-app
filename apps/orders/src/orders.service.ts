import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from '../../../libs/common/src/dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return await this.ordersRepository.create(request);
  }

  async getOrders() {
    return await this.ordersRepository.find({});
  }
}
