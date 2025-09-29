import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "../../packages/shared/drizzle/schema.ts",
  dialect: "postgresql",
  casing: "snake_case",
  out: "./@drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
