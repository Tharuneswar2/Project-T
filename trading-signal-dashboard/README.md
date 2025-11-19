# Auto-Trading Frontend

A complete, production-ready modern frontend for the FastAPI auto-trading engine with real-time WebSocket updates.

## 🚀 Features

### Core Functionality
- ✅ **Dashboard** - Real-time monitoring of active and completed trading signals
- ✅ **Create Signal** - Beautiful form with live JSON preview and auto-generation
- ✅ **Signal Details** - Real-time updates with WebSocket streaming
- ✅ **Edit SL/Target** - Update stop loss and target prices on the fly
- ✅ **Dark Mode** - Full theme support with localStorage persistence

### Real-Time Updates
- ✅ **WebSocket Integration** - Live price updates via WebSocket connection
- ✅ **Auto-Reconnect** - Automatic reconnection on disconnect with configurable retry
- ✅ **Fallback Polling** - REST API fallback when WebSocket is unavailable
- ✅ **Live Price Display** - Real-time price updates on dashboard and detail pages

### UI/UX
- ✅ **Glassmorphism Design** - Modern frosted glass cards with backdrop blur
- ✅ **Gradient Accents** - Beautiful blue-to-purple gradients
- ✅ **Smooth Animations** - Hover effects, loading states, and transitions
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Toast Notifications** - Success/error feedback using Sonner

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **HTTP Client**: Axios
- **WebSocket**: Native WebSocket API with custom React hook
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📡 Backend API Integration

### REST API Endpoints

**POST /trade/start**
```typescript
{
  signal_id: string
  side: 'BUY' | 'SELL'
  symbol: {
    index: 'NIFTY' | 'BANKNIFTY' | 'FINNIFTY'
    strike: number
    type: 'CE' | 'PE' | 'FUT'
    expiry: string // YYYY-MM-DD
  }
  order: {
    entry_type: 'ABOVE' | 'BELOW' | 'AT'
    entry_price: number
    stoploss: number
    target: number
    quantity: number
  }
}
```

**GET /trade/status/{signal_id}**
```typescript
{
  signal_id: string
  status: 'waiting' | 'monitoring' | 'entered' | 'target-hit' | 'sl-hit' | 'error'
  live_price: number
  stoploss: number
  target: number
  entry_order: {...}
  exit_order: {...}
  error?: string
}
```

**POST /trade/update/{signal_id}**
```typescript
{
  stoploss: number
  target: number
}
```

### WebSocket Connection

**WS /ws/{signal_id}**

Real-time streaming messages:
```typescript
{
  signal_id: string
  price: number
  timestamp: number
  status: string
}
```

