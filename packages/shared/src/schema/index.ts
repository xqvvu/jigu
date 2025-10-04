import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as auth from "./auth";

export const schema = {
  ...auth,
};
export type Database = PostgresJsDatabase<typeof schema>;
