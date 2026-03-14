'use client';

import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export function Button({ variant = 'primary', size = 'md', className, children, href, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950';

  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    ghost: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
    outline: 'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
