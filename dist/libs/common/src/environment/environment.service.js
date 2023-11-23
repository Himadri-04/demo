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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentVariables = void 0;
const config_1 = require("@nestjs/config");
const environment_interface_1 = require("./environment.interface");
const common_1 = require("@nestjs/common");
let EnvironmentVariables = class EnvironmentVariables {
    get isProd() {
        return this.nodeENV === environment_interface_1.EnvironmentType.Production;
    }
    get isDev() {
        return this.nodeENV === environment_interface_1.EnvironmentType.Development;
    }
    get isTest() {
        return this.nodeENV === environment_interface_1.EnvironmentType.Test;
    }
    get isStage() {
        return this.nodeENV === environment_interface_1.EnvironmentType.Staging;
    }
    constructor(config) {
        this.config = config;
        this.nodeENV = this.config.get('NODE_ENV') || 'development';
        this.port = this.config.get('PORT') || 3000;
        this.cookieName = this.config.get('COOKIE_NAME') || 'session';
        this.sessionExpiry = this.config.get('SESSION_EXPIRY') || 168;
        this.sessionSecret = this.config.get('SESSION_SECRET') || 'r2Y26Am|';
        this.redisURI = this.config.getOrThrow('REDIS_URI');
        this.sentryDSN = this.config.getOrThrow('SENTRY_DSN');
        this.scaling = this.config.getOrThrow('SCALING');
        this.domain = this.config.getOrThrow('DOMAIN');
        this.smtp = {
            host: this.config.get('SMTP_HOST'),
            port: this.config.get('SMTP_PORT'),
            useTLS: this.config.get('SMTP_TLS'),
            username: this.config.get('SMTP_USERNAME'),
            password: this.config.get('SMTP_PASSWORD'),
            fromEmail: this.config.get('SMTP_FROM_EMAIL'),
        };
        this.google = {
            clientId: this.config.get('GOOGLE_CLIENT_ID'),
            clientSecret: this.config.get('GOOGLE_CLIENT_SECRET'),
        };
        this.linkedIn = {
            clientId: this.config.get('LINKEDIN_CLIENT_ID'),
            clientSecret: this.config.get('LINKEDIN_CLIENT_SECRET'),
        };
        this.apple = {
            clientId: this.config.get('APPLE_CLIENT_ID'),
            teamId: this.config.get('APPLE_TEAM_ID'),
            keyId: this.config.get('APPLE_KEY_ID'),
        };
        this.email = {
            host: this.config.get('MAIL_HOST'),
            port: this.config.get('MAIL_PORT'),
            user: this.config.get('MAIL_USERNAME'),
            pass: this.config.get('MAIL_PASSWORD'),
            from: this.config.get('MAIL_FROM'),
            secure: this.config.get('MAIL_SECURE'),
        };
        this.azur = {
            connection_string: this.config.get('AZUR_CONNECTION_STRING'),
            connection_name: this.config.get('AZUR_CONNECTION_NAME'),
        };
        this.stripe = {
            api_key: this.config.get('STRIPE_SECRET_KEY'),
            publish_key: this.config.get('STRIPE_PUBLISHABLE_KEY'),
        };
    }
};
exports.EnvironmentVariables = EnvironmentVariables;
exports.EnvironmentVariables = EnvironmentVariables = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EnvironmentVariables);
//# sourceMappingURL=environment.service.js.map