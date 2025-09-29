import { auth } from "@jigu/shared/lib/auth";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersModule } from "@/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DrizzleModule,
    UsersModule,
    AuthModule.forRoot(auth),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
