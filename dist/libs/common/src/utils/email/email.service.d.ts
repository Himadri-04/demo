import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../../environment/environment.service';
import { AddUser, IResetPassword, SendInvitation, ShareOffer } from '../../interfaces/email.interface';
export declare class EmailService {
    private readonly env;
    private readonly mailService;
    private readonly configService;
    private websiteUrl?;
    constructor(env: EnvironmentVariables, mailService: MailerService, configService: ConfigService);
    sendInviteMail(to: string, templateData: SendInvitation): Promise<void>;
    sendOfferMail(to: string, templateData: ShareOffer): Promise<void>;
    sendResetPasswordMail(to: string, templateData: IResetPassword): Promise<void>;
    sendMailToUser(to: string, templateData: AddUser): Promise<void>;
}
