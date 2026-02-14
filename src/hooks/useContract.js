import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contracts/config';

/**
 * Hook to read the current stored value from the contract
 */
export function useGetValue() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getValue',
  });
}

/**
 * Hook to read contract statistics
 */
export function useGetStats() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getStats',
  });
}

/**
 * Hook to read the update count
 */
export function useUpdateCount() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'updateCount',
  });
}

/**
 * Hook to write a new value to the contract
 */
export function useSetValue() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const setValue = (value) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'setValue',
      args: [BigInt(value)],
    });
  };

  return {
    setValue,
    hash,
    error,
    isPending,
    isConfirming,
    isConfirmed,
  };
}
