import { DatabaseModule } from '@app/common/database/database.module';
import { Order, OrderSchema } from '@app/common/schemas/orders/order.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AggregateController } from './aggregate.controller';
import { AggregateRepository } from './aggregate.repository';
import { AggregateService } from './aggregate.service';
import { Aggregate, AggregateSchema } from './schemas/aggregate.schema';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        HOST: Joi.string().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
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
