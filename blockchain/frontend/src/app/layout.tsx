// app/layout.tsx
"use client";

import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/web3Config";
import { hardhat } from "viem/chains";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>CCT Token Marketplace</title>
        <meta
          name="description"
          content="MetaMask connect UI using RainbowKit"
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={config}>
            <RainbowKitProvider chains={[hardhat]}>
              {children}
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </body>
    </html>
  );
}
