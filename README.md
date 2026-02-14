# ⚡ Monad Storage DApp

A minimal Web3 decentralized application demonstrating smart contract interaction on the **Monad Testnet**. This DApp allows users to read and write values to a SimpleStorage smart contract.

![Monad](https://img.shields.io/badge/Network-Monad_Testnet-purple)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7-yellow)

## 📋 Project Overview

This project showcases a complete end-to-end Web3 integration:
- **Smart Contract**: SimpleStorage contract deployed on Monad Testnet
- **Frontend**: React + Vite application with TailwindCSS
- **Web3 Integration**: wagmi + viem for Ethereum interactions

## ✨ Features

- **Read Action**: Fetch the current stored value from the blockchain
- **Write Action**: Update the stored value (requires wallet connection)
- **Wallet Connection**: Connect with MetaMask or any injected wallet
- **Transaction Tracking**: View transaction status and explorer links
- **Statistics Display**: See update count and last updater address

## 🔄 User Flow

1. **Connect Wallet**: Click "Connect" to link your Web3 wallet
2. **Switch Network**: Ensure you're on Monad Testnet (Chain ID: 10143)
3. **Read Value**: View the current stored value and statistics
4. **Write Value**: Enter a new number and submit the transaction
5. **Confirm**: Approve the transaction in your wallet
6. **View Result**: See the updated value after confirmation

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Web3**: wagmi v2 + viem
- **State Management**: TanStack Query

## 📁 Project Structure

```
src/
├── components/          # React UI components
│   ├── ConnectWallet.jsx
│   ├── NetworkInfo.jsx
│   ├── ReadValue.jsx
│   └── WriteValue.jsx
├── config/              # Configuration files
│   └── wagmi.js         # wagmi client setup
├── contracts/           # Smart contract files
│   ├── SimpleStorage.sol # Solidity contract
│   ├── abi.json         # Contract ABI
│   └── config.js        # Contract address & config
├── hooks/               # Custom React hooks
│   └── useContract.js   # Contract interaction hooks
├── App.jsx              # Main application component
├── main.jsx             # Entry point with providers
└── index.css            # Global styles
```

## 🚀 How to Run This Project

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MetaMask** browser extension - [Install here](https://metamask.io/)
- **MON tokens** on Monad Testnet (for write transactions)

### Step-by-Step Instructions

#### Step 1: Clone the Repository
```bash
git clone https://github.com/rdprassy/DecentralisedApp.git
cd DecentralisedApp
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Start the Development Server
```bash
npm run dev
```

#### Step 4: Open the DApp
Open your browser and navigate to:
```
http://localhost:5173
```

#### Step 5: Configure MetaMask for Monad Testnet
1. Open MetaMask
2. Click on the network dropdown
3. Click "Add Network" → "Add a network manually"
4. Enter the following details:

| Field | Value |
|-------|-------|
| Network Name | Monad Testnet |
| RPC URL | `https://testnet-rpc.monad.xyz` |
| Chain ID | `10143` |
| Currency Symbol | `MON` |
| Block Explorer | `https://testnet.monadexplorer.com` |

5. Click "Save"

#### Step 6: Connect Your Wallet
1. Click "Connect Injected" button in the DApp
2. Approve the connection in MetaMask
3. Switch to Monad Testnet if prompted

#### Step 7: Use the DApp
- **Read Value**: The current stored value displays automatically
- **Write Value**: Enter a number, click "Set Value", and confirm in MetaMask

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run compile` | Compile the smart contract |
| `npm run deploy` | Deploy contract (requires .env with PRIVATE_KEY) |

### Deploying Your Own Contract (Optional)

1. Create a `.env` file:
   ```bash
   PRIVATE_KEY=your_private_key_here
   ```

2. Compile and deploy:
   ```bash
   npm run compile
   npm run deploy
   ```

3. The contract address will be automatically updated in the config

## 🌐 Monad Testnet Configuration

Add Monad Testnet to your wallet:

| Parameter | Value |
|-----------|-------|
| Network Name | Monad Testnet |
| RPC URL | https://testnet-rpc.monad.xyz |
| Chain ID | 10143 |
| Currency Symbol | MON |
| Block Explorer | https://testnet.monadexplorer.com |

## 📜 Smart Contract

**Contract Address**: `0xA23Ca26483EAE2584aD6A92946a51fa929f8dAaD`

**Explorer Link**: [View on Monad Explorer](https://testnet.monadexplorer.com/address/0xA23Ca26483EAE2584aD6A92946a51fa929f8dAaD)

### Contract Functions

| Function | Type | Description |
|----------|------|-------------|
| `getValue()` | Read | Returns the current stored value |
| `setValue(uint256)` | Write | Updates the stored value |
| `getStats()` | Read | Returns value, last updater, and update count |
| `updateCount()` | Read | Returns total number of updates |
| `lastUpdater()` | Read | Returns address of last updater |

## 📝 License

MIT

---

Built with ❤️ for the Monad ecosystem
