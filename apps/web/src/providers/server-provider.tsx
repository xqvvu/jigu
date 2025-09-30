import { NextIntlClientProvider } from "next-intl";
import { PropsWithChildren } from "react";

export async function ServerProviders({ children }: PropsWithChildren) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
