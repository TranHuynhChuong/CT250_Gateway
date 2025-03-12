import { Module } from "@nestjs/common";
import { RedisCacheModule } from "src/redisCache/redisCache.module";
import { RedisMessageBrokerModule } from "src/redisMessageBroker/redisMessageBroker.module";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";

@Module({
    imports: [RedisMessageBrokerModule,
        RedisCacheModule
    ],
    controllers: [AdminController],
    providers: [AdminService]
}) 
export class AdminModule {}