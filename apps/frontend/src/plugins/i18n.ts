import en from "@jigu/frontend/locales/en.json";
import zh_cn from "@jigu/frontend/locales/zh_cn.json";
import { createI18n } from "vue-i18n";

export type Schema = typeof en;
export type Locale = "en" | "zh_cn";

const locales: Locale[] = ["en", "zh_cn"];

export const i18n = createI18n<[Schema], Locale>({
  legacy: false,
  locale: "zh_cn",
  fallbackLocale: "en",
  availableLocales: locales,
  messages: {
    en,
    zh_cn,
  },
});

export default i18n;
