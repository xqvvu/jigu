import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey(),
  email: text("email").unique(),
  password: text("password"),
});
