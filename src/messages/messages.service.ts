import { MessageRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessageRepository
    constructor(){
        //DONT DO THIS ON REAL APPS
        this.messagesRepo = new MessageRepository()
    }

    findOne(id:string){
        return this.messagesRepo.findOne(id)
    }

    findAll(){
        return this.messagesRepo.findAll()
    }

    create(content:string){
        return this.messagesRepo.create(content)
    }
}