"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ArrowLeft, Send, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { tradeApi, TradeSignal } from '@/lib/api-client';
import { generateSignalId } from '@/lib/utils';
import { useSignalStore } from '@/lib/store';

type FormData = {
  signal_id: string;
  side: 'BUY' | 'SELL';
  index: 'NIFTY' | 'BANKNIFTY' | 'FINNIFTY';
  strike: number;
  type: 'CE' | 'PE' | 'FUT';
  expiry: string;
  entry_type: 'ABOVE' | 'BELOW' | 'AT';
  entry_price: number;
  stoploss: number;
  target: number;
  quantity: number;
};

export default function CreateSignalPage() {
  const router = useRouter();
  const addSignal = useSignalStore(state => state.addSignal);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      signal_id: '',
      side: 'BUY',
      index: 'NIFTY',
      type: 'CE',
      entry_type: 'ABOVE',
    }
  });

  const formData = watch();

  // Build signal object for preview
  const buildSignal = (data: FormData): TradeSignal => ({
    signal_id: data.signal_id || generateSignalId(),
    side: data.side,
    symbol: {
      index: data.index,
      strike: Number(data.strike),
      type: data.type,
      expiry: data.expiry,
    },
    order: {
      entry_type: data.entry_type,
      entry_price: Number(data.entry_price),
      stoploss: Number(data.stoploss),
      target: Number(data.target),
      quantity: Number(data.quantity),
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const signal = buildSignal(data);
      const response = await tradeApi.startTrade(signal);
      
      toast.success('Signal created successfully!', {
        description: `Signal ID: ${response.signal_id}`,
      });

      // Add to store for monitoring
      addSignal(response.signal_id);

      // Redirect to signal details
      router.push(`/signals/${response.signal_id}`);
    } catch (error: any) {
      console.error('Failed to create signal:', error);
      toast.error('Failed to create signal', {
        description: error.response?.data?.detail || error.message || 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Create Trading Signal
            </h1>
            <p className="text-muted-foreground">
              Configure your auto-trading signal parameters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <GlassCard className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Signal ID */}
              <div>
                <Label htmlFor="signal_id">
                  Signal ID <span className="text-xs text-muted-foreground">(optional - auto-generated)</span>
                </Label>
                <Input
                  id="signal_id"
                  placeholder="Leave blank to auto-generate"
                  {...register('signal_id')}
                />
              </div>

              {/* Side Toggle */}
              <div>
                <Label>Trade Side</Label>
                <div className="flex gap-2 mt-2">
                  <Button
                    type="button"
                    onClick={() => setValue('side', 'BUY')}
                    className={`flex-1 ${
                      formData.side === 'BUY'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-accent text-foreground'
                    }`}
                  >
                    BUY
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setValue('side', 'SELL')}
                    className={`flex-1 ${
                      formData.side === 'SELL'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-accent text-foreground'
                    }`}
                  >
                    SELL
                  </Button>
                </div>
              </div>

              {/* Symbol Section */}
              <div className="space-y-4 p-4 rounded-lg bg-accent/50">
                <h3 className="font-semibold">Symbol Details</h3>
                
                <div>
                  <Label htmlFor="index">Index</Label>
                  <Select
                    value={formData.index}
                    onValueChange={(value) => setValue('index', value as any)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NIFTY">NIFTY</SelectItem>
                      <SelectItem value="BANKNIFTY">BANKNIFTY</SelectItem>
                      <SelectItem value="FINNIFTY">FINNIFTY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="strike">Strike Price</Label>
                  <Input
                    id="strike"
                    type="number"
                    placeholder="e.g., 19000"
                    {...register('strike', { required: 'Strike is required', min: 1 })}
                  />
                  {errors.strike && (
                    <p className="text-xs text-red-500 mt-1">{errors.strike.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="type">Option Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setValue('type', value as any)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CE">CE (Call)</SelectItem>
                      <SelectItem value="PE">PE (Put)</SelectItem>
                      <SelectItem value="FUT">FUT (Future)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    type="date"
                    {...register('expiry', { required: 'Expiry is required' })}
                  />
                  {errors.expiry && (
                    <p className="text-xs text-red-500 mt-1">{errors.expiry.message}</p>
                  )}
                </div>
              </div>

              {/* Order Section */}
              <div className="space-y-4 p-4 rounded-lg bg-accent/50">
                <h3 className="font-semibold">Order Parameters</h3>

                <div>
                  <Label htmlFor="entry_type">Entry Type</Label>
                  <Select
                    value={formData.entry_type}
                    onValueChange={(value) => setValue('entry_type', value as any)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ABOVE">ABOVE</SelectItem>
                      <SelectItem value="BELOW">BELOW</SelectItem>
                      <SelectItem value="AT">AT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="entry_price">Entry Price</Label>
                  <Input
                    id="entry_price"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 100.50"
                    {...register('entry_price', { required: 'Entry price is required', min: 0 })}
                  />
                  {errors.entry_price && (
                    <p className="text-xs text-red-500 mt-1">{errors.entry_price.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="stoploss">Stop Loss</Label>
                  <Input
                    id="stoploss"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 90.00"
                    {...register('stoploss', { required: 'Stop loss is required', min: 0 })}
                  />
                  {errors.stoploss && (
                    <p className="text-xs text-red-500 mt-1">{errors.stoploss.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="target">Target</Label>
                  <Input
                    id="target"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 120.00"
                    {...register('target', { required: 'Target is required', min: 0 })}
                  />
                  {errors.target && (
                    <p className="text-xs text-red-500 mt-1">{errors.target.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="e.g., 50"
                    {...register('quantity', { required: 'Quantity is required', min: 1 })}
                  />
                  {errors.quantity && (
                    <p className="text-xs text-red-500 mt-1">{errors.quantity.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Create Signal
                  </>
                )}
              </Button>
            </form>
          </GlassCard>

          {/* JSON Preview */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">JSON Preview</h3>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {showPreview && (
                <pre className="bg-black/5 dark:bg-white/5 p-4 rounded-lg overflow-x-auto text-xs">
                  {JSON.stringify(buildSignal(formData), null, 2)}
                </pre>
              )}
            </GlassCard>

            {/* Help Card */}
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-3">Quick Guide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Signal ID:</strong> Auto-generated if left blank</li>
                <li>• <strong>Entry Type:</strong> ABOVE/BELOW/AT market price</li>
                <li>• <strong>Stop Loss:</strong> Exit price if trade goes against you</li>
                <li>• <strong>Target:</strong> Exit price for profit booking</li>
                <li>• <strong>Quantity:</strong> Number of contracts/lots</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
