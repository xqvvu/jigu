import { Inject, Injectable } from "@nestjs/common";
import { TOKENS } from "@/common/constants";
import { type Db } from "@/drizzle/drizzle.schema";

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
