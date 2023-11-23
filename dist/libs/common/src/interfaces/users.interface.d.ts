import { IDatabaseObject } from "./baseModel.interface";
export declare enum IdentityProvider {
    GOOGLE = "Google",
    LINKEDIN = "Linkedin",
    APPLE = "Apple"
}
export interface IUser extends IDatabaseObject {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    isVerified: boolean;
    reset_password_token?: string | null;
}
