import { uuidv4 } from "@jigu/shared/lib/uuid";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth`,
  fetchOptions: {
    credentials: "include",
    timeout: 6e4,
    headers: {
      "X-Request-Id": uuidv4(),
    },
  },
});
