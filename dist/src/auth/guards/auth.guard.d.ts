import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Redis } from 'ioredis';
declare const LocalAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export declare class SessionAuthGuard implements CanActivate {
    private redis;
    constructor(redis: Redis);
    canActivate(context: ExecutionContext): Promise<any>;
}
export {};
