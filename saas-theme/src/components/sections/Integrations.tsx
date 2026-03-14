'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';

const integrations = [
  { name: 'Stripe', color: 'bg-purple-500', connected: true },
  { name: 'Slack', color: 'bg-pink-500', connected: true },
  { name: 'HubSpot', color: 'bg-orange-500', connected: false },
  { name: 'Mailchimp', color: 'bg-yellow-500', connected: false },
  { name: 'Zapier', color: 'bg-amber-500', connected: true },
  { name: 'Google Analytics', color: 'bg-blue-500', connected: true },
  { name: 'Intercom', color: 'bg-blue-400', connected: false },
  { name: 'Segment', color: 'bg-green-500', connected: false },
  { name: 'Notion', color: 'bg-gray-700', connected: true },
  { name: 'Linear', color: 'bg-indigo-500', connected: false },
  { name: 'GitHub', color: 'bg-gray-800', connected: true },
  { name: 'Vercel', color: 'bg-gray-900', connected: true },
  { name: 'AWS', color: 'bg-orange-600', connected: false },
  { name: 'Figma', color: 'bg-pink-600', connected: false },
  { name: 'Loom', color: 'bg-purple-600', connected: false },
  { name: 'Calendly', color: 'bg-blue-600', connected: false },
];

export function Integrations() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Works with your favorite tools</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Connect LaunchKit with 50+ tools in one click</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.05}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                  <span className={`text-xs ${item.connected ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                    {item.connected ? 'Connected' : 'Connect'}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
