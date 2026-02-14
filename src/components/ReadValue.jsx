import { useGetValue, useGetStats } from '../hooks/useContract';

export function ReadValue() {
  const { data: value, isLoading, error, refetch } = useGetValue();
  const { data: stats } = useGetStats();

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📖</span>
        Read Value
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-900 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Current Stored Value</p>
          {isLoading ? (
            <div className="animate-pulse h-8 bg-gray-700 rounded w-24"></div>
          ) : error ? (
            <p className="text-red-400 text-sm">Error loading value</p>
          ) : (
            <p className="text-3xl font-bold text-purple-400">
              {value?.toString() ?? '0'}
            </p>
          )}
        </div>

        {stats && (
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-900 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">Update Count</p>
              <p className="text-lg font-semibold text-white">
                {stats[2]?.toString() ?? '0'}
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">Last Updater</p>
              <p className="text-sm font-mono text-white truncate">
                {stats[1] === '0x0000000000000000000000000000000000000000' 
                  ? 'None' 
                  : `${stats[1]?.slice(0, 6)}...${stats[1]?.slice(-4)}`}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => refetch()}
          disabled={isLoading}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
      </div>
    </div>
  );
}
