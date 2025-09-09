<script setup lang="ts">
import type { SignInInput } from "@jigu/shared/schemas";
import type { FormSubmitEvent } from "@nuxt/ui";
import { SignInInputSchema } from "@jigu/shared/schemas";
import { authClient } from "@/libs/auth-client";

const { t } = useI18n();

const signInState = reactive<Partial<SignInInput>>({});
async function onSignIn(event: FormSubmitEvent<SignInInput>) {
  const { email, password } = event.data;
  await authClient.signIn.email({ email, password });
}
</script>

<template>
  <div class="mx-auto w-fit">
    <section class="flex gap-4 items-center">
      <UForm
        class="space-y-4"
        loading-auto
        :schema="SignInInputSchema"
        :state="signInState"
        @submit="onSignIn"
      >
        <UFormField
          label="Email"
          name="email"
        >
          <UInput
            v-model="signInState.email"
            placeholder="Type your email..."
            :ui="{ trailing: 'pe-1' }"
          >
            <template
              v-if="signInState.email"
              #trailing
            >
              <UButton
                color="neutral"
                icon="i-lucide-circle-x"
                size="sm"
                variant="link"
                @click="signInState.email = undefined"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField
          label="Password"
          name="password"
        >
          <UInput
            v-model="signInState.password"
            type="password"
          />
        </UFormField>

        <UButton type="submit">
          {{ t("auth.sign-in") }}
        </UButton>
      </UForm>

      <UButton @click="authClient.signOut()">
        {{ t("auth.sign-out") }}
      </UButton>

      <span class="font-normal text-sm hover:scale-110 cursor-default transition-all">{{ t("auth.sign-out") }}</span>
    </section>
  </div>
</template>
