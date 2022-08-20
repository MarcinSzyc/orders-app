import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from '../../../libs/common/src/dto/create-order.request';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ role: 'order', cmd: 'create' })
  async createOrder(request: CreateOrderRequest) {
    return await this.ordersService.createOrder(request);
  }

  @MessagePattern({ role: 'order', cmd: 'get' })
  async getOrders() {
    return await this.ordersService.getOrders();
  }
}
