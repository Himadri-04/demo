"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responser = void 0;
function responser(statusCode, message, error, data) {
    const returnObj = {
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
exports.responser = responser;
//# sourceMappingURL=index.js.map