import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDb } from "@/db/mongo";
import { trustedOrigins } from "@/libs/trusted-origins";

export const auth = betterAuth({
  trustedOrigins,
  database: mongodbAdapter(getDb()),
  emailAndPassword: {
    enabled: true,
  },
});
