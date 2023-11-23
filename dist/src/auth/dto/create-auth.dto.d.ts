import { ValidationOptions } from 'class-validator';
export declare class ResetPasswordDto {
    id?: number;
    password: string;
    reset_password_token: string;
}
export declare function IsNotWhitespace(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
export declare class ChangePasswordDto {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}
