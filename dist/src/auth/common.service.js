"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = exports.errorRes = exports.errorResponse = exports.successResponse = void 0;
const common_1 = require("@nestjs/common");
const common_interface_1 = require("../../libs/common/src/interfaces/common.interface");
function successResponse(data, message, statusCode) {
    return {
        data: data.items || data.item || {},
        count: data.count || 0,
        success: true,
        message: message || '',
        status: statusCode || 200,
    };
}
exports.successResponse = successResponse;
function errorResponse(message, statusCode, json = null) {
    if (typeof json === 'object' && json !== null) {
        message = json.message || message;
    }
    return {
        data: json,
        success: false,
        message: message || '',
        status: statusCode || 500,
    };
}
exports.errorResponse = errorResponse;
function errorRes(error) {
    const logger = new common_1.Logger('errorRes');
    logger.error(error);
    let errorMessage = '';
    switch (error?.name) {
        case common_interface_1.IErrorNamesEnum.SequelizeDatabaseError:
            errorMessage =
                'We ran into an error, the team has been notified about this. While we fix it you can go back to previous actions.';
            break;
        case common_interface_1.IErrorNamesEnum.SequelizeConnectionRefusedError:
            errorMessage =
                'We ran into an error, the team has been notified about this. While we fix it you can go back to previous actions.';
            break;
        default:
            errorMessage =
                'We ran into an error, the team has been notified about this. While we fix it you can go back to previous actions.';
            break;
    }
    return { error: errorMessage };
}
exports.errorRes = errorRes;
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.wait = wait;
//# sourceMappingURL=common.service.js.map