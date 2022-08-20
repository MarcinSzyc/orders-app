import { CreateOrderRequest } from '@app/common/dto/create-order.request';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AggregateService } from './aggregate.service';

@Controller('aggregate')
export class AggregateController {
  constructor(private readonly aggregateService: AggregateService) {}

  @MessagePattern({ role: 'aggregate', cmd: 'createAggregate' })
  async createAggregate(request: CreateOrderRequest) {
    return await this.aggregateService.createAggregateEntry(request);
  }

  @MessagePattern({ role: 'aggregate', cmd: 'getMostProfitableProducts' })
  async getMostProfitableProducts() {
    return this.aggregateService.getMostProfitableProducts();
  }

  @MessagePattern({ role: 'aggregate', cmd: 'getMostOftenBoughtProducts' })
  async getMostOftenBoughtProducts() {
    return this.aggregateService.getMostOftenBoughtProducts();
  }

  @MessagePattern({
    role: 'aggregate',
    cmd: 'getMostOftenBoughtProductsFromYesterday',
  })
  async getMostOftenBoughtProductsFromYesterday() {
    return this.aggregateService.getMostOftenBoughtProductsFromYesterday();
  }
}
