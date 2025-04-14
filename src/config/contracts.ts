import { Base } from "@thirdweb-dev/chains";

export const USDC_CONTRACT_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // Base USDC address

export const CONTRACTS = {
  [Base.chainId]: {
    usdc: USDC_CONTRACT_ADDRESS,
  },
}; 