"use client";

import { Button, Form, Input } from "@heroui/react";
import type { FormEvent } from "react";
import { authClient } from "@/lib/auth";

export default function SignUpForm() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authClient.signIn.email({
      email: "whoeverimf5@gmail.com",
      password: "230874aa",
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      {/* <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />

      <Input
        isRequired
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />

      <Input
        isRequired
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
        type="text"
      /> */}

      <Button
        type="submit"
        variant="bordered"
      >
        Submit
      </Button>
    </Form>
  );
}
