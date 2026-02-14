import { useQueryClient } from '@tanstack/react-query';
import { ConnectWallet } from './components/ConnectWallet';
import { ReadValue } from './components/ReadValue';
import { WriteValue } from './components/WriteValue';
import { NetworkInfo } from './components/NetworkInfo';
import { CONTRACT_ADDRESS, getExplorerLink } from './contracts/config';

function App() {
  const queryClient = useQueryClient();

  const handleWriteSuccess = () => {
    // Invalidate queries to refresh data after successful write
    queryClient.invalidateQueries();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h1 className="text-xl font-bold">Monad Storage DApp</h1>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Simple Storage on Monad</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A minimal DApp demonstrating read and write operations with a smart contract 
            deployed on the Monad Testnet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ReadValue />
          <WriteValue onSuccess={handleWriteSuccess} />
        </div>

        {/* Network Info */}
        <div className="max-w-md mx-auto">
          <NetworkInfo />
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center">
          <div className="flex justify-center gap-6 text-sm">
            <a
              href={getExplorerLink('address', CONTRACT_ADDRESS)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Contract on Explorer →
            </a>
            <a
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Monad Docs
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
