import type { Database } from "@jigu/shared/schema";
import { Inject, Injectable } from "@nestjs/common";
import { Tokens } from "@/lib/constants";

@Injectable()
export class UsersService {
  constructor(
    @Inject(Tokens.DATABASE)
    private readonly db: Database,
  ) {}

  getUsers() {
    return this.db.query.users.findMany();
  }

  createUser() {}
}
