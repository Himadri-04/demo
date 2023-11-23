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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../../libs/common/src/db/schemas/users.model");
const environment_service_1 = require("../../libs/common/src/environment/environment.service");
const email_service_1 = require("../../libs/common/src/utils/email/email.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let AuthService = AuthService_1 = class AuthService {
    constructor(users, env, emailService) {
        this.users = users;
        this.env = env;
        this.emailService = emailService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async forgotPassword(email) {
        const user = await this.users.findOne({ where: { email } });
        if (!user) {
            throw Error('Invalid Email Address');
        }
        const token = await this.generateToken(user.id, email);
        user.reset_password_token = token;
        await user.save();
        const templateData = {
            token: token,
        };
        await this.emailService.sendResetPasswordMail(email, templateData);
        return user;
    }
    async generateToken(user_id, email) {
        const payload = {
            user_id: user_id,
            email: email,
        };
        const token = jsonwebtoken_1.default.sign(payload, this.env.sessionSecret, {
            expiresIn: '1d',
        });
        return token;
    }
    async resetPassword(data) {
        const decoded = jsonwebtoken_1.default.verify(data.reset_password_token, this.env.sessionSecret);
        const response = this.isTokenNotExpired(new Date(decoded.exp * 1000));
        if (!response) {
            throw Error('Your token has been expired!');
        }
        const user = await this.users.findByPk(decoded.user_id);
        if (!user) {
            throw Error('Invalid Token');
        }
        const salt = bcrypt.genSaltSync(12);
        user.password = bcrypt.hashSync(data.password, salt);
        user.save();
        return true;
    }
    isTokenNotExpired(expirationDate) {
        return expirationDate ? expirationDate > new Date() : false;
    }
    findByWhere(id) {
        try {
            return this.users.findOne({
                attributes: ['id', 'password'],
                where: {
                    id,
                },
                logging: false,
            });
        }
        catch (error) {
            return error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.Users)),
    __metadata("design:paramtypes", [Object, environment_service_1.EnvironmentVariables,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map