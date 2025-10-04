"use client";

import { useUsers } from "@/hooks/users/use-users";

export default function SignIn() {
  useUsers();

  return <div>Sign in</div>;
}
