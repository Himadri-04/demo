export type APIPayload = {
    items?: (string | object)[];
    item?: object;
    count?: number;
};
export type APIData = (string | object)[] | object;
export type APIResponse = {
    data: APIData;
    count: number;
    success: true;
    message: string;
    status: number;
};
export type APIErrorData = {
    message: string;
} | string | null;
export type ErrorAPIResponse = {
    data: APIErrorData | null;
    success: false;
    message: string;
    status: number;
};
export type ErrorAPIRes = {
    error: string;
};
export declare function successResponse(data: APIPayload, message?: string, statusCode?: number): APIResponse;
export declare function errorResponse(message: string, statusCode?: number, json?: APIErrorData | null): ErrorAPIResponse;
export declare function errorRes(error: Error): ErrorAPIRes;
export declare function wait(ms: number): Promise<void>;
