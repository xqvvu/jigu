import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const defaultLocales = "zh-CN";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || defaultLocales;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
