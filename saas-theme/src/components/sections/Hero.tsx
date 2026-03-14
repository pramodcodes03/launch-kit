'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DashboardMockup } from '@/components/sections/Dashboard';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 gradient-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="brand" className="mb-6">✦ Trusted by 10,000+ teams</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
        >
          Ship your SaaS{' '}
          <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
            faster
          </span>{' '}
          than ever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          LaunchKit gives you every page, component and integration you need to go from idea to live product in days — not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg">Start for free →</Button>
          <Button variant="outline" size="lg">View demo</Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {['bg-brand-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-emerald-500'].map((color, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white dark:border-gray-950`} />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Join 10,000+ founders</span>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 w-full max-w-5xl hidden sm:block"
        >
          <div className="animate-float">
            <DashboardMockup compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
