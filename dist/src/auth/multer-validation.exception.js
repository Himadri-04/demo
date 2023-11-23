"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterValidationExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const common_service_1 = require("./common.service");
let MulterValidationExceptionFilter = class MulterValidationExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        if (status === 401) {
            const responses = exception.getResponse();
            const messages = responses;
            if (messages?.error === 'login-auth') {
                return response
                    .status(common_1.HttpStatus.BAD_REQUEST)
                    .json((0, common_service_1.errorResponse)(messages.message?.length > 0 ? messages.message[0] : '', common_1.HttpStatus.BAD_REQUEST, messages.message));
            }
            if (messages?.error !== 'local') {
                return response.status(common_1.HttpStatus.UNAUTHORIZED).redirect(`/sign-in?error=${messages?.message ?? ''}`);
            }
        }
        if (status === 400) {
            const responses = exception.getResponse();
            const messages = responses;
            response
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json((0, common_service_1.errorResponse)(messages.message?.length > 0 ? messages.message[0] : '', common_1.HttpStatus.BAD_REQUEST, messages.message));
        }
        else {
            response.status(status).json(exception.getResponse());
        }
    }
};
exports.MulterValidationExceptionFilter = MulterValidationExceptionFilter;
exports.MulterValidationExceptionFilter = MulterValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], MulterValidationExceptionFilter);
//# sourceMappingURL=multer-validation.exception.js.map