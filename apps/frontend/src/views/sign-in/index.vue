<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { z } from "zod";
import { authClient } from "@/libs/auth-client";

const toast = useToast();

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  consola.info(event.data);

  await authClient.signUp.email(
    {
      name: event.data.email,
      email: event.data.email, // user email address
      password: event.data.password, // user password -> min 8 characters by default
    },
  );
}
</script>

<template>
  <div>
    <UForm
      class="space-y-4"
      :schema="schema"
      :state="state"
      @submit="onSubmit"
    >
      <UFormField
        label="Email"
        name="email"
      >
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField
        label="Password"
        name="password"
      >
        <UInput
          v-model="state.password"
          type="password"
        />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>
