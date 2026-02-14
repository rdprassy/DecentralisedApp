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

## 🚀 Setup & Run Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MetaMask or compatible Web3 wallet
- Monad Testnet MON tokens (for gas fees)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Dapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the contract address**
   
   Update the `CONTRACT_ADDRESS` in `src/contracts/config.js` with your deployed contract address.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173`

### Deploying Your Own Contract

1. Deploy `src/contracts/SimpleStorage.sol` to Monad Testnet using:
   - [Remix IDE](https://remix.ethereum.org)
   - Hardhat
   - Foundry

2. Update `CONTRACT_ADDRESS` in `src/contracts/config.js`

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
