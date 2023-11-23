import { ResetPasswordDto } from './dto/create-auth.dto';
import { Users } from 'libs/common/src/db/schemas/users.model';
import { EnvironmentVariables } from 'libs/common/src/environment/environment.service';
import { EmailService } from 'libs/common/src/utils/email/email.service';
export declare class AuthService {
    private readonly users;
    private readonly env;
    private readonly emailService;
    private logger;
    constructor(users: typeof Users, env: EnvironmentVariables, emailService: EmailService);
    forgotPassword(email: string): Promise<Users>;
    generateToken(user_id: number, email: string): Promise<string>;
    resetPassword(data: ResetPasswordDto): Promise<boolean>;
    isTokenNotExpired(expirationDate: Date | undefined): boolean;
    findByWhere(id: number): any;
}
