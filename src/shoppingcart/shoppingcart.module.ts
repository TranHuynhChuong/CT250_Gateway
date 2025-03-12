import { RedisCacheModule } from "src/redisCache/redisCache.module";
import { ShoppingCartController } from "./shoppingcart.controller";
import { ShoppingCartService } from "./shoppingcart.service";
import { RedisMessageBrokerModule } from "src/redisMessageBroker/redisMessageBroker.module";
import { Module } from "@nestjs/common";


@Module({
    imports: [
        RedisMessageBrokerModule,
        RedisCacheModule
    ],
    providers: [ShoppingCartService],
    controllers: [ShoppingCartController] 
})
export class ShoppingCartModule  {}