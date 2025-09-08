<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const { t } = useI18n();

const light = ref(false);
const mode = useColorMode();

watchEffect(() => {
  if (light.value) {
    mode.value = "light";
  }
  else {
    mode.value = "dark";
  }
});
</script>

<template>
  <div class="flex gap-4 items-center justify-center h-screen">
    <UButton
      class="font-semibold cursor-pointer"
      icon="i-material-symbols:10k"
    >
      {{ t("common.welcome") }}
    </UButton>

    <USwitch
      v-model="light"
      label="Color mode"
    />
  </div>
</template>
