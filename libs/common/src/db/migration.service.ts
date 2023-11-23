import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { MigrationMeta, SequelizeStorage, Umzug } from 'umzug';

@Injectable()
export class MigrationService implements OnModuleInit {
  private logger: Logger = new Logger(MigrationService.name);

  // get migrationsPath(): string {
  //   return `${__dirname}/migrations/*.migration.{ts,js}`;
  // }
  // get seedersPath(): string {
  //   return `${__dirname}/seeders/*.seeder.{ts,js}`;
  // }

  get migrationsPath(): string {
    return `./migrations/*.js`;
  }
  get seedersPath(): string {
    return `./seeders/*.js`;
  }

  constructor(private readonly sequelize: Sequelize) {}
  async onModuleInit() {
    const migrations = new Umzug({
      migrations: {
        glob: [this.migrationsPath, { cwd: __dirname, ignore: '*.gitkeep' }],
      },
      context: this.sequelize.getQueryInterface(),

      storage: new SequelizeStorage({ sequelize: this.sequelize }),

      logger: undefined,
    });

    const seeders = new Umzug({
      migrations: {
        glob: [this.seedersPath, { cwd: __dirname, ignore: '*.gitkeep' }],
      },

      context: this.sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize: this.sequelize }),
      logger: undefined,
    });

    this.logger.verbose('Running Migration');

    try {
      const result: MigrationMeta[] = await migrations.up();
      this.logger.verbose('migrations run successfully');
      this.logger.verbose(result.map(m => m.name));
    } catch (error) {
      this.logger.error(error);
    }

    this.logger.verbose('Running Seeders');

    try {
      const seedersResult: MigrationMeta[] = await seeders.up();
      this.logger.verbose('seeders run successfully');
      this.logger.verbose(seedersResult.map(s => s.name));
    } catch (error) {
      this.logger.error(error);
    }
  }
}
