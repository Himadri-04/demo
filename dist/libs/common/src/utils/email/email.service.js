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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const environment_service_1 = require("../../environment/environment.service");
let EmailService = class EmailService {
    constructor(env, mailService, configService) {
        this.env = env;
        this.mailService = mailService;
        this.configService = configService;
        this.websiteUrl = this.configService.get('WEBSITE_URL');
    }
    async sendInviteMail(to, templateData) {
        try {
            const subject = 'Sent Invite Email';
            const link = `${this.websiteUrl}/sign-in`;
            await this.mailService.sendMail({
                to: to,
                from: this.env.email.from,
                subject: subject,
                template: 'invite',
                context: {
                    ...templateData,
                    link: link,
                },
            });
        }
        catch (error) {
            throw new Error(`Error sending invite email: ${error.message}`);
        }
    }
    async sendOfferMail(to, templateData) {
        try {
            const subject = 'We Value Your Opinion:  Review our new Offer';
            const link = `${this.websiteUrl}/offer?token=${templateData.token}`;
            await this.mailService.sendMail({
                to: to,
                from: this.env.email.from,
                subject: subject,
                template: 'shareOffers',
                context: {
                    ...templateData,
                    link: link,
                },
            });
        }
        catch (error) {
            throw new Error(`Error sending offer email: ${error.message}`);
        }
    }
    async sendResetPasswordMail(to, templateData) {
        try {
            const subject = 'Reset Password Email';
            const link = `${this.websiteUrl}/resetPassword?token=${templateData.token}`;
            await this.mailService.sendMail({
                to: to,
                from: this.env.email.from,
                subject: subject,
                template: 'resetPassword',
                context: {
                    ...templateData,
                    link: link,
                },
            });
        }
        catch (error) {
            throw new Error(`Error reset password email: ${error.message}`);
        }
    }
    async sendMailToUser(to, templateData) {
        try {
            const subject = 'Welcome to Our Team';
            await this.mailService.sendMail({
                to: to,
                from: this.env.email.from,
                subject: subject,
                template: 'addMember',
                context: {
                    ...templateData,
                },
            });
        }
        catch (error) {
            throw new Error(`Error sending offer email: ${error.message}`);
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentVariables,
        mailer_1.MailerService,
        config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map