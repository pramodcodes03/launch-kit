'use client';

import { LayoutDashboard, BarChart2, Users, Settings, CreditCard, Search, Bell, TrendingUp, TrendingDown } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart2, label: 'Analytics', active: false },
  { icon: Users, label: 'Users', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: CreditCard, label: 'Billing', active: false },
];

const metrics = [
  { label: 'Total Revenue', value: '$84,240', change: '+12.5%', up: true },
  { label: 'Active Users', value: '3,842', change: '+8.2%', up: true },
  { label: 'Conversion', value: '4.2%', change: '+2.1%', up: true },
  { label: 'Churn Rate', value: '1.8%', change: '-0.4%', up: false },
];

const chartBars = [45, 62, 38, 75, 52, 88, 64, 72, 56, 92, 68, 80];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const transactions = [
  { name: 'Sarah Johnson', amount: '$1,240.00', status: 'Completed', date: 'Mar 12, 2025' },
  { name: 'Michael Chen', amount: '$890.00', status: 'Completed', date: 'Mar 11, 2025' },
  { name: 'Emily Davis', amount: '$2,100.00', status: 'Pending', date: 'Mar 10, 2025' },
  { name: 'James Wilson', amount: '$450.00', status: 'Completed', date: 'Mar 9, 2025' },
  { name: 'Lisa Anderson', amount: '$1,750.00', status: 'Failed', date: 'Mar 8, 2025' },
];

const countries = [
  { name: 'United States', pct: '38%' },
  { name: 'United Kingdom', pct: '18%' },
  { name: 'Germany', pct: '14%' },
  { name: 'Canada', pct: '11%' },
  { name: 'Australia', pct: '8%' },
];

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-2xl">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-52 bg-gray-50 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">LaunchKit</span>
          </div>
          <nav className="flex-1 space-y-1">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  item.active
                    ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-800" />
            <div>
              <p className="text-xs font-medium text-gray-900 dark:text-white">John Doe</p>
              <p className="text-xs text-gray-500">Pro Plan</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                <Search className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Search...</span>
              </div>
              <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Bell className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-800" />
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
                <p className="text-xs text-gray-500 mb-1">{m.label}</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{m.value}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs ${m.up ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                  {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {m.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
            <div className="relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-gray-200 dark:border-gray-800" />
                ))}
              </div>
              <div className="relative flex items-end gap-1.5 sm:gap-2 h-36 sm:h-44">
                {chartBars.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-brand-600 to-brand-400 transition-all duration-300"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {months.map((m) => (
                  <span key={m} className="flex-1 text-center">{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          {!compact && (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Transactions */}
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {transactions.map((t, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">{t.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600 dark:text-gray-400 hidden sm:inline">{t.date}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          t.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400' :
                          t.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400' :
                          'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400'
                        }`}>{t.status}</span>
                        <span className="text-gray-900 dark:text-white font-medium w-24 text-right">{t.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Countries */}
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Top Countries</h3>
                <div className="space-y-3">
                  {countries.map((c, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{c.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-500 rounded-full" style={{ width: c.pct }} />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-8 text-right">{c.pct}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function DashboardSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-500 mb-2">Dashboard preview</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">A dashboard that impresses</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Show investors and users a realistic product UI before you build the backend.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <DashboardMockup />
        </AnimatedSection>
      </div>
    </section>
  );
}
