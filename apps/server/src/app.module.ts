import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { DatabaseModule } from "@/database/database.module";
import { AllExceptionFilter } from "@/filters/all-exception.filter";
import { AuthHook } from "@/hooks/auth.hook";
import { NormalizedResultInterceptor } from "@/interceptors/normalized-result.interceptor";
import { createBetterAuth } from "@/lib/auth.factory";
import { Tokens } from "@/lib/constants";
import { UsersModule } from "@/modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        // keep the order, or would disorder the priority of the .env files
        `.env.${process.env.NODE_ENV || "development"}`,
        ".env",
      ],
    }),
    AuthModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (auth: ReturnType<typeof createBetterAuth>) => ({ auth }),
      inject: [Tokens.BETTER_AUTH],
    }),
    UsersModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: NormalizedResultInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    AuthHook,
  ],
})
export class AppModule {}
