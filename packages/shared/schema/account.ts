import { createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { accounts } from "./auth";

export const accountSelectSchema = createSelectSchema(accounts);
export type Account = z.infer<typeof accountSelectSchema>;
