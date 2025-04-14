'use client';

import { useActiveAccount, useActiveChain } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { useUSDC } from "../hooks/useUSDC";

export default function Home() {
  const account = useActiveAccount();
  const chain = useActiveChain();
  const [amount, setAmount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const { sendUSDC, isTransferring, balance, isLoadingBalance } = useUSDC();

  const handleSendUSDC = async () => {
    if (!account?.address || !amount || !recipient) return;

    try {
      await sendUSDC(recipient, amount);
    } catch (error) {
      console.error("Error sending USDC:", error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">USDC on Base</h1>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ConnectButton />
          
          {account?.address && chain?.id === base.id && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Balance</label>
                <p className="text-lg font-semibold">
                  {isLoadingBalance ? "Loading..." : `${balance?.toString() || "0"} USDC`}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount (USDC)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter amount"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Recipient Address</label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter recipient address"
                />
              </div>
              
              <button
                onClick={handleSendUSDC}
                disabled={isTransferring || !amount || !recipient}
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 disabled:opacity-50"
              >
                {isTransferring ? "Sending..." : "Send USDC"}
              </button>
            </div>
          )}
          
          {account?.address && chain?.id !== base.id && (
            <p className="mt-4 text-red-500">
              Please switch to Base network to use this application.
            </p>
          )}
        </div>
      </div>
    </main>
  );
} 