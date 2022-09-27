import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    
}
@Controller('/')
export class Hello{
    @Get()
    getHello(){
      return 'Server up and running ✅'
    }
  }
