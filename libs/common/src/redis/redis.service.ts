import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  get instance() {
    return this.redis;
  }

  async setValue(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
  }

  async getValue(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }
}
