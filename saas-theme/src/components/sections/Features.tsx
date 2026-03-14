'use client';

import { Rocket, BarChart2, Moon, Smartphone, Palette, Puzzle, FileText, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';

const gridFeatures = [
  { icon: Moon, title: 'Dark mode support', desc: 'Flawless dark mode with every component. Toggle between themes with a single click.' },
  { icon: Smartphone, title: 'Fully responsive', desc: 'Pixel-perfect on every device from mobile to ultrawide desktop monitors.' },
  { icon: Palette, title: 'Multiple color schemes', desc: 'Change your brand color in one line. Tailwind config makes customization trivial.' },
  { icon: Puzzle, title: 'Integration ready', desc: 'Pre-built integration cards for 50+ popular tools. Connect in one click.' },
  { icon: FileText, title: 'Blog & changelog pages', desc: 'Built-in blog and changelog templates ready for your content.' },
  { icon: Clock, title: 'Waitlist / coming soon', desc: 'Launch a beautiful waitlist page with countdown timer and email capture.' },
];

function CodeSnippet() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-950 p-4 text-sm font-mono overflow-x-auto">
      <pre className="text-gray-300">
        <span className="text-purple-400">{'import'}</span>{' { '}
        <span className="text-blue-400">Hero</span>
        {' } '}
        <span className="text-purple-400">from</span>{' '}
        <span className="text-green-400">{`'@/components/sections/Hero'`}</span>
        {'\n\n'}
        <span className="text-purple-400">export default</span>{' '}
        <span className="text-blue-400">function</span>{' '}
        <span className="text-yellow-400">Home</span>
        {'() {\n  '}
        <span className="text-purple-400">return</span>
        {' (\n    '}
        <span className="text-gray-500">{'<'}</span>
        <span className="text-red-400">main</span>
        <span className="text-gray-500">{'>'}</span>
        {'\n      '}
        <span className="text-gray-500">{'<'}</span>
        <span className="text-blue-400">Hero</span>
        {' '}
        <span className="text-gray-500">{'/>'}</span>
        {'\n      '}
        <span className="text-gray-500">{'<'}</span>
        <span className="text-blue-400">Features</span>
        {' '}
        <span className="text-gray-500">{'/>'}</span>
        {'\n      '}
        <span className="text-gray-500">{'<'}</span>
        <span className="text-blue-400">Pricing</span>
        {' '}
        <span className="text-gray-500">{'/>'}</span>
        {'\n    '}
        <span className="text-gray-500">{'</'}</span>
        <span className="text-red-400">main</span>
        <span className="text-gray-500">{'>'}</span>
        {'\n  )\n}'}
      </pre>
    </div>
  );
}

function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85];
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
      <div className="flex items-end gap-2 h-32">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-500 mb-2">Features</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to launch</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stop rebuilding the same landing page components. LaunchKit includes every section, page, and integration your SaaS needs.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured blocks */}
        <div className="space-y-16 mb-16">
          {/* Feature 1 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 mb-4">
                  <Rocket className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Ship in days, not months</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Stop spending weeks building landing page components from scratch. LaunchKit gives you a complete, production-ready theme
                  that you can customize and deploy in hours. Every section is designed with conversion in mind, following proven SaaS patterns
                  that have been tested across thousands of launches.
                </p>
              </div>
              <CodeSnippet />
            </div>
          </AnimatedSection>

          {/* Feature 2 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <MiniChart />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 mb-4">
                  <BarChart2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Built-in analytics dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Impress investors and early users with a realistic dashboard mockup. Show your product vision before writing backend code.
                  The dashboard component is fully responsive and includes metric cards, charts, tables, and navigation — all built with pure
                  CSS and Tailwind.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Grid features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridFeatures.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <Card hover>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/50 mb-4">
                  <feature.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
