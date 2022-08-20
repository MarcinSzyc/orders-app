import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { AggregateService } from './aggregate.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_SERVICE')
    private readonly ordersClientService: ClientProxy,
    private readonly aggregateService: AggregateService,
  ) {}

  async handleOrder(request) {
    lastValueFrom(await this.aggregateService.createAggregateEntry(request));
    return this.ordersClientService.send(
      { role: 'order', cmd: 'create' },
      request,
    );
  }

  getOrders() {
    return this.ordersClientService.send({ role: 'order', cmd: 'get' }, {});
  }
}
