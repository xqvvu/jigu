import { Controller, Get } from "@nestjs/common";
import { R } from "@/common/response";
import { UsersService } from "@/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
    // const users = [{ id: 1, name: "Jason" }];
    // return R.ok(users);
  }
}
