import { Module } from '@nestjs/common';
import { MessagesController, Hello } from './messages.controller';

@Module({
  controllers: [MessagesController, Hello]
})
export class MessagesModule {}
