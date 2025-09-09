import { z } from "zod";
import { BaseDocumentSchema } from "./base";

export const UserSchema = z.object({
  ...BaseDocumentSchema.omit({ _id: true }).shape,

  id: z.string(),
  name: z.string(),
  email: z.email(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;

export const SignInInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type SignInInput = z.infer<typeof SignInInputSchema>;

export const SignInResultSchema = z.object({
  token: z.string(),
  redirect: z.boolean(),
  url: z.string().optional(),
  user: UserSchema,
});

export type SignInResult = z.infer<typeof SignInResultSchema>;
