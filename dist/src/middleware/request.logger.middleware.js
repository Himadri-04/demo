"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpLoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const chalk_1 = require("chalk");
let HttpLoggerMiddleware = class HttpLoggerMiddleware {
    constructor() {
        this.logger = new common_1.Logger('HTTP');
    }
    use(request, response, next) {
        const { id, ip, method, originalUrl } = request;
        const userAgent = request.headers['user-agent'] ?? '';
        const start = Date.now();
        response.on('finish', () => {
            const durationInMilliseconds = Date.now() - start;
            const { statusCode } = response;
            const contentLength = response.get('content-length');
            this.logger.log(`${chalk_1.default.blueBright(process.pid)} ${chalk_1.default.magenta.bold(id)} ${chalk_1.default.cyanBright(ip)} ${method} ${originalUrl} HTTP/${request.httpVersion} ${statusCode} ${contentLength} - ${userAgent}: ${chalk_1.default.yellow(`${durationInMilliseconds.toLocaleString()} ms`)}`);
        });
        next();
    }
};
exports.HttpLoggerMiddleware = HttpLoggerMiddleware;
exports.HttpLoggerMiddleware = HttpLoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], HttpLoggerMiddleware);
//# sourceMappingURL=request.logger.middleware.js.map