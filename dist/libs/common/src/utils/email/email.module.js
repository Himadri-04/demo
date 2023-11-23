"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const email_controller_1 = require("./email.controller");
const environment_service_1 = require("../../environment/environment.service");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: (configService) => ({
                    transport: {
                        host: configService.get('MAIL_HOST'),
                        port: configService.get('MAIL_PORT'),
                        secure: configService.get('MAIL_SECURE'),
                        auth: {
                            user: configService.get('MAIL_USERNAME'),
                            pass: configService.get('MAIL_PASSWORD'),
                        },
                    },
                    template: {
                        dir: path_1.default.resolve('dist/mails'),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [email_controller_1.EmailController],
        providers: [email_service_1.EmailService, environment_service_1.EnvironmentVariables],
        exports: [environment_service_1.EnvironmentVariables, email_service_1.EmailService],
    })
], EmailModule);
//# sourceMappingURL=email.module.js.map