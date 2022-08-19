import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aggregate } from './schemas/aggregate.schema';

@Injectable()
export class AggregateRepository extends AbstractRepository<Aggregate> {
  protected readonly logger = new Logger(AggregateRepository.name);

  constructor(
    @InjectModel(Aggregate.name)
    private readonly aggregateModel: Model<Aggregate>,
  ) {
    super(aggregateModel);
  }

  async getMostProfitableProducts() {
    return this.aggregateModel.find().sort({ cumulatedSales: -1 }).limit(10);
  }

  async getMostOftenBoughtProducts() {
    return this.aggregateModel.find().sort({ ordersCount: -1 }).limit(10);
  }
}
