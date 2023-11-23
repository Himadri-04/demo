import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Redis } from 'ioredis';
import { EnvironmentVariables } from 'libs/common/src/environment/environment.service';
export declare class AppModule implements NestModule {
    private readonly env;
    private readonly redis;
    private session;
    constructor(env: EnvironmentVariables, redis: Redis);
    configure(consumer: MiddlewareConsumer): void;
}
