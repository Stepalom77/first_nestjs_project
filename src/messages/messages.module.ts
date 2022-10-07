import { Module } from '@nestjs/common';
import { MessagesController, Hello } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRepository } from './messages.repository';
@Module({
  controllers: [MessagesController, Hello],
  providers: [MessageRepository, MessagesService]
})
export class MessagesModule {}
