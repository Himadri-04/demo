import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EnvironmentVariables } from '../../environment/environment.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import path from 'path';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('MAIL_HOST'),
          port: configService.get<number>('MAIL_PORT'),
          secure: configService.get<boolean>('MAIL_SECURE'),
          auth: {
            user: configService.get<string>('MAIL_USERNAME'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          },
        },
        template: {
          dir: path.resolve('dist/mails'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EnvironmentVariables],
  exports: [EnvironmentVariables, EmailService],
})
export class EmailModule {}
