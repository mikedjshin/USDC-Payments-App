import { ThirdwebProvider } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";
import { ReactNode } from "react";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
});

interface Props {
  children: ReactNode;
}

export function ThirdwebAppProvider({ children }: Props) {
  return (
    <ThirdwebProvider
      client={client}
      activeChain={base}
    >
      {children}
    </ThirdwebProvider>
  );
} 