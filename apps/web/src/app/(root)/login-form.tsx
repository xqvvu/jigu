"use client";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth";

export default function LoginForm() {
  const handleSignIn = () => {
    authClient.signIn.email({
      email: "whoeverimf5@gmail.com",
      password: "230874aa",
    });
  };

  return (
    <div>
      <Button onPress={handleSignIn}>Sign in</Button>
    </div>
  );
}
