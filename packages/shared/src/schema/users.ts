import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./auth";

export const SelectUserSchema = createSelectSchema(users);
export type IUser = z.infer<typeof SelectUserSchema>;

export const CreateUserSchema = z.object({
  ...SelectUserSchema.pick({ email: true }).shape,
  password: z.string().regex(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
