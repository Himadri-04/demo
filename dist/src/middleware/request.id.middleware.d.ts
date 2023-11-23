import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
export interface RequestIdConfig {
    header: string;
    idGenerator: () => string;
}
export declare class RequestIdMiddleware implements NestMiddleware {
    private header;
    private idGenerator;
    constructor();
    use(request: Request, response: Response, next: NextFunction): void;
}
