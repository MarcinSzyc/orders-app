import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Joi from 'joi';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema, Order } from './schemas/order.schema';

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
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
