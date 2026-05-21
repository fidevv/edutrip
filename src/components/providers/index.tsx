"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LenisScrollProvider from "@/components/providers/lenis"
import { TooltipProvider } from "@/components/ui/tooltip"; // 👈 Update bagian ini

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <LenisScrollProvider>
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </LenisScrollProvider>
    </NextThemesProvider>
  );
}
