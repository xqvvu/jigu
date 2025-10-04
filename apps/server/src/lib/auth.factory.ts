import type { Database } from "@jigu/shared/schema";
import { schema } from "@jigu/shared/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

// for only maintain one configuration
export function createBetterAuth(options: {
  database: Database | object;
  origins?: string[];
  baseURL?: string;
}) {
  const { database, origins = [], baseURL } = options;

  return betterAuth({
    baseURL: baseURL,
    appName: "叽咕提词器",
    trustedOrigins: origins,
    hooks: {},
    onAPIError: {
      throw: true,
    },
    database: drizzleAdapter(database, {
      schema,
      provider: "pg",
      usePlural: true,
      camelCase: false,
    }),
    emailAndPassword: {
      enabled: true,
    },
  });
}
