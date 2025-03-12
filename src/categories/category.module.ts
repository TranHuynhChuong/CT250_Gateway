import { Module } from "@nestjs/common";
import { RedisMessageBrokerModule } from "src/redisMessageBroker/redisMessageBroker.module";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { RedisCacheModule } from "src/redisCache/redisCache.module";

@Module({
    imports: [RedisMessageBrokerModule,
            RedisCacheModule],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}