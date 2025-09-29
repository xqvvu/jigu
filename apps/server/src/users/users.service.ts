import { type Db } from "@jigu/shared/lib/db";
import { Inject, Injectable } from "@nestjs/common";
import { TOKENS } from "@/common/constants";

@Injectable()
export class UsersService {
  constructor(
    @Inject(TOKENS.DRIZZLE)
    private readonly db: Db,
  ) {}

  getUsers() {
    return this.db.query.users.findMany();
  }

  createUser() {}
}
