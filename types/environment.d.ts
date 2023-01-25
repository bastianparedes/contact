declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PERSONAL_EMAIL: string;
      SENDER_EMAIL: string;
      SENDER_EMAIL_PASSWORD: string;
    }
  }
}

export {};
