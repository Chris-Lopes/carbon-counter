// SPDX-License-Identifier: MIT
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_SUPPLY = 100000000;

export default buildModule("CarbonCreditToken", (m) => {
  const carbonCreditToken = m.contract("CarbonCreditToken", [INITIAL_SUPPLY]);

  return { carbonCreditToken };
});
