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
let MigrationService = MigrationService_1 = class MigrationService {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.logger = new common_1.Logger(MigrationService_1.name);
    }
};
exports.MigrationService = MigrationService;
exports.MigrationService = MigrationService = MigrationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize])
], MigrationService);
//# sourceMappingURL=database.service.js.map