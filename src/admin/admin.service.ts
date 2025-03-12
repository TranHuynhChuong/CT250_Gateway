import { Injectable } from "@nestjs/common";
import { RedisMessageBrokerService } from "src/redisMessageBroker/redisMessageBroker.service";
import { AdminDto } from "./admin.dto";


@Injectable() 
export class AdminService {
        deleteBookStore(id: string) {
        this.redisMessageBrokerService.requestResponse('delete_book_store', { id });
    }
    updateBookStore(admin: AdminDto, id: string) {
        this.redisMessageBrokerService.requestResponse('update_book_store', {admin, id});
    }
    createBookStore(admin: AdminDto) {
        this.redisMessageBrokerService.requestResponse('create_book_store', {admin});
    }
    findBookStoreById(id: string) {
        this.redisMessageBrokerService.requestResponse('get_book_store', {id});
    }
    constructor(private readonly redisMessageBrokerService: RedisMessageBrokerService){}
}