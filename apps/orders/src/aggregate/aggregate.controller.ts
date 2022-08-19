import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AggregateService } from './aggregate.service';
import { Aggregate, AggregateYesterday } from './schemas/aggregate.schema';

@Controller('aggregate')
export class AggregateController {
  constructor(private readonly aggregateService: AggregateService) {}

  @Get('/most-profitable')
  @ApiResponse({
    status: 200,
    description: 'Most profitable products list.',
    type: [Aggregate],
  })
  async getMostProfitableProducts() {
    return this.aggregateService.getMostProfitableProducts();
  }

  @Get('/most-often-bought')
  @ApiResponse({
    status: 200,
    description: 'Most often bought products.',
    type: [Aggregate],
  })
  async getMostOftenBoughtProducts() {
    return this.aggregateService.getMostOftenBoughtProducts();
  }

  @Get('/most-often-bought-yesterday')
  @ApiResponse({
    status: 200,
    description: 'Most often bought products yesterday.',
    type: [AggregateYesterday],
  })
  async getMostOftenBoughtProductsFromYesterday() {
    return this.aggregateService.getMostOftenBoughtProductsFromYesterday();
  }
}
