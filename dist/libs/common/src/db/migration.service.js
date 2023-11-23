"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MigrationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const umzug_1 = require("umzug");
let MigrationService = MigrationService_1 = class MigrationService {
    get migrationsPath() {
        return `./migrations/*.js`;
    }
    get seedersPath() {
        return `./seeders/*.js`;
    }
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.logger = new common_1.Logger(MigrationService_1.name);
    }
    async onModuleInit() {
        const migrations = new umzug_1.Umzug({
            migrations: {
                glob: [this.migrationsPath, { cwd: __dirname, ignore: '*.gitkeep' }],
            },
            context: this.sequelize.getQueryInterface(),
            storage: new umzug_1.SequelizeStorage({ sequelize: this.sequelize }),
            logger: undefined,
        });
        const seeders = new umzug_1.Umzug({
            migrations: {
                glob: [this.seedersPath, { cwd: __dirname, ignore: '*.gitkeep' }],
            },
            context: this.sequelize.getQueryInterface(),
            storage: new umzug_1.SequelizeStorage({ sequelize: this.sequelize }),
            logger: undefined,
        });
        this.logger.verbose('Running Migration');
        try {
            const result = await migrations.up();
            this.logger.verbose('migrations run successfully');
            this.logger.verbose(result.map(m => m.name));
        }
        catch (error) {
            this.logger.error(error);
        }
        this.logger.verbose('Running Seeders');
        try {
            const seedersResult = await seeders.up();
            this.logger.verbose('seeders run successfully');
            this.logger.verbose(seedersResult.map(s => s.name));
        }
        catch (error) {
            this.logger.error(error);
        }
    }
};
exports.MigrationService = MigrationService;
exports.MigrationService = MigrationService = MigrationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize])
], MigrationService);
//# sourceMappingURL=migration.service.js.map