import { Injectable } from '@nestjs/common';
import { RedisMessageBrokerService } from 'src/redisMessageBroker/redisMessageBroker.service';
import { AdminDto } from './admin.dto';

@Injectable()
export class AdminService {
  async deleteBookStore(id: string) {
    return await this.redisMessageBrokerService.requestResponse('delete_book_store',  id );
  }
  async updateBookStore(admin: AdminDto, id: string) {
    return await this.redisMessageBrokerService.requestResponse('update_book_store', {
      admin,
      id,
    });
  }
  async createBookStore(admin: AdminDto) {
    return await this.redisMessageBrokerService.requestResponse('create_book_store',
      admin);
  }
  async findBookStoreById(id: string) {
    return await this.redisMessageBrokerService.requestResponse('get_book_store', id );
  }
  constructor(
    private readonly redisMessageBrokerService: RedisMessageBrokerService,
  ) {}
}
