// SPDX-License-Identifier: MIT
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_CAP = 2000000n; // 2 million tokens cap (higher than initial supply to allow future minting)

export default buildModule("CarbonCreditDeployment", (m) => {
  // Deploy token first
  const token = m.contract("CarbonCreditToken", [INITIAL_CAP]);

  // Deploy marketplace with token address
  const marketplace = m.contract("Marketplace", [token]);

  // Set marketplace address in token contract
  m.call(token, "setMarketplace", [marketplace]);

  return { token, marketplace };
});
