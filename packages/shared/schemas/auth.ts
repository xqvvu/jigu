import { z } from "zod";

export const SignInInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type SignInInput = z.infer<typeof SignInInputSchema>;

export const SignInResultSchema = z.object({
  token: z.string(),
});

export type SignInResult = z.infer<typeof SignInResultSchema>;
