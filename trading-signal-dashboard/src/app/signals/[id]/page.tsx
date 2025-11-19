"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Clock, TrendingUp, TrendingDown, AlertCircle, Edit2, Save, X } from 'lucide-react';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { Loader } from '@/components/ui/loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { tradeApi, SignalStatus } from '@/lib/api-client';
import { formatTimestamp, formatCurrency } from '@/lib/utils';
import { toast } from 'sonner';
import { useWebSocket } from '@/hooks/use-websocket';

export default function SignalDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const signal_id = params.id as string;
  
  const [signal, setSignal] = useState<SignalStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [livePrice, setLivePrice] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSL, setEditedSL] = useState<string>('');
  const [editedTarget, setEditedTarget] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);

  // WebSocket for real-time updates
  const { isConnected, lastMessage } = useWebSocket(signal_id, {
    onMessage: (message) => {
      console.log('WebSocket message:', message);
      setLivePrice(message.price);
      // Update status if changed
      if (signal && message.status !== signal.status) {
        setSignal(prev => prev ? { ...prev, status: message.status } : null);
      }
    },
    onConnect: () => {
      console.log('WebSocket connected');
      toast.success('Real-time updates connected');
    },
    onDisconnect: () => {
      console.log('WebSocket disconnected');
      toast.info('Real-time updates disconnected');
    },
    onError: (error) => {
      console.error('WebSocket error:', error);
    }
  });

  const fetchSignal = async () => {
    try {
      const data = await tradeApi.getStatus(signal_id);
      setSignal(data);
      setError(null);
      
      // Initialize edit fields
      if (data.stoploss !== undefined) {
        setEditedSL(data.stoploss.toString());
      }
      if (data.target !== undefined) {
        setEditedTarget(data.target.toString());
      }
      if (data.live_price !== undefined) {
        setLivePrice(data.live_price);
      }
    } catch (err: any) {
      console.error('Failed to fetch signal:', err);
      setError(err.response?.data?.detail || err.message || 'Failed to fetch signal');
      toast.error('Failed to fetch signal details');
    } finally {
      setLoading(false);
    }
  };

  // Fallback polling every 3 seconds (when WebSocket is not connected)
  useEffect(() => {
    fetchSignal();
    const interval = setInterval(() => {
      if (!isConnected) {
        fetchSignal();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [signal_id, isConnected]);

  const handleUpdateSignal = async () => {
    if (!signal) return;

    const newSL = parseFloat(editedSL);
    const newTarget = parseFloat(editedTarget);

    if (isNaN(newSL) || isNaN(newTarget)) {
      toast.error('Please enter valid numbers');
      return;
    }

    if (newSL <= 0 || newTarget <= 0) {
      toast.error('Stop loss and target must be greater than 0');
      return;
    }

    setIsUpdating(true);
    try {
      await tradeApi.updateTrade(signal_id, {
        stoploss: newSL,
        target: newTarget,
      });
      
      toast.success('Signal updated successfully');
      setIsEditing(false);
      
      // Refresh signal data
      await fetchSignal();
    } catch (err: any) {
      console.error('Failed to update signal:', err);
      toast.error(err.response?.data?.detail || 'Failed to update signal');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (signal?.stoploss !== undefined) {
      setEditedSL(signal.stoploss.toString());
    }
    if (signal?.target !== undefined) {
      setEditedTarget(signal.target.toString());
    }
  };

  if (loading) {
    return (
      <LayoutWrapper>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader size="lg" />
            <p className="text-muted-foreground">Loading signal details...</p>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  if (error || !signal) {
    return (
      <LayoutWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <GlassCard className="p-12 text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Failed to Load Signal</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push('/dashboard')} variant="outline">
                Back to Dashboard
              </Button>
              <Button onClick={fetchSignal}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </div>
          </GlassCard>
        </div>
      </LayoutWrapper>
    );
  }

  const timeSinceStart = signal.started_at 
    ? Math.floor((Date.now() / 1000 - signal.started_at) / 60) 
    : 0;

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {signal_id}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{timeSinceStart} minutes ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                  <span>{isConnected ? 'WebSocket connected' : 'Polling mode'}</span>
                </div>
              </div>
            </div>
          </div>
          <StatusBadge status={signal.status} />
        </div>

        {/* Live Price Card */}
        {livePrice !== null && (
          <GlassCard className="p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Live Price</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {formatCurrency(livePrice)}
                </p>
                {lastMessage && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Updated {new Date(lastMessage.timestamp * 1000).toLocaleTimeString()}
                  </p>
                )}
              </div>
              {isConnected && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-600">Real-time</span>
                </div>
              )}
            </div>
          </GlassCard>
        )}

        {/* Stop Loss & Target Card */}
        {(signal.stoploss !== undefined || signal.target !== undefined) && (
          <GlassCard className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Stop Loss & Target</h2>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  size="sm"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    size="sm"
                    disabled={isUpdating}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdateSignal}
                    size="sm"
                    disabled={isUpdating}
                  >
                    {isUpdating ? (
                      <Loader size="sm" className="mr-2" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Save
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <p className="text-xs text-muted-foreground mb-2">Stop Loss</p>
                {isEditing ? (
                  <Input
                    type="number"
                    step="0.01"
                    value={editedSL}
                    onChange={(e) => setEditedSL(e.target.value)}
                    className="text-lg font-bold"
                  />
                ) : (
                  <p className="text-2xl font-bold text-red-600">
                    {formatCurrency(signal.stoploss || 0)}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                <p className="text-xs text-muted-foreground mb-2">Target</p>
                {isEditing ? (
                  <Input
                    type="number"
                    step="0.01"
                    value={editedTarget}
                    onChange={(e) => setEditedTarget(e.target.value)}
                    className="text-lg font-bold"
                  />
                ) : (
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(signal.target || 0)}
                  </p>
                )}
              </div>
            </div>
          </GlassCard>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Entry Order */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-xl font-bold">Entry Order</h2>
            </div>

            {signal.entry_order ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <StatusBadge status={signal.entry_order.status || 'pending'} />
                </div>
                
                {signal.entry_order.order_id && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Order ID</span>
                    <span className="font-mono text-sm">{signal.entry_order.order_id}</span>
                  </div>
                )}

                {signal.entry_order.price !== undefined && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="text-lg font-bold text-blue-600">
                      {formatCurrency(signal.entry_order.price)}
                    </span>
                  </div>
                )}

                {signal.entry_order.quantity !== undefined && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Quantity</span>
                    <span className="font-semibold">{signal.entry_order.quantity}</span>
                  </div>
                )}

                {signal.entry_order.timestamp && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Timestamp</span>
                    <span className="text-sm">{formatTimestamp(signal.entry_order.timestamp)}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No entry order data available</p>
              </div>
            )}
          </GlassCard>

          {/* Exit Order */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-xl font-bold">Exit Order</h2>
            </div>

            {signal.exit_order ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <StatusBadge status={signal.exit_order.status || 'pending'} />
                </div>

                {signal.exit_order.order_id && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Order ID</span>
                    <span className="font-mono text-sm">{signal.exit_order.order_id}</span>
                  </div>
                )}

                {signal.exit_order.price !== undefined && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(signal.exit_order.price)}
                    </span>
                  </div>
                )}

                {signal.exit_order.quantity !== undefined && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Quantity</span>
                    <span className="font-semibold">{signal.exit_order.quantity}</span>
                  </div>
                )}

                {signal.exit_order.timestamp && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-muted-foreground">Timestamp</span>
                    <span className="text-sm">{formatTimestamp(signal.exit_order.timestamp)}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No exit order yet</p>
                <p className="text-xs mt-2">Waiting for signal completion...</p>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Error Message */}
        {signal.error && (
          <GlassCard className="p-6 mt-6 border-red-500/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-600 mb-1">Error Occurred</h3>
                <p className="text-sm text-red-600/80">{signal.error}</p>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Timeline */}
        <GlassCard className="p-6 mt-6">
          <h2 className="text-xl font-bold mb-6">Signal Timeline</h2>
          <div className="space-y-4">
            <TimelineItem
              title="Signal Started"
              time={signal.started_at}
              status="completed"
            />
            {signal.entry_order && (
              <TimelineItem
                title="Entry Order Placed"
                time={signal.entry_order.timestamp}
                status={signal.entry_order.status || 'pending'}
              />
            )}
            {signal.exit_order && (
              <TimelineItem
                title="Exit Order Placed"
                time={signal.exit_order.timestamp}
                status={signal.exit_order.status || 'pending'}
              />
            )}
            {signal.status === 'completed' && (
              <TimelineItem
                title="Signal Completed"
                time={Date.now() / 1000}
                status="completed"
              />
            )}
          </div>
        </GlassCard>
      </div>
    </LayoutWrapper>
  );
}

function TimelineItem({ title, time, status }: { title: string; time?: number; status: string }) {
  const statusColors: Record<string, string> = {
    completed: 'bg-green-500',
    pending: 'bg-yellow-500',
    failed: 'bg-red-500',
    active: 'bg-blue-500',
  };

  const color = statusColors[status.toLowerCase()] || 'bg-gray-500';

  return (
    <div className="flex items-start gap-4">
      <div className={`w-3 h-3 rounded-full ${color} mt-1.5`} />
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        {time && (
          <p className="text-sm text-muted-foreground">{formatTimestamp(time)}</p>
        )}
      </div>
      <StatusBadge status={status} />
    </div>
  );
}