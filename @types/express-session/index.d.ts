import 'express-session';

declare module 'express-session' {
  interface SessionData {
    companyId: number;
  }
}

export {};
