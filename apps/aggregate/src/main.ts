import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AggregateModule } from './aggregate.module';

async function bootstrap() {
  const app = await NestFactory.create(AggregateModule);
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
