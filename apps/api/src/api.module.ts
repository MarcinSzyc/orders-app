import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        ORDERS_MICROSERVICE_HOST: Joi.string().required(),
        ORDERS_MICROSERVICE_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/api/.env',
    }),
    ClientsModule.registerAsync([
      {
        name: 'ORDER_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('ORDERS_MICROSERVICE_HOST'),
            port: configService.get('ORDERS_MICROSERVICE_PORT'),
          },
        }),
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class ApiModule {}
