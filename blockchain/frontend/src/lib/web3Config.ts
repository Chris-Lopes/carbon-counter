import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { hardhat } from "viem/chains";

export const config = getDefaultConfig({
  appName: "CCT Token Marketplace",
  projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // Get one from https://cloud.walletconnect.com/
  chains: [hardhat],
  transports: {
    [hardhat.id]: http(),
  },
});
