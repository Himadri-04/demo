import { Redis } from 'ioredis';
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    get instance(): Redis;
    setValue(key: string, value: string): Promise<void>;
    getValue(key: string): Promise<string | null>;
}
