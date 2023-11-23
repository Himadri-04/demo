// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { EnvironmentVariables } from './environment.service';
// import { ENV, EnvironmentType } from './environment.interface';
// import * as Joi from 'joi';
// // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars

// /**
//  * convert the getEnumValues
//  * @param e {EnvironmentType}
//  * @returns string[]
//  */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function getEnumValues<T extends string, _number>(
//   e: typeof EnvironmentType,
// ): string[] {
//   return typeof e === 'object' ? Object.values(e) : [];
// }
// @Module({
//   // ...
//   imports: [
//     ConfigModule.forRoot({
//       validationSchema: Joi.object<ENV>({
//         NODE_ENV: Joi.string()
//           .valid(...getEnumValues(EnvironmentType))
//           .default(EnvironmentType.Development),
//         PORT: Joi.number().port().default(3000),
//         SESSION_SECRET: Joi.string().min(8).required(),
//         SESSION_EXPIRY: Joi.number().min(1).default(1),
//         COOKIE_NAME: Joi.string().default('session'),
//         PER_PAGE_LIMIT: Joi.number().min(10).positive().default(20),
//         REDIS_URI: Joi.string().uri().required(),
//         SCALING: Joi.string().required(),
//         SENTRY_DSN: Joi.string().required(),
//         GOOGLE_CLIENT_ID: Joi.string().required(),
//         GOOGLE_CLIENT_SECRET: Joi.string().required(),
//         LINKEDIN_CLIENT_ID: Joi.string().required(),
//         LINKEDIN_CLIENT_SECRET: Joi.string().required(),
//         APPLE_CLIENT_ID: Joi.string().required(),
//         APPLE_TEAM_ID: Joi.string().required(),
//         MAIL_HOST: Joi.string().required(),
//         MAIL_PORT: Joi.number().required(),
//         MAIL_SECURE: Joi.boolean().required(),
//         MAIL_USERNAME: Joi.string().required(),
//         MAIL_PASSWORD: Joi.string().required(),
//         MAIL_FROM: Joi.string().required(),
//         AZUR_CONNECTION_STRING: Joi.string().required(),
//         AZUR_CONNECTION_NAME: Joi.string().required(),
//         STRIPE_SECRET_KEY: Joi.string().required(),
//         STRIPE_PUBLISHABLE_KEY: Joi.string().required(),
//         // DOMAIN: Joi.string().required(),
//         // SMTP_HOST: Joi.string().required(),
//         // SMTP_PORT: Joi.number().port().required(),
//         // SMTP_TLS: Joi.boolean().required(),
//         // SMTP_USERNAME: Joi.string().required(),
//         // SMTP_PASSWORD: Joi.string().required(),
//         // SMTP_FROM_EMAIL: Joi.string().required(),
//       }),
//     }),
//   ],
//   providers: [EnvironmentVariables],
//   exports: [EnvironmentVariables],
// })
// export class EnvironmentModule {}
// *******************************************************

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentVariables } from './environment.service';
import { ENV, EnvironmentType } from './environment.interface';
import Joi from 'joi';
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars

/**
 * convert the getEnumValues
 * @param e {EnvironmentType}
 * @returns string[]
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEnumValues<T extends string, _number>(
  e: typeof EnvironmentType,
): string[] {
  return typeof e === 'object' ? Object.values(e) : [];
}
@Module({
  // ...
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object<ENV>({
        NODE_ENV: Joi.string()
          .valid(...getEnumValues(EnvironmentType))
          .default(EnvironmentType.Development),
        PORT: Joi.number().port().default(3000),
        SESSION_SECRET: Joi.string().min(8).required(),
        SESSION_EXPIRY: Joi.number().min(1).default(1),
        COOKIE_NAME: Joi.string().default('session'),
        PER_PAGE_LIMIT: Joi.number().min(10).positive().default(20),
        REDIS_URI: Joi.string().uri().required(),
        SCALING: Joi.string().required(),
        SENTRY_DSN: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        LINKEDIN_CLIENT_ID: Joi.string().required(),
        LINKEDIN_CLIENT_SECRET: Joi.string().required(),
        APPLE_CLIENT_ID: Joi.string().required(),
        APPLE_TEAM_ID: Joi.string().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_PORT: Joi.number().required(),
        MAIL_SECURE: Joi.boolean().required(),
        MAIL_USERNAME: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_FROM: Joi.string().required(),
        AZUR_CONNECTION_STRING: Joi.string().required(),
        AZUR_CONNECTION_NAME: Joi.string().required(),
        STRIPE_SECRET_KEY: Joi.string().required(),
        STRIPE_PUBLISHABLE_KEY: Joi.string().required(),
        // DOMAIN: Joi.string().required(),
        // SMTP_HOST: Joi.string().required(),
        // SMTP_PORT: Joi.number().port().required(),
        // SMTP_TLS: Joi.boolean().required(),
        // SMTP_USERNAME: Joi.string().required(),
        // SMTP_PASSWORD: Joi.string().required(),
        // SMTP_FROM_EMAIL: Joi.string().required(),
      }),
    }),
  ],
  providers: [EnvironmentVariables],
  exports: [EnvironmentVariables],
})
export class EnvironmentModule {}
