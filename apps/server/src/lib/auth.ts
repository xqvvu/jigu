import { createBetterAuth } from "@/lib/auth.factory";

export const auth = createBetterAuth({
  database: {}, // a dummy db instance, only for `@better-auth/cli`
});
