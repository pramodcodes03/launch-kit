import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    brand: 'bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300',
    success: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300',
  };

  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}
