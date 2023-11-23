import BaseModel from './baseModal.modal';
import { IUser } from '../../interfaces/users.interface';
export declare class Users extends BaseModel<IUser> implements IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    reset_password_token: string;
    isVerified: boolean;
    authenticate(password: string): boolean;
}
