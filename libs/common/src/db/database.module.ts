import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { MigrationService } from './migration.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get<Dialect>('DB_DIALECT') || 'mssql',
        autoLoadModels:
          configService.get<boolean>('DB_AUTO_LOAD_MODELS') || false,
        synchronize: configService.get<boolean>('DB_SYNC') || true,
        models: [`${__dirname}/schemas/*.model.{ts,js}`], // TODO: check is this runs okay with JS
        modelMatch: (filename, member) => {
          return (
            filename.substring(0, filename.indexOf('.model')) ===
            member.toLowerCase()
          );
        },
        logging: false,
        replication: {
          read: [
            {
              host: configService.get<string>('DB_HOST'),
              port: configService.get<number>('DB_PORT') || 3306,
              username: configService.get<string>('DB_USER') || '',
              password: configService.get<string>('DB_PASSWORD') || '',
              database: configService.get<string>('DB_NAME') || '',
            },
          ],
          write: {
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT') || 3306,
            username: configService.get<string>('DB_USER') || '',
            password: configService.get<string>('DB_PASSWORD') || '',
            database: configService.get<string>('DB_NAME') || '',
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [SequelizeModule],
  providers: [MigrationService],
})
export class DatabaseModule {}
