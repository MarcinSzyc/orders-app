import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AggregateService {
  protected readonly logger: Logger;
  constructor(
    @Inject('AGGREGATE_SERVICE')
    private readonly aggregateClientService: ClientProxy,
  ) {}

  async createAggregateEntry(order) {
    return this.aggregateClientService.send(
      { role: 'aggregate', cmd: 'createAggregate' },
      order,
    );
  }

  // Implement EP returning TOP 10 profitable products, based on their sales value
  // (quantity sales x product price). Keep in mind that pri
  async getMostProfitableProducts() {
    return this.aggregateClientService.send(
      { role: 'aggregate', cmd: 'getMostProfitableProducts' },
      {},
    );
  }

  // Implement EP returning TOP 10 most often bought products (in terms of
  // order count, not quantity).
  async getMostOftenBoughtProducts() {
    return this.aggregateClientService.send(
      { role: 'aggregate', cmd: 'getMostOftenBoughtProducts' },
      {},
    );
  }

  // Implement EP returning TOP 10 most often bought products (in terms of
  // order count, not quantity) from yesterday
  async getMostOftenBoughtProductsFromYesterday() {
    return this.aggregateClientService.send(
      { role: 'aggregate', cmd: 'getMostOftenBoughtProductsFromYesterday' },
      {},
    );
  }
}
