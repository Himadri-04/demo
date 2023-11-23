"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAuthGuard = exports.LocalAuthGuard = void 0;
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const ioredis_1 = require("ioredis");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    async canActivate(context) {
        const can = (await super.canActivate(context));
        if (can)
            await super.logIn(context.switchToHttp().getRequest());
        return can;
    }
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
let SessionAuthGuard = class SessionAuthGuard {
    constructor(redis) {
        this.redis = redis;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const response = await request.isAuthenticated();
        if (response) {
            return response;
        }
        throw new common_1.UnauthorizedException('Session has expired!', 'local');
    }
};
exports.SessionAuthGuard = SessionAuthGuard;
exports.SessionAuthGuard = SessionAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_redis_1.InjectRedis)()),
    __metadata("design:paramtypes", [ioredis_1.Redis])
], SessionAuthGuard);
//# sourceMappingURL=auth.guard.js.map