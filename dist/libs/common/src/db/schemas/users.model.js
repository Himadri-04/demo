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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bcrypt = require("bcryptjs");
const baseModal_modal_1 = require("./baseModal.modal");
let Users = class Users extends baseModal_modal_1.default {
    authenticate(password) {
        return bcrypt.compareSync(password, this.password);
    }
};
exports.Users = Users;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, autoIncrement: true }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Users.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], Users.prototype, "reset_password_token", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], Users.prototype, "isVerified", void 0);
exports.Users = Users = __decorate([
    (0, sequelize_typescript_1.Table)({
        underscored: true,
        version: false,
        tableName: 'users',
        defaultScope: {
            attributes: {
                exclude: ['password'],
            },
        },
        scopes: {
            withPassword: {
                attributes: {
                    include: ['password'],
                },
            },
        },
    })
], Users);
//# sourceMappingURL=users.model.js.map