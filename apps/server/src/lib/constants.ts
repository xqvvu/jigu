import { createInjectTokens } from "@/lib/helpers";

export const Tokens = {
  DATABASE: createInjectTokens("databsae"),
  BETTER_AUTH: createInjectTokens("better-auth"),
} as const;
