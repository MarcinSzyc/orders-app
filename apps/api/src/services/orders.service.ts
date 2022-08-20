import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_SERVICE')
    private readonly ordersClientService: ClientProxy,
  ) {}

  async createOrder(request) {
    return this.ordersClientService.send(
      { role: 'order', cmd: 'create' },
      request,
    );
  }

  async getOrders() {
    return await this.ordersClientService.send(
      { role: 'order', cmd: 'get' },
      {},
    );
  }
}
