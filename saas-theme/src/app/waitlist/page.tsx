'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const targetDate = new Date('2025-06-01T00:00:00');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

export default function WaitlistPage() {
  const countdown = useCountdown();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-xl">
          <Badge variant="brand" className="mb-6">Coming soon</Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Something amazing is coming
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            We are working hard on the next big thing. Be the first to know when we launch.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{String(item.value).padStart(2, '0')}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Email signup */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
            <Button variant="primary" size="lg">Join waitlist</Button>
          </div>

          <p className="text-sm text-gray-500">1,240 people already waiting</p>

          {/* Social share */}
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
