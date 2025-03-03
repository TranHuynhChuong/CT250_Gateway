import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  const redisMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.REDIS,
      options: {
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT'),
        db: 1,
      },
    });
  await redisMicroservice.listen();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
