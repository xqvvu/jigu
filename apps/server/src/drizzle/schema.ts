import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as auth from "#lib/auth.schema";

export const schema = {
  ...auth,
};
export type Db = PostgresJsDatabase<typeof schema>;

export * from "#lib/auth.schema";
