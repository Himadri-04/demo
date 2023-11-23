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
exports.ChangePasswordDto = exports.IsNotWhitespace = exports.ResetPasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResetPasswordDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    IsNotWhitespace({ message: 'Password cannot consist of only spaces.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "reset_password_token", void 0);
function IsNotWhitespace(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotWhitespace',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    if (typeof value !== 'string') {
                        return true;
                    }
                    return value.trim() !== '';
                },
            },
        });
    };
}
exports.IsNotWhitespace = IsNotWhitespace;
class ChangePasswordDto {
}
exports.ChangePasswordDto = ChangePasswordDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "oldPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "confirmPassword", void 0);
//# sourceMappingURL=create-auth.dto.js.map