import { Sequelize } from 'sequelize-typescript';
export declare class MigrationService {
    private readonly sequelize;
    private logger;
    constructor(sequelize: Sequelize);
}