## 📂 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx              # Main dashboard with live signals
│   ├── signals/
│   │   ├── create/
│   │   │   └── page.tsx          # Create new signal form
│   │   └── [id]/
│   │       └── page.tsx          # Signal details with WebSocket
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Homepage (redirects to dashboard)
├── components/
│   ├── ui/
│   │   ├── glass-card.tsx        # Glassmorphic card component
│   │   ├── status-badge.tsx      # Status indicator badges
│   │   ├── loader.tsx            # Loading spinner
│   │   ├── button.tsx            # Button component
│   │   ├── input.tsx             # Input component
│   │   └── sonner.tsx            # Toast notifications
│   ├── navbar.tsx                # Navigation bar
│   ├── theme-toggle.tsx          # Dark mode toggle
│   └── layout-wrapper.tsx        # Main layout wrapper
├── hooks/
│   └── use-websocket.ts          # WebSocket connection hook
├── lib/
│   ├── api-client.ts             # Axios instance + API methods
│   ├── store.ts                  # Zustand global store
│   └── utils.ts                  # Utility functions
└── globals.css                   # Tailwind + design tokens
```

## 🎯 Key Features Explained

### 1. WebSocket Integration

The app uses a custom `useWebSocket` hook that provides:
- Automatic connection on component mount
- Auto-reconnection with configurable retry attempts
- Message parsing and error handling
- Graceful cleanup on unmount

```typescript
const { isConnected, lastMessage } = useWebSocket(signal_id, {
  onMessage: (message) => {
    setLivePrice(message.price);
  },
  reconnectAttempts: 5,
  reconnectInterval: 3000
});
```

### 2. Editable Stop Loss & Target

Users can update SL/Target directly from the signal details page:
- Click "Edit" button to enter edit mode
- Modify values with validation
- Calls `POST /trade/update/{signal_id}`
- Updates reflected immediately

### 3. Dashboard Auto-Refresh

The dashboard uses two refresh strategies:
- **Primary**: 3-second polling for REST API updates
- **Enhanced**: WebSocket updates overlay real-time prices

### 4. Signal Status Management

Status filtering categorizes signals as:
- **Active**: `monitoring`, `accepted`, `active`, `pending`, `waiting`, `entered`
- **Completed**: `completed`, `failed`, `target-hit`, `sl-hit`, `error`

## 🎨 Design System

### Colors
- **Primary**: Blue-to-purple gradient
- **Success**: Green tones
- **Danger**: Red tones
- **Muted**: Gray tones

### Components
- **GlassCard**: Frosted glass effect with backdrop blur
- **StatusBadge**: Color-coded status indicators
- **Gradients**: Used for headings and accents

## 🔧 Configuration

### Backend URL
Edit `src/lib/api-client.ts`:
```typescript
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Change this
  // ...
});
```

### WebSocket URL
Edit `src/hooks/use-websocket.ts`:
```typescript
const ws = new WebSocket(`ws://localhost:8000/ws/${signal_id}`);
```

### Refresh Intervals
- **Dashboard**: `src/app/dashboard/page.tsx` (line 14) - 3000ms
- **Signal Details**: `src/app/signals/[id]/page.tsx` (line 80) - 3000ms when WebSocket disconnected

## 📖 Usage Guide

### Creating a Signal

1. Navigate to **Dashboard** → **Create Signal**
2. Fill in the form:
   - Signal ID (auto-generated if blank)
   - Side (BUY/SELL toggle)
   - Symbol details (index, strike, type, expiry)
   - Order details (entry type, prices, SL, target, quantity)
3. Preview JSON payload in the right panel
4. Click **Create Signal**

### Monitoring Signals

1. Dashboard shows all active signals with:
   - Live price (if available via WebSocket)
   - Stop loss and target levels
   - Entry/exit order status
   - Time since creation
2. Click **View Details** for full information

### Editing Stop Loss & Target

1. Open signal details page
2. Locate the "Stop Loss & Target" card
3. Click **Edit** button
4. Modify values and click **Save**
5. Changes are sent to backend immediately

## 🚦 Connection Status Indicators

- **Green pulsing dot** = WebSocket connected (real-time updates)
- **Yellow dot** = Polling mode (REST API fallback)
- **Red** = Connection error

## 🧪 Testing

### Prerequisites
1. FastAPI backend running on `http://localhost:8000`
2. WebSocket endpoint available at `ws://localhost:8000/ws/{signal_id}`

### Test Flow
1. Create a test signal via the UI
2. Verify WebSocket connection in browser DevTools
3. Check that live price updates appear
4. Test editing SL/Target values
5. Verify auto-refresh on dashboard

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "axios": "^1.x",
    "zustand": "^5.x",
    "sonner": "^1.x",
    "lucide-react": "^0.x",
    "tailwindcss": "^4.x"
  }
}
```

## 🔒 Error Handling

- **API Errors**: Displayed via toast notifications
- **WebSocket Errors**: Automatic reconnection with fallback to polling
- **Form Validation**: Client-side validation with error messages
- **Network Issues**: Graceful degradation with user feedback

## 🎯 Future Enhancements

- [ ] Multiple signal WebSocket connections
- [ ] Advanced filtering and sorting
- [ ] Signal analytics and charts
- [ ] Export signal history
- [ ] Notification system for signal events

## 📝 Notes

- The frontend is designed to work in an iframe environment (no browser alerts/confirms)
- All WebSocket connections auto-reconnect on disconnect
- Dark mode preference persists in localStorage
- Signal IDs are auto-generated using timestamp + random string

---

**Built with ❤️ using Next.js 15 + TypeScript + Tailwind CSS**