import { Module } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from './redis.service';

@Module({
  imports: [
    RedisModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory(configService: ConfigService): RedisModuleOptions {
        return {
          readyLog: true,
          config: {
            url: configService.get<string>('REDIS_URI') || '',
            showFriendlyErrorStack: true,
            enableOfflineQueue: true,
            maxRetriesPerRequest: null,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            retryStrategy: function (_times) {
              return 2000; // reconnect after 2 seconds
            },
          },
        };
      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisModule],
})
export class RedisMQ {}
