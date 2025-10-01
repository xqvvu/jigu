import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";

export default async function ServerProviders({ children }: PropsWithChildren) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
