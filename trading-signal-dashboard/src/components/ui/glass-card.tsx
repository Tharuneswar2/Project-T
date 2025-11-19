import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10',
        'rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300',
        'hover:border-white/30 dark:hover:border-white/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
