import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useSetValue } from '../hooks/useContract';
import { getExplorerLink } from '../contracts/config';

export function WriteValue({ onSuccess }) {
  const [inputValue, setInputValue] = useState('');
  const { isConnected } = useAccount();
  const { setValue, hash, error, isPending, isConfirming, isConfirmed } = useSetValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue && !isNaN(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleSuccess = () => {
    if (isConfirmed && onSuccess) {
      setInputValue('');
      onSuccess();
    }
  };

  // Trigger callback when confirmed
  if (isConfirmed) {
    handleSuccess();
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">✍️</span>
        Write Value
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="value" className="block text-sm text-gray-400 mb-2">
            New Value
          </label>
          <input
            id="value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            disabled={!isConnected || isPending || isConfirming}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={!isConnected || !inputValue || isPending || isConfirming}
          className="w-full px-4 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!isConnected
            ? 'Connect Wallet First'
            : isPending
            ? 'Confirm in Wallet...'
            : isConfirming
            ? 'Confirming...'
            : 'Set Value'}
        </button>
      </form>

      {/* Transaction Status */}
      {hash && (
        <div className="mt-4 p-3 bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-400 mb-1">Transaction Hash</p>
          <a
            href={getExplorerLink('tx', hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-purple-400 hover:text-purple-300 break-all"
          >
            {hash}
          </a>
        </div>
      )}

      {isConfirmed && (
        <div className="mt-3 p-3 bg-green-900/30 border border-green-700 rounded-lg">
          <p className="text-sm text-green-400">✓ Transaction confirmed!</p>
        </div>
      )}

      {error && (
        <div className="mt-3 p-3 bg-red-900/30 border border-red-700 rounded-lg">
          <p className="text-sm text-red-400">
            Error: {error.shortMessage || error.message}
          </p>
        </div>
      )}
    </div>
  );
}
