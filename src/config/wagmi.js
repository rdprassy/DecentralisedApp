import { createConfig, http } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { MONAD_TESTNET } from '../contracts/config';

// Define Monad Testnet chain for wagmi
const monadTestnet = {
  id: MONAD_TESTNET.id,
  name: MONAD_TESTNET.name,
  nativeCurrency: MONAD_TESTNET.nativeCurrency,
  rpcUrls: MONAD_TESTNET.rpcUrls,
  blockExplorers: MONAD_TESTNET.blockExplorers,
  testnet: MONAD_TESTNET.testnet,
};

// Create wagmi config
export const config = createConfig({
  chains: [monadTestnet],
  connectors: [
    injected(),
  ],
  transports: {
    [monadTestnet.id]: http(),
  },
});
