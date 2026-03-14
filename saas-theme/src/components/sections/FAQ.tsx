'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const faqs = [
  {
    q: 'Can I use this theme for client projects?',
    a: 'Yes, the Regular License covers one end product. For multiple client projects, the Extended License is recommended.',
  },
  {
    q: 'Does it include the Figma source files?',
    a: 'Figma files are included in the Enterprise plan. Pro buyers can purchase them separately.',
  },
  {
    q: 'Is this compatible with Next.js 14 App Router?',
    a: 'Yes, built specifically for Next.js 14 with App Router and React Server Components.',
  },
  {
    q: 'Do I need design skills to customize it?',
    a: 'No. Everything is controlled via Tailwind config and simple CSS variables. Change your brand color in one line.',
  },
  {
    q: 'How often is the theme updated?',
    a: 'We ship updates monthly. All buyers get free lifetime updates.',
  },
  {
    q: 'Can I use a custom domain?',
    a: 'Yes, Pro and Enterprise plans support full custom domain deployment.',
  },
  {
    q: 'Is there a free trial?',
    a: 'The Starter plan is free forever. Pro includes a 14-day free trial, no credit card required.',
  },
  {
    q: 'What kind of support is included?',
    a: 'Starter gets community forum access. Pro gets priority email support. Enterprise gets dedicated Slack support.',
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Frequently asked questions</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Everything you need to know about LaunchKit</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-up data-[state=closed]:animate-fade-in">
                  <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </AnimatedSection>
      </div>
    </section>
  );
}
