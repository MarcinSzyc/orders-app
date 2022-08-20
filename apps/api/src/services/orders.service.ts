import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_SERVICE')
    private readonly ordersClientService: ClientProxy,
  ) {}

  createOrder(request): Observable<number> {
    return this.ordersClientService.send(
      { role: 'order', cmd: 'create' },
      request,
    );
  }

  getOrders(): Observable<number> {
    return this.ordersClientService.send({ role: 'order', cmd: 'get' }, {});
  }
}
