import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACTS } from "../config/contracts";
import { useWeb3 } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";

export function useUSDC() {
  const { chainId } = useWeb3();
  const { contract } = useContract(CONTRACTS[Base.chainId].usdc, "token");

  const { data: balance, isLoading: isLoadingBalance } = useContractRead(
    contract,
    "balanceOf",
    [address]
  );

  const { mutateAsync: transfer, isLoading: isTransferring } = useContractWrite(
    contract,
    "transfer"
  );

  const sendUSDC = async (to: string, amount: string) => {
    if (!contract) throw new Error("Contract not initialized");
    
    const amountInWei = BigInt(amount) * BigInt(10 ** 6); // USDC has 6 decimals
    
    return transfer({
      args: [to, amountInWei],
    });
  };

  return {
    balance,
    isLoadingBalance,
    sendUSDC,
    isTransferring,
  };
} 