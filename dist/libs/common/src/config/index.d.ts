export interface IReturnObj {
    statusCode?: number;
    message?: string;
    error?: string;
    data?: Record<string, unknown>;
}
export declare function responser(statusCode: number, message: string, error?: string, data?: Record<string, unknown>): IReturnObj;
