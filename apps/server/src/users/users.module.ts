import { Module } from "@nestjs/common";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersController } from "@/users/users.controller";
import { UsersService } from "@/users/users.service";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
