import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Aggregate, AggregateSchema } from './schemas/aggregate.schema';
import { AggregateService } from './aggregate.service';
import { AggregateRepository } from './aggregate.repository';
import { OrderSchema, Order } from '../schemas/order.schema';
import { AggregateController } from './aggregate.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Aggregate.name,
        schema: AggregateSchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
    DatabaseModule,
  ],
  controllers: [AggregateController],
  providers: [AggregateService, AggregateRepository],
  exports: [AggregateService, AggregateRepository],
})
export class AggregateModule {}
