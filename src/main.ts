import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { URL_CONNECTION } from '@shared/config/env';
import { NO_ACK, QUEUE_NAME, TRANSPORTER } from '@shared/config/env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport[TRANSPORTER],
    options: {
      urls: [URL_CONNECTION],
      queue: QUEUE_NAME,
      noAck: NO_ACK,
    },
  });

  await app.listen();
}
bootstrap();
