import { Module } from "@nestjs/common";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersService } from "@/users/users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
