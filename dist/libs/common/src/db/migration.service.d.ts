import { OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
export declare class MigrationService implements OnModuleInit {
    private readonly sequelize;
    private logger;
    get migrationsPath(): string;
    get seedersPath(): string;
    constructor(sequelize: Sequelize);
    onModuleInit(): Promise<void>;
}
