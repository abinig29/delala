"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { type FC, type ReactNode } from "react";
import { TooltipProvider } from "./ui/tooltip";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SessionProvider>{children}</SessionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Providers;
