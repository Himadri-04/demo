import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
export declare class RateLimiterMiddleware implements NestMiddleware {
    private readonly configService;
    private redis;
    private limiter;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
