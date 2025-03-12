import { Injectable } from "@nestjs/common";
import { RedisMessageBrokerService } from "src/redisMessageBroker/redisMessageBroker.service";
import { userDto } from "./user.dto";

@Injectable()
export class CustomerService {
    constructor(private readonly redisMessageBrokerService: RedisMessageBrokerService ){}

    async findAllUser() {
        return await this.redisMessageBrokerService.requestResponse('get_user', {});
    }
    async findUserById(customerId: string) {
        return await this.redisMessageBrokerService.requestResponse('get_user_by_id', {id: customerId});
    }

    async createUser(user: userDto) {
        return await this.redisMessageBrokerService.requestResponse('create_user', user);
    }

    async updateUser(userUpdate: userDto, id: string){
        return await this.redisMessageBrokerService.requestResponse('update_user_by_id', {userUpdate, id});
    }
    async deleteUser( id: string ) {
        return await this.redisMessageBrokerService.requestResponse('delete_user_by_id', {id});
    }
}