import { createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { users } from "./auth";

export const userSelectSchema = createSelectSchema(users);
export type User = z.infer<typeof userSelectSchema>;
