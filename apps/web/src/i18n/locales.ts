export const locales = ["en-US", "zh-CN"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-CN";

export const localeIcon = (locale: Locale) => {
  switch (locale) {
    case "en-US":
      return "icon-[circle-flags--us]";
    case "zh-CN":
      return "icon-[circle-flags--zh]";
  }
};
