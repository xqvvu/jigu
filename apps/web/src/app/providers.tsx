import { type PropsWithChildren } from "react";
import { ClientProviders } from "@/providers/client-provider";
import { ServerProviders } from "@/providers/server-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
}
