import { Inter } from 'next/font/google';
import './globals.css';
import { ThirdwebAppProvider } from '../providers/ThirdwebProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thirdweb USDC Base App',
  description: 'Manage USDC on Base network with Thirdweb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebAppProvider>
          {children}
        </ThirdwebAppProvider>
      </body>
    </html>
  );
} 