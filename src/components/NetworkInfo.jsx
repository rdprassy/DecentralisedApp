import { useAccount, useChainId } from 'wagmi';
import { MONAD_TESTNET, CONTRACT_ADDRESS, getExplorerLink } from '../contracts/config';

export function NetworkInfo() {
  const { isConnected } = useAccount();
  const chainId = useChainId();

  const isCorrectNetwork = chainId === MONAD_TESTNET.id;

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">🌐</span>
        Network Info
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Network</span>
          <span className="text-sm font-medium text-white">{MONAD_TESTNET.name}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Chain ID</span>
          <span className="text-sm font-medium text-white">{MONAD_TESTNET.id}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Currency</span>
          <span className="text-sm font-medium text-white">{MONAD_TESTNET.nativeCurrency.symbol}</span>
        </div>

        <div className="pt-3 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-1">Contract Address</p>
          <a
            href={getExplorerLink('address', CONTRACT_ADDRESS)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-purple-400 hover:text-purple-300 break-all"
          >
            {CONTRACT_ADDRESS}
          </a>
        </div>

        {isConnected && !isCorrectNetwork && (
          <div className="mt-3 p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg">
            <p className="text-sm text-yellow-400">
              ⚠️ Please switch to Monad Testnet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
