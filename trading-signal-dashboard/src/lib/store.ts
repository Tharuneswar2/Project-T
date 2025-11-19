import { create } from 'zustand';
import { tradeApi, SignalStatus } from './api-client';

export interface SignalWithStatus extends SignalStatus {
  signal_id: string;
  last_updated: number;
}

interface SignalStore {
  signals: Map<string, SignalWithStatus>;
  loading: boolean;
  error: string | null;
  
  // Actions
  addSignal: (signal_id: string) => void;
  removeSignal: (signal_id: string) => void;
  refreshSignal: (signal_id: string) => Promise<void>;
  refreshAllSignals: () => Promise<void>;
  clearError: () => void;
}

export const useSignalStore = create<SignalStore>((set, get) => ({
  signals: new Map(),
  loading: false,
  error: null,

  addSignal: (signal_id: string) => {
    const signals = new Map(get().signals);
    if (!signals.has(signal_id)) {
      signals.set(signal_id, {
        signal_id,
        status: 'monitoring',
        started_at: Date.now() / 1000,
        last_updated: Date.now(),
      });
      set({ signals });
      // Immediately fetch status
      get().refreshSignal(signal_id);
    }
  },

  removeSignal: (signal_id: string) => {
    const signals = new Map(get().signals);
    signals.delete(signal_id);
    set({ signals });
  },

  refreshSignal: async (signal_id: string) => {
    try {
      const status = await tradeApi.getStatus(signal_id);
      const signals = new Map(get().signals);
      signals.set(signal_id, {
        signal_id,
        ...status,
        last_updated: Date.now(),
      });
      set({ signals, error: null });
    } catch (error) {
      console.error(`Failed to refresh signal ${signal_id}:`, error);
      set({ error: `Failed to refresh signal ${signal_id}` });
    }
  },

  refreshAllSignals: async () => {
    const signalIds = Array.from(get().signals.keys());
    set({ loading: true });
    
    await Promise.all(
      signalIds.map(id => get().refreshSignal(id))
    );
    
    set({ loading: false });
  },

  clearError: () => set({ error: null }),
}));

// Auto-refresh hook - call this in your components
export const useAutoRefresh = (intervalMs: number = 3000) => {
  const refreshAllSignals = useSignalStore(state => state.refreshAllSignals);

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const React = require('react');
    React.useEffect(() => {
      const interval = setInterval(() => {
        refreshAllSignals();
      }, intervalMs);

      return () => clearInterval(interval);
    }, [refreshAllSignals, intervalMs]);
  }
};
