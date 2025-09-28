import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import { schema } from "@/drizzle/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    camelCase: false,
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: "叽咕提词",
});
