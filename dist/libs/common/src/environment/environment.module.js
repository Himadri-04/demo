"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const environment_service_1 = require("./environment.service");
const environment_interface_1 = require("./environment.interface");
const joi_1 = require("joi");
function getEnumValues(e) {
    return typeof e === 'object' ? Object.values(e) : [];
}
let EnvironmentModule = class EnvironmentModule {
};
exports.EnvironmentModule = EnvironmentModule;
exports.EnvironmentModule = EnvironmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: joi_1.default.object({
                    NODE_ENV: joi_1.default.string()
                        .valid(...getEnumValues(environment_interface_1.EnvironmentType))
                        .default(environment_interface_1.EnvironmentType.Development),
                    PORT: joi_1.default.number().port().default(3000),
                    SESSION_SECRET: joi_1.default.string().min(8).required(),
                    SESSION_EXPIRY: joi_1.default.number().min(1).default(1),
                    COOKIE_NAME: joi_1.default.string().default('session'),
                    PER_PAGE_LIMIT: joi_1.default.number().min(10).positive().default(20),
                    REDIS_URI: joi_1.default.string().uri().required(),
                    SCALING: joi_1.default.string().required(),
                    SENTRY_DSN: joi_1.default.string().required(),
                    GOOGLE_CLIENT_ID: joi_1.default.string().required(),
                    GOOGLE_CLIENT_SECRET: joi_1.default.string().required(),
                    LINKEDIN_CLIENT_ID: joi_1.default.string().required(),
                    LINKEDIN_CLIENT_SECRET: joi_1.default.string().required(),
                    APPLE_CLIENT_ID: joi_1.default.string().required(),
                    APPLE_TEAM_ID: joi_1.default.string().required(),
                    MAIL_HOST: joi_1.default.string().required(),
                    MAIL_PORT: joi_1.default.number().required(),
                    MAIL_SECURE: joi_1.default.boolean().required(),
                    MAIL_USERNAME: joi_1.default.string().required(),
                    MAIL_PASSWORD: joi_1.default.string().required(),
                    MAIL_FROM: joi_1.default.string().required(),
                    AZUR_CONNECTION_STRING: joi_1.default.string().required(),
                    AZUR_CONNECTION_NAME: joi_1.default.string().required(),
                    STRIPE_SECRET_KEY: joi_1.default.string().required(),
                    STRIPE_PUBLISHABLE_KEY: joi_1.default.string().required(),
                }),
            }),
        ],
        providers: [environment_service_1.EnvironmentVariables],
        exports: [environment_service_1.EnvironmentVariables],
    })
], EnvironmentModule);
//# sourceMappingURL=environment.module.js.map