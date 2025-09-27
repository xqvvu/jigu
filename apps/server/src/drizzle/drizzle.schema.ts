import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as userSchema from "@/users/users.schema";

export const shcemas = {
  ...userSchema,
};
export type DrizzleSchema = typeof shcemas;
export type Db = PostgresJsDatabase<DrizzleSchema>;
