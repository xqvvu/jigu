import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "#drizzle/schema";

export const db = drizzle({
  schema,
  casing: "snake_case",
  connection: {
    url: process.env.DATABASE_URL,
  },
});

export type Db = PostgresJsDatabase<typeof schema>;
