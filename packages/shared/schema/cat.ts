import { integer, pgTable } from "drizzle-orm/pg-core";

export const cats = pgTable("cats", {
  id: integer().primaryKey(),
});
