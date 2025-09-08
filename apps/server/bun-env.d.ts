declare module "bun" {
  interface Env {
    readonly SERVER_PORT: string;
    readonly MONGODB_URI: string;
    readonly FASTGPT_APP_SECRET: string;
    readonly FASTGPT_API_BASE_URL: string;
    readonly TRUSTED_ORIGINS: string;
    readonly BETTER_AUTH_SECRET: string;
  }
}
