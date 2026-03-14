'use client';

import { clsx } from 'clsx';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  labelLeft?: string;
  labelRight?: string;
  badge?: string;
}

export function Toggle({ enabled, onChange, labelLeft, labelRight, badge }: ToggleProps) {
  return (
    <div className="flex items-center gap-3">
      {labelLeft && (
        <span className={clsx('text-sm font-medium', !enabled ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400')}>
          {labelLeft}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={clsx(
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950',
          enabled ? 'bg-brand-600' : 'bg-gray-300 dark:bg-gray-700'
        )}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200',
            enabled ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
      {labelRight && (
        <span className={clsx('text-sm font-medium', enabled ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400')}>
          {labelRight}
        </span>
      )}
      {badge && enabled && (
        <span className="rounded-full bg-green-100 dark:bg-green-900/50 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
          {badge}
        </span>
      )}
    </div>
  );
}
