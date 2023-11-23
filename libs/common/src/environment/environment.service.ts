import { ConfigService } from '@nestjs/config';
import { ENV, EnvironmentType } from './environment.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentVariables {
  // Node Config
  private nodeENV: string = this.config.get('NODE_ENV') || 'development';

  public get isProd(): boolean {
    return this.nodeENV === EnvironmentType.Production;
  }

  public get isDev(): boolean {
    return this.nodeENV === EnvironmentType.Development;
  }

  public get isTest(): boolean {
    return this.nodeENV === EnvironmentType.Test;
  }

  public get isStage(): boolean {
    return this.nodeENV === EnvironmentType.Staging;
  }

  port: number = this.config.get('PORT') || 3000;

  // Session & Cookies
  cookieName: string = this.config.get('COOKIE_NAME') || 'session';
  sessionExpiry: number = this.config.get('SESSION_EXPIRY') || 168;
  sessionSecret: string = this.config.get('SESSION_SECRET') || 'r2Y26Am|';

  // Redis
  redisURI: string = this.config.getOrThrow('REDIS_URI');

  // Sentry
  sentryDSN: string = this.config.getOrThrow('SENTRY_DSN');

  // scaling
  scaling: string = this.config.getOrThrow('SCALING');

  // App
  domain: string = this.config.getOrThrow('DOMAIN');

  // SMTP
  smtp = {
    host: this.config.get('SMTP_HOST'),
    port: this.config.get('SMTP_PORT'),
    useTLS: this.config.get('SMTP_TLS'),
    username: this.config.get('SMTP_USERNAME'),
    password: this.config.get('SMTP_PASSWORD'),
    fromEmail: this.config.get('SMTP_FROM_EMAIL'),
  };

  //Google OAuth
  google = {
    clientId: this.config.get('GOOGLE_CLIENT_ID'),
    clientSecret: this.config.get('GOOGLE_CLIENT_SECRET'),
  };

  //Linked In OAuth
  linkedIn = {
    clientId: this.config.get('LINKEDIN_CLIENT_ID'),
    clientSecret: this.config.get('LINKEDIN_CLIENT_SECRET'),
  };

  //Apple In OAuth
  apple = {
    clientId: this.config.get('APPLE_CLIENT_ID'),
    teamId: this.config.get('APPLE_TEAM_ID'),
    keyId: this.config.get('APPLE_KEY_ID'),
  };

  //Email Credential
  email = {
    host: this.config.get('MAIL_HOST'),
    port: this.config.get('MAIL_PORT'),
    user: this.config.get('MAIL_USERNAME'),
    pass: this.config.get('MAIL_PASSWORD'),
    from: this.config.get('MAIL_FROM'),
    secure: this.config.get('MAIL_SECURE'),
  };

  //Azur Storage
  azur = {
    connection_string: this.config.get('AZUR_CONNECTION_STRING'),
    connection_name: this.config.get('AZUR_CONNECTION_NAME'),
  };

  //Stripe Storage
  stripe = {
    api_key: this.config.get('STRIPE_SECRET_KEY'),
    publish_key: this.config.get('STRIPE_PUBLISHABLE_KEY'),
  };

  constructor(private config: ConfigService<ENV>) {}
}
