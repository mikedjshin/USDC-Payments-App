# Thirdweb USDC Base App

A modern personal finance application that allows users to manage USDC on Base network using Thirdweb's infrastructure. This project demonstrates how to leverage Thirdweb's SDK, Engine, and Account Abstraction features to create a seamless user experience.

## Features

- USDC management on Base network
- Account Abstraction powered by Thirdweb
- Gasless transactions
- Secure authentication
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js 18+ installed
- Thirdweb API key
- Base network RPC URL

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/thirdweb-usdc-base.git
cd thirdweb-usdc-base
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your environment variables:
```env
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id
NEXT_PUBLIC_THIRDWEB_API_KEY=your_api_key
NEXT_PUBLIC_BASE_RPC_URL=your_base_rpc_url
```

4. Run the development server:
```bash
npm run dev
```

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Next.js pages
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- `src/contracts/` - Smart contract interactions

## Thirdweb Integration

This project uses several Thirdweb features:

- **Account Abstraction**: For gasless transactions and better UX
- **Engine API**: For backend operations and relaying transactions
- **React SDK**: For frontend integration
- **Auth**: For secure authentication

## License

MIT 