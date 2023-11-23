import { ConfigService } from '@nestjs/config';
import { ENV } from './environment.interface';
export declare class EnvironmentVariables {
    private config;
    private nodeENV;
    get isProd(): boolean;
    get isDev(): boolean;
    get isTest(): boolean;
    get isStage(): boolean;
    port: number;
    cookieName: string;
    sessionExpiry: number;
    sessionSecret: string;
    redisURI: string;
    sentryDSN: string;
    scaling: string;
    domain: string;
    smtp: {
        host: any;
        port: any;
        useTLS: any;
        username: any;
        password: any;
        fromEmail: any;
    };
    google: {
        clientId: any;
        clientSecret: any;
    };
    linkedIn: {
        clientId: any;
        clientSecret: any;
    };
    apple: {
        clientId: any;
        teamId: any;
        keyId: any;
    };
    email: {
        host: any;
        port: any;
        user: any;
        pass: any;
        from: any;
        secure: any;
    };
    azur: {
        connection_string: any;
        connection_name: any;
    };
    stripe: {
        api_key: any;
        publish_key: any;
    };
    constructor(config: ConfigService<ENV>);
}
