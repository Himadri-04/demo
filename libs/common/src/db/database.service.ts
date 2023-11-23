import { Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class MigrationService {
  private logger: Logger = new Logger(MigrationService.name);

  constructor(private readonly sequelize: Sequelize) {}
}
