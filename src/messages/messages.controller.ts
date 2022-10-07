import { Controller, Get, Post, Param, Query, Header, Body, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService:MessagesService){
    this.messagesService = messagesService
  }
  @Get()
  listMessages(){
    return this.messagesService.findAll()
  }

  @Post()
  createMessages(@Body() body:CreateMessageDto){
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
  async getMessage(@Param('id') id:string){
    const message = await this.messagesService.findOne(id)
    if(!message){
      throw new NotFoundException('The message you are trying to find does not exist')
    }
    return message
  }
    
}
@Controller('/')
export class Hello{
    @Get()
    getHello(){
      return 'Server up and running ✅'
    }
  }
