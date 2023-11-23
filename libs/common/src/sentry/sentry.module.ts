import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';

@Module({
  imports: [
    SentryModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        dsn: configService.get<string>('SENTRY_DSN'),
        debug: false,
        environment: configService.get('NODE_ENV'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [SentryModule],
})
export class Sentry {}
