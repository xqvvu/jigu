import { type Database, schema } from "@jigu/shared/schema";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { createBetterAuth } from "@/lib/auth.factory";
import { Tokens } from "@/lib/constants";

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: Tokens.DATABASE,
      useFactory: (configService: ConfigService) => {
        return drizzle({
          schema,
          casing: "snake_case",
          connection: {
            url: configService.getOrThrow("DATABASE_URL"),
          },
        });
      },
      inject: [ConfigService],
    },
    {
      provide: Tokens.BETTER_AUTH,
      useFactory: (database: Database, configService: ConfigService) => {
        return createBetterAuth({
          database,
          baseURL: configService.getOrThrow("BETTER_AUTH_URL"),
          origins: configService
            .getOrThrow<string>("CORS_ALLOWED_ORIGINS")
            .split(",")
            .filter(Boolean)
            .map((origin) => origin.trim()),
        });
      },
      inject: [Tokens.DATABASE, ConfigService],
    },
  ],
  exports: [Tokens.DATABASE, Tokens.BETTER_AUTH],
})
export class DatabaseModule {}
