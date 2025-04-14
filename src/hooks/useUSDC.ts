import { useContract, useReadContract, useSendTransaction } from "thirdweb/react";
import { CONTRACTS } from "../config/contracts";
import { useActiveAccount } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { getContract } from "thirdweb/contract";
import { client } from "../providers/ThirdwebProvider";

export function useUSDC() {
  const account = useActiveAccount();
  const contract = getContract({
    client,
    address: CONTRACTS[base.id].usdc,
    chain: base,
  });

  const { data: balance, isLoading: isLoadingBalance } = useReadContract({
    contract,
    method: "balanceOf",
    params: [account?.address || "0x"],
  });

  const { mutate: sendTransaction, isPending: isTransferring } = useSendTransaction();

  const sendUSDC = async (to: string, amount: string) => {
    if (!account?.address) throw new Error("No account connected");
    
    const amountInWei = BigInt(amount) * BigInt(10 ** 6); // USDC has 6 decimals
    
    return sendTransaction({
      contract,
      method: "transfer",
      params: [to, amountInWei],
    });
  };

  return {
    balance,
    isLoadingBalance,
    sendUSDC,
    isTransferring,
  };
} 