import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { NormalizedException } from "@/exceptions/normalized.exception";
import { UsersService } from "@/modules/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  getUserById(@Param("id", ParseIntPipe) id: number) {
    throw new NormalizedException({
      errmsg: `id: ${id}, deliberate error`,
      status: HttpStatus.LOOP_DETECTED,
    });
  }
}
