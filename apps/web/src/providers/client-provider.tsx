"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6e4,
      gcTime: 5 * 6e4,
    },
  },
});

export default function ClientProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
