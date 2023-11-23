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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
const auth_module_1 = require("./auth/auth.module");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const ioredis_1 = require("ioredis");
const Session = require("express-session");
const connect_redis_1 = require("connect-redis");
const passport_1 = require("passport");
const cookie_parser_1 = require("cookie-parser");
const request_ip_1 = require("request-ip");
const middleware_1 = require("./middleware");
const helmet_1 = require("helmet");
const environment_module_1 = require("../libs/common/src/environment/environment.module");
const database_module_1 = require("../libs/common/src/db/database.module");
const redis_module_1 = require("../libs/common/src/redis/redis.module");
const email_module_1 = require("../libs/common/src/utils/email/email.module");
const environment_service_1 = require("../libs/common/src/environment/environment.service");
let AppModule = class AppModule {
    constructor(env, redis) {
        this.env = env;
        this.redis = redis;
        const expiry = this.env.sessionExpiry;
        this.session = Session.default({
            store: new connect_redis_1.default({ client: this.redis }),
            name: this.env.cookieName,
            secret: this.env.sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: expiry * 3600000, secure: 'auto', sameSite: true },
        });
    }
    configure(consumer) {
        consumer
            .apply(middleware_1.RequestIdMiddleware, request_ip_1.default.mw(), middleware_1.HttpLoggerMiddleware, (0, cookie_parser_1.default)(), middleware_1.RateLimiterMiddleware, (0, helmet_1.default)(), this.session, passport_1.default.initialize(), passport_1.default.session())
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate: class_validator_1.validate,
            }),
            auth_module_1.AuthModule,
            environment_module_1.EnvironmentModule,
            database_module_1.DatabaseModule,
            redis_module_1.RedisMQ,
            email_module_1.EmailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __param(1, (0, nestjs_redis_1.InjectRedis)()),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentVariables,
        ioredis_1.Redis])
], AppModule);
//# sourceMappingURL=app.module.js.map