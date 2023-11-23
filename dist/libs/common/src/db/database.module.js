"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const migration_service_1 = require("./migration.service");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                useFactory: (configService) => ({
                    dialect: configService.get('DB_DIALECT') || 'mssql',
                    autoLoadModels: configService.get('DB_AUTO_LOAD_MODELS') || false,
                    synchronize: configService.get('DB_SYNC') || true,
                    models: [`${__dirname}/schemas/*.model.{ts,js}`],
                    modelMatch: (filename, member) => {
                        return (filename.substring(0, filename.indexOf('.model')) ===
                            member.toLowerCase());
                    },
                    logging: false,
                    replication: {
                        read: [
                            {
                                host: configService.get('DB_HOST'),
                                port: configService.get('DB_PORT') || 3306,
                                username: configService.get('DB_USER') || '',
                                password: configService.get('DB_PASSWORD') || '',
                                database: configService.get('DB_NAME') || '',
                            },
                        ],
                        write: {
                            host: configService.get('DB_HOST'),
                            port: configService.get('DB_PORT') || 3306,
                            username: configService.get('DB_USER') || '',
                            password: configService.get('DB_PASSWORD') || '',
                            database: configService.get('DB_NAME') || '',
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [sequelize_1.SequelizeModule],
        providers: [migration_service_1.MigrationService],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map