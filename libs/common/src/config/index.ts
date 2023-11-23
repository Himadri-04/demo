export interface IReturnObj {
  statusCode?: number;
  message?: string;
  error?: string;
  data?: Record<string, unknown>;
}

/**
 * common response handler
 * @param statusCode {number}
 * @param message {string}
 * @param error {string}
 * @param data {Record<string, unknown>}
 * @returns return the response
 */
export function responser(statusCode: number, message: string, error?: string, data?: Record<string, unknown>) {
  const returnObj: IReturnObj = {
    statusCode: statusCode,
    message: message,
  };
  if (error) {
    returnObj['error'] = error;
  }
  if (data) {
    returnObj['data'] = data;
  }
  return returnObj;
}
