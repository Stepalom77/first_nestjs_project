import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {MessagesModule} from './messages/messages.module'

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(7700, () => {
    console.log('Listening on port:7700')
  });
}
bootstrap();
