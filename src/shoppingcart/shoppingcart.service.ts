import { Injectable } from '@nestjs/common';
import { RedisMessageBrokerService } from 'src/redisMessageBroker/redisMessageBroker.service';
import { ShoppingCartDto } from './shoppingcart.dto';

@Injectable()
export class ShoppingCartService {
  async deleteAllShoppingCartsByUserId(userId: string) {
    return await this.redisMessageBrokerService.requestResponse(
        'delete_all_shopping_cart_by_user_id',
        userId,
      );
  }
  constructor(
    private readonly redisMessageBrokerService: RedisMessageBrokerService,
  ) {}
  async findShoppingCartsByUserId(userId: string) {
    return await this.redisMessageBrokerService.requestResponse(
      'find_shopping_cart_by_user_id',
      userId,
    );
  }
  async findAllShoppingCart() {
    return await this.redisMessageBrokerService.requestResponse(
      'get_all_shopping_cart', {}
    );
  }
  async findShoppingCartById(id: string) {
    return await this.redisMessageBrokerService.requestResponse(
      'get_shopping_cart_by_id',
      { id },
    );
  }
  async createShoppingCart(shoppingCartDto: ShoppingCartDto) {
    return await this.redisMessageBrokerService.requestResponse(
      'create_shopping_cart',
      shoppingCartDto ,
    );
  }
  async updateShoppingCart(shoppingCartDto: ShoppingCartDto, id: string) {
    return await this.redisMessageBrokerService.requestResponse(
      'update_shopping_cart_by_id',
      { shoppingCartDto, id },
    );
  }
  async deleteShoppingCart(id: string) {
    return await this.redisMessageBrokerService.requestResponse(
      'delete_shopping_cart_by_id',
      { id },
    );
  }
}
