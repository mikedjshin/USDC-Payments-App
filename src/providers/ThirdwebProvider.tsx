import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";
import { AuthProvider } from "@thirdweb-dev/auth";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ThirdwebAppProvider({ children }: Props) {
  return (
    <ThirdwebProvider
      activeChain={Base}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
        authUrl: "/api/auth",
      }}
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThirdwebProvider>
  );
} 