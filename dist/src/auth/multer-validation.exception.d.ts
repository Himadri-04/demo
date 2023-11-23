import { HttpException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
export declare class MulterValidationExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void | Response<any, Record<string, any>>;
}
