import { Injectable } from "@nestjs/common";
import { RedisMessageBrokerService } from "src/redisMessageBroker/redisMessageBroker.service";
import { ShoppingCartDto } from "./shoppingcart.dto";

@Injectable()
export class ShoppingCartService{
     constructor(private readonly redisMessageBrokerService: RedisMessageBrokerService ){}
    findAllShoppingCart() {
            this.redisMessageBrokerService.requestResponse('get_all_shopping_cart');
        }
        findShoppingCartById(id: string) {
            this.redisMessageBrokerService.requestResponse('get_shopping_cart_by_id', {id});
        }
        createShoppingCart(shoppingCartDto: ShoppingCartDto) {
            this.redisMessageBrokerService.requestResponse('create_shopping_cart', {shoppingCartDto});
        }
        updateShoppingCart(shoppingCartDto: ShoppingCartDto, id: string) {
            this.redisMessageBrokerService.requestResponse('update_shopping_cart_by_id', {shoppingCartDto, id});
        }
        deleteShoppingCart(id: string) {
            this.redisMessageBrokerService.requestResponse('delete_shopping_cart_by_id', {id});
        }
}