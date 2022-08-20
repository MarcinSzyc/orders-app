import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: configService.get('HOST'),
      port: configService.get('PORT'),
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
