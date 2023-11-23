"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisMQ = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const config_1 = require("@nestjs/config");
const redis_service_1 = require("./redis.service");
let RedisMQ = class RedisMQ {
};
exports.RedisMQ = RedisMQ;
exports.RedisMQ = RedisMQ = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_redis_1.RedisModule.forRootAsync({
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
                useFactory(configService) {
                    return {
                        readyLog: true,
                        config: {
                            url: configService.get('REDIS_URI') || '',
                            showFriendlyErrorStack: true,
                            enableOfflineQueue: true,
                            maxRetriesPerRequest: null,
                            retryStrategy: function (_times) {
                                return 2000;
                            },
                        },
                    };
                },
            }),
        ],
        providers: [redis_service_1.RedisService],
        exports: [nestjs_redis_1.RedisModule],
    })
], RedisMQ);
//# sourceMappingURL=redis.module.js.map