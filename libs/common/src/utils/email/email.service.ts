// import { EnvironmentVariables } from '@libs/common/src/environment/environment.service';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
// import {
//   AddUser,
//   IResetPassword,
//   SendInvitation,
//   ShareOffer,
// } from '@libs/common/src/interfaces/email.interface';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../../environment/environment.service';
import { AddUser, IResetPassword, SendInvitation, ShareOffer } from '../../interfaces/email.interface';

@Injectable()
export class EmailService {
  private websiteUrl?: string;
  constructor(
    private readonly env: EnvironmentVariables,
    private readonly mailService: MailerService,
    private readonly configService: ConfigService,
  ) {
    this.websiteUrl = this.configService.get<string>('WEBSITE_URL');
  }

  async sendInviteMail(
    to: string,
    templateData: SendInvitation,
  ): Promise<void> {
    try {
      const subject: string = 'Sent Invite Email';
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
    } catch (error) {
      throw new Error(`Error sending invite email: ${error.message}`);
    }
  }

  async sendOfferMail(to: string, templateData: ShareOffer): Promise<void> {
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
    } catch (error) {
      throw new Error(`Error sending offer email: ${error.message}`);
    }
  }

  async sendResetPasswordMail(
    to: string,
    templateData: IResetPassword,
  ): Promise<void> {
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
    } catch (error) {
      throw new Error(`Error reset password email: ${error.message}`);
    }
  }

  async sendMailToUser(to: string, templateData: AddUser): Promise<void> {
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
    } catch (error) {
      throw new Error(`Error sending offer email: ${error.message}`);
    }
  }
}
