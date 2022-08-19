import { Controller, Get } from '@nestjs/common';
import { AggregateService } from './aggregate.service';

@Controller('aggregate')
export class AggregateController {
  constructor(private readonly aggregateService: AggregateService) {}

  @Get('/most-profitable')
  async getMostProfitableProducts() {
    return this.aggregateService.getMostProfitableProducts();
  }

  @Get('/most-often-bought')
  async getMostOftenBoughtProducts() {
    return this.aggregateService.getMostOftenBoughtProducts();
  }

  @Get('/most-often-bought-yesterday')
  async getMostOftenBoughtProductsFromYesterday() {
    return this.aggregateService.getMostOftenBoughtProductsFromYesterday();
  }
}
