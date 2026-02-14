import abi from './abi.json';

// Monad Testnet Configuration
export const MONAD_TESTNET = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Explorer',
      url: 'https://testnet.monadexplorer.com',
    },
  },
  testnet: true,
};

// Contract Configuration
// NOTE: Replace this address with your deployed contract address
export const CONTRACT_ADDRESS = '0xA23Ca26483EAE2584aD6A92946a51fa929f8dAaD';

export const CONTRACT_ABI = abi;

// Helper to get explorer link
export const getExplorerLink = (type, value) => {
  const baseUrl = MONAD_TESTNET.blockExplorers.default.url;
  switch (type) {
    case 'address':
      return `${baseUrl}/address/${value}`;
    case 'tx':
      return `${baseUrl}/tx/${value}`;
    default:
      return baseUrl;
  }
};
