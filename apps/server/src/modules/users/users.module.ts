import { Module } from "@nestjs/common";
import { DatabaseModule } from "@/database/database.module";
import { UsersService } from "@/modules/users/users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
