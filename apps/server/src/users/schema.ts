import { createSelectSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod";
import * as auth from "#lib/auth.schema";

export const userSelectSchema = createSelectSchema(auth.users);
export type TUserSelect = z.infer<typeof userSelectSchema>;

export const userUpdateSchema = createUpdateSchema(auth.users);
export type TUserUpdate = z.infer<typeof userUpdateSchema>;
