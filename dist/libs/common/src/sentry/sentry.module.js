"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentry = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_sentry_1 = require("@ntegral/nestjs-sentry");
let Sentry = class Sentry {
};
exports.Sentry = Sentry;
exports.Sentry = Sentry = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_sentry_1.SentryModule.forRootAsync({
                useFactory: (configService) => ({
                    dsn: configService.get('SENTRY_DSN'),
                    debug: false,
                    environment: configService.get('NODE_ENV'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [nestjs_sentry_1.SentryModule],
    })
], Sentry);
//# sourceMappingURL=sentry.module.js.map