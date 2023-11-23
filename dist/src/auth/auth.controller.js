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
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const swagger_1 = require("@nestjs/swagger");
const google_auth_guard_1 = require("./guards/google-auth.guard");
const passport_1 = require("@nestjs/passport");
const environment_service_1 = require("../../libs/common/src/environment/environment.service");
const linkedin_auth_guard_1 = require("./guards/linkedin-auth.guard");
const facebook_auth_guard_1 = require("./guards/facebook-auth.guard");
const common_service_1 = require("./common.service");
const bcrypt = require("bcryptjs");
const auth_guard_1 = require("./guards/auth.guard");
const users_model_1 = require("../../libs/common/src/db/schemas/users.model");
let AuthController = AuthController_1 = class AuthController {
    constructor(authService, env) {
        this.logger = new common_1.Logger(AuthController_1.name);
        this.authService = authService;
        this.env = env;
    }
    async login(req, res) {
        return res
            .status(200)
            .send((0, common_service_1.successResponse)({ item: { ...req.user } }, 'You have successfully logged in!'));
    }
    loginWithGoogle() {
        this.logger.log('google');
    }
    async googleAuthCallback(req, res) {
        this.logger.log(req.user);
        return res
            .status(common_1.HttpStatus.OK)
            .redirect(`${this.env.domain}/provider-callback`);
    }
    loginWithLinkedin() {
        this.logger.log('linkedin');
    }
    async linkedinAuthCallback(req, res) {
        this.logger.log(req.user);
        return res
            .status(common_1.HttpStatus.OK)
            .redirect(`${this.env.domain}/provider-callback`);
    }
    loginWithFacebook() {
        this.logger.log('facebook');
    }
    async facebookAuthCallback(req, res) {
        this.logger.log(req.user);
        return res
            .status(common_1.HttpStatus.OK)
            .redirect(`${this.env.domain}/provider-callback`);
    }
    forgotPassword(res, email) {
        this.authService
            .forgotPassword(email)
            .then(() => {
            return res.status(common_1.HttpStatus.OK).send({
                status: true,
                message: 'Reset Password Email send successfully.',
            });
        })
            .catch((error) => {
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .send((0, common_service_1.errorResponse)(error?.errors?.[0] ?? error, 422, error?.errors ?? error));
        });
    }
    resetPassword(body, res) {
        this.authService
            .resetPassword(body)
            .then(() => {
            return res.status(common_1.HttpStatus.OK).send({
                status: true,
                message: 'Reset Password Email send successfully.',
            });
        })
            .catch((error) => {
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .send((0, common_service_1.errorResponse)(error?.errors?.[0] ?? error, 422, error?.errors ?? error));
        });
    }
    async changePassword(req, res, changePasswordDto) {
        try {
            if (changePasswordDto.newPassword != changePasswordDto.confirmPassword) {
                return res
                    .status(common_1.HttpStatus.BAD_REQUEST)
                    .send({ message: 'New and Confirm password should be the same.' });
            }
            if (changePasswordDto.newPassword == changePasswordDto.oldPassword) {
                return res.status(common_1.HttpStatus.BAD_REQUEST).send({
                    message: 'Your current password cannot be the same as the new password.',
                });
            }
            const user = req.user;
            const dbUser = await this.authService.findByWhere(user.id);
            const isOldPasswordValid = bcrypt.compareSync(changePasswordDto.oldPassword, dbUser.password);
            if (!isOldPasswordValid) {
                return res
                    .status(common_1.HttpStatus.BAD_REQUEST)
                    .send({ message: 'The old password does not match our records.' });
            }
            if (changePasswordDto.newPassword) {
                dbUser.password = await bcrypt.hash(changePasswordDto.newPassword, 12);
            }
            await dbUser.save();
            return res.send({
                message: 'Your password has been updated successfully.',
            });
        }
        catch (error) {
            return res.send((0, common_service_1.errorRes)(error));
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UseGuards)(auth_guard_1.LocalAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'User login' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string', default: 'ai@xerataus.one' },
                password: { type: 'string', default: 'Admin@123' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Role updated successfully',
        type: [users_model_1.Users],
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Google Login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Redirects to Google Login' }),
    (0, common_1.UseGuards)(google_auth_guard_1.GoogleOAuthGuard),
    (0, common_1.Get)('/google-login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginWithGoogle", null);
__decorate([
    (0, common_1.Get)('/google-callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Linkedin Login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Redirects to Linkedin Login' }),
    (0, common_1.UseGuards)(linkedin_auth_guard_1.LinkedinAuthGuard),
    (0, common_1.Get)('/linkedin-login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginWithLinkedin", null);
__decorate([
    (0, common_1.Get)('/linkedin-callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('linkedin')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "linkedinAuthCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Facebook Login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Redirects to Facebook Login' }),
    (0, common_1.UseGuards)(facebook_auth_guard_1.FacebookAuthGuard),
    (0, common_1.Get)('/facebook-login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginWithFacebook", null);
__decorate([
    (0, common_1.Get)('/facebook-callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookAuthCallback", null);
__decorate([
    (0, common_1.Post)('/forgotPassword'),
    (0, swagger_1.ApiOperation)({ summary: 'Forgot Password' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string', default: 'uiuxtecxar456@gmail.com' },
            },
        },
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('/resetPassword'),
    (0, swagger_1.ApiOperation)({ summary: 'Reset Password' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                password: { type: 'string', default: '' },
                reset_password_token: { type: 'string', default: '' },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ResetPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/changePassword'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_auth_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = AuthController_1 = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, environment_service_1.EnvironmentVariables])
], AuthController);
//# sourceMappingURL=auth.controller.js.map