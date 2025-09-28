import { drizzle } from "drizzle-orm/postgres-js";
import { schema } from "@/drizzle/schema";

export const db = drizzle({
  casing: "snake_case",
  connection: {
    url: process.env.DATABASE_URL,
  },
  schema: {
    ...schema,
  },
});
