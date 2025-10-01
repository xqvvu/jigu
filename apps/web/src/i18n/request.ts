import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "@/i18n/locales";

export default getRequestConfig(async () => {
  const locale = await (async () => {
    // retrieve locale from Cookies first
    const store = await cookies();
    const storedLocale = store.get("locale")?.value;
    if (storedLocale) return storedLocale;

    // if there no cookies for locale, then predict locale by 'Accept-Language'
    const _headers: Record<string, string> = {};
    for (const [k, v] of await headers()) _headers[k] = v;
    const languages = new Negotiator({ headers: _headers }).languages();
    return match(languages, locales, defaultLocale);
  })();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
