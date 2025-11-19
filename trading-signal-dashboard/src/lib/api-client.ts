import axios from 'axios';

// API Types
export interface Symbol {
  index: 'NIFTY' | 'BANKNIFTY' | 'FINNIFTY';
  strike: number;
  type: 'CE' | 'PE' | 'FUT';
  expiry: string; // YYYY-MM-DD
}

export interface Order {
  entry_type: 'ABOVE' | 'BELOW' | 'AT';
  entry_price: number;
  stoploss: number;
  target: number;
  quantity: number;
}

export interface TradeSignal {
  signal_id: string;
  side: 'BUY' | 'SELL';
  symbol: Symbol;
  order: Order;
}

export interface TradeResponse {
  status: string;
  signal_id: string;
}

export interface OrderDetail {
  order_id?: string;
  status?: string;
  price?: number;
  quantity?: number;
  timestamp?: number;
}

export interface SignalStatus {
  signal_id?: string;
  status: string;
  started_at: number;
  live_price?: number;
  stoploss?: number;
  target?: number;
  entry_order?: OrderDetail;
  exit_order?: OrderDetail;
  error?: string;
}

export interface UpdateSignalRequest {
  stoploss: number;
  target: number;
}

export interface UpdateSignalResponse {
  status: string;
}

export interface WebSocketMessage {
  signal_id: string;
  price: number;
  timestamp: number;
  status: string;
}

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API methods
export const tradeApi = {
  // Start a new trade
  startTrade: async (signal: TradeSignal): Promise<TradeResponse> => {
    const response = await apiClient.post<TradeResponse>('/trade/start', signal);
    return response.data;
  },

  // Get trade status by signal ID
  getStatus: async (signal_id: string): Promise<SignalStatus> => {
    const response = await apiClient.get<SignalStatus>(`/trade/status/${signal_id}`);
    return response.data;
  },

  // Update trade stoploss and target
  updateTrade: async (signal_id: string, updates: UpdateSignalRequest): Promise<UpdateSignalResponse> => {
    const response = await apiClient.post<UpdateSignalResponse>(`/trade/update/${signal_id}`, updates);
    return response.data;
  },
};

export default apiClient;