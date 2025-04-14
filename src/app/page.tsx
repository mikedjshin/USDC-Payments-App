'use client';

import { useWeb3 } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";
import { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEngine } from "@thirdweb-dev/react/engine";

export default function Home() {
  const { address, chainId } = useWeb3();
  const [amount, setAmount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const engine = useEngine();

  const handleSendUSDC = async () => {
    if (!address || !amount || !recipient) return;

    setIsLoading(true);
    try {
      // Use Thirdweb Engine to send USDC
      const result = await engine.sendTransaction({
        to: recipient,
        value: amount,
        data: "0x", // USDC transfer data
      });

      console.log("Transaction sent:", result);
    } catch (error) {
      console.error("Error sending USDC:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">USDC on Base</h1>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ConnectWallet />
          
          {address && chainId === Base.chainId && (
            <div className="mt-6 space-y-4">
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
                disabled={isLoading || !amount || !recipient}
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send USDC"}
              </button>
            </div>
          )}
          
          {address && chainId !== Base.chainId && (
            <p className="mt-4 text-red-500">
              Please switch to Base network to use this application.
            </p>
          )}
        </div>
      </div>
    </main>
  );
} 