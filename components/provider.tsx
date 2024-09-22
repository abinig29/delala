"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { type FC, type ReactNode } from "react";
import { TooltipProvider } from "./ui/tooltip";
import { Toaster } from "./ui/toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  console.log({ google: process?.env?.NEXT_PUBLIC_GOOGLE_ID })
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={process?.env?.NEXT_PUBLIC_GOOGLE_ID ?? ""}>
        <TooltipProvider>
          <Toaster />
          <SessionProvider>{children}</SessionProvider>
        </TooltipProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
