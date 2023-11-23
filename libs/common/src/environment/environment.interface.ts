export const EnvironmentType = {
  Development: 'development',
  Production: 'production',
  Test: 'testing',
  Staging: 'staging',
};
export interface ENV {
  NODE_ENV: string;
  PORT: number;
  SESSION_SECRET: string;
  COOKIE_NAME: string;
  SESSION_EXPIRY: number;
  DB_DIALECT: string;

  PER_PAGE_LIMIT: number;

  // REDIS
  REDIS_URI: string;

  // SENTRY
  SENTRY_DSN: string;

  // DOMAIN
  DOMAIN: string;

  SCALING: string;

  // SMTP
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_TLS: boolean;
  SMTP_USERNAME: string;
  SMTP_PASSWORD: string;
  SMTP_FROM_EMAIL: string;

  // Google OAuth
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;

  // Linkedin OAuth
  LINKEDIN_CLIENT_ID: string;
  LINKEDIN_CLIENT_SECRET: string;

  // Apple OAuth
  APPLE_CLIENT_ID: string;
  APPLE_TEAM_ID: string;
  APPLE_KEY_ID: string;

  // Email Services
  MAIL_HOST: string;
  MAIL_PORT: number;
  MAIL_USERNAME: string;
  MAIL_PASSWORD: string;
  MAIL_FROM: string;
  MAIL_SECURE: boolean;

  AZUR_CONNECTION_STRING: string;
  AZUR_CONNECTION_NAME: string;

  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_SECRET_KEY: string;
}
