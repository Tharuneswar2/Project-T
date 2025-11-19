"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Activity, TrendingUp, TrendingDown, Clock, Eye } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { Loader } from '@/components/ui/loader';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { useSignalStore } from '@/lib/store';
import { formatTimestamp, formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
  const { signals, loading, refreshAllSignals } = useSignalStore();

  // Auto-refresh every 3 seconds
  useEffect(() => {
    refreshAllSignals();
    const interval = setInterval(() => {
      refreshAllSignals();
    }, 3000);

    return () => clearInterval(interval);
  }, [refreshAllSignals]);

  const signalsArray = Array.from(signals.values());
  const activeSignals = signalsArray.filter(s => 
    ['monitoring', 'accepted', 'active', 'pending', 'waiting', 'entered'].includes(s.status.toLowerCase())
  );
  const completedSignals = signalsArray.filter(s => 
    ['completed', 'failed', 'target-hit', 'sl-hit', 'error'].includes(s.status.toLowerCase())
  );

  // Calculate stats
  const totalActive = activeSignals.length;
  const totalCompleted = completedSignals.length;
  const totalSignals = signalsArray.length;

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Trading Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor your active signals and trading activity in real-time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Signals</p>
                <p className="text-3xl font-bold">{totalSignals}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Signals</p>
                <p className="text-3xl font-bold text-green-600">{totalActive}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Completed</p>
                <p className="text-3xl font-bold text-purple-600">{totalCompleted}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Loading State */}
        {loading && signalsArray.length === 0 && (
          <div className="flex justify-center py-12">
            <Loader size="lg" />
          </div>
        )}

        {/* Empty State */}
        {!loading && signalsArray.length === 0 && (
          <GlassCard className="p-12 text-center">
            <Activity className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No signals yet</h3>
            <p className="text-muted-foreground mb-6">
              Create your first trading signal to get started
            </p>
            <Link
              href="/signals/create"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Create Signal
            </Link>
          </GlassCard>
        )}

        {/* Active Signals */}
        {activeSignals.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Active Signals
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeSignals.map((signal) => (
                <SignalCard key={signal.signal_id} signal={signal} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Signals */}
        {completedSignals.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Completed Signals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedSignals.map((signal) => (
                <SignalCard key={signal.signal_id} signal={signal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
}

function SignalCard({ signal }: { signal: any }) {
  const timeSinceStart = signal.started_at 
    ? Math.floor((Date.now() / 1000 - signal.started_at) / 60) 
    : 0;

  return (
    <GlassCard className="p-6 hover:scale-[1.02] transition-transform">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{signal.signal_id}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{timeSinceStart} min ago</span>
          </div>
        </div>
        <StatusBadge status={signal.status} />
      </div>

      {/* Live Price */}
      {signal.live_price !== undefined && (
        <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
          <p className="text-xs text-muted-foreground mb-1">Live Price</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {formatCurrency(signal.live_price)}
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      )}

      {/* Stop Loss & Target */}
      {(signal.stoploss !== undefined || signal.target !== undefined) && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {signal.stoploss !== undefined && (
            <div className="p-2 rounded-lg bg-red-500/5 border border-red-500/10">
              <p className="text-xs text-muted-foreground mb-0.5">Stop Loss</p>
              <p className="text-sm font-semibold text-red-600">
                {formatCurrency(signal.stoploss)}
              </p>
            </div>
          )}
          {signal.target !== undefined && (
            <div className="p-2 rounded-lg bg-green-500/5 border border-green-500/10">
              <p className="text-xs text-muted-foreground mb-0.5">Target</p>
              <p className="text-sm font-semibold text-green-600">
                {formatCurrency(signal.target)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Entry Order Info */}
      {signal.entry_order && (
        <div className="mb-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
          <p className="text-xs text-muted-foreground mb-1">Entry Order</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {signal.entry_order.status || 'Pending'}
            </span>
            {signal.entry_order.price && (
              <span className="text-sm font-semibold text-blue-600">
                {formatCurrency(signal.entry_order.price)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Exit Order Info */}
      {signal.exit_order && (
        <div className="mb-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
          <p className="text-xs text-muted-foreground mb-1">Exit Order</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {signal.exit_order.status || 'Pending'}
            </span>
            {signal.exit_order.price && (
              <span className="text-sm font-semibold text-green-600">
                {formatCurrency(signal.exit_order.price)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error Message */}
      {signal.error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
          <p className="text-xs text-red-600">{signal.error}</p>
        </div>
      )}

      {/* View Details Button */}
      <Link
        href={`/signals/${signal.signal_id}`}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
      >
        <Eye className="w-4 h-4" />
        View Details
      </Link>
    </GlassCard>
  );
}