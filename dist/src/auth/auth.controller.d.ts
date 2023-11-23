import { AuthService } from './auth.service';
import { ChangePasswordDto, ResetPasswordDto } from './dto/create-auth.dto';
import { Response, Request } from 'express';
import { EnvironmentVariables } from 'libs/common/src/environment/environment.service';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    private readonly env;
    constructor(authService: AuthService, env: EnvironmentVariables);
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    loginWithGoogle(): void;
    googleAuthCallback(req: Request, res: Response): Promise<void>;
    loginWithLinkedin(): void;
    linkedinAuthCallback(req: Request, res: Response): Promise<void>;
    loginWithFacebook(): void;
    facebookAuthCallback(req: Request, res: Response): Promise<void>;
    forgotPassword(res: Response, email: string): void;
    resetPassword(body: ResetPasswordDto, res: Response): void;
    changePassword(req: Request, res: Response, changePasswordDto: ChangePasswordDto): Promise<Response<any, Record<string, any>>>;
}
