'use client';

import { useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Toggle } from '@/components/ui/Toggle';
import { Badge } from '@/components/ui/Badge';

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Perfect to get started',
    monthly: 0,
    annual: 0,
    cta: 'Get started free',
    ctaVariant: 'outline' as const,
    featured: false,
    features: ['1 project', 'Core pages only', 'Community support', 'Basic analytics'],
  },
  {
    name: 'Pro',
    subtitle: 'Best for growing startups',
    monthly: 49,
    annual: 39,
    cta: 'Start free trial',
    ctaVariant: 'primary' as const,
    featured: true,
    features: [
      'Unlimited projects', 'All pages included', 'Priority email support', 'Advanced analytics',
      'Dark mode', 'Custom domain', 'Changelog & blog pages', 'Dashboard UI',
    ],
  },
  {
    name: 'Enterprise',
    subtitle: 'For scaling teams',
    monthly: 149,
    annual: 149,
    cta: 'Contact sales',
    ctaVariant: 'outline' as const,
    featured: false,
    features: [
      'Everything in Pro', 'White-label rights', 'Dedicated support', 'Custom integrations',
      'SLA guarantee', 'Figma source files',
    ],
  },
];

const comparisonFeatures = [
  { name: 'Projects', starter: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Pages included', starter: 'Core only', pro: 'All', enterprise: 'All' },
  { name: 'Dark mode', starter: false, pro: true, enterprise: true },
  { name: 'Custom domain', starter: false, pro: true, enterprise: true },
  { name: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { name: 'Support', starter: 'Community', pro: 'Email', enterprise: 'Dedicated' },
  { name: 'Blog & Changelog', starter: false, pro: true, enterprise: true },
  { name: 'Dashboard UI', starter: false, pro: true, enterprise: true },
  { name: 'White-label', starter: false, pro: false, enterprise: true },
  { name: 'Figma source files', starter: false, pro: false, enterprise: true },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-500 mb-2">Simple pricing</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">One price, everything included</h2>
            <div className="mt-6 flex justify-center">
              <Toggle enabled={annual} onChange={setAnnual} labelLeft="Monthly" labelRight="Annual" badge="Save 20%" />
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.1}>
              <div className={`relative rounded-2xl p-8 h-full flex flex-col ${
                tier.featured
                  ? 'border-2 border-brand-500 bg-white dark:bg-gray-900 shadow-xl shadow-brand-500/10'
                  : 'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
              }`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="brand">Most popular</Badge>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{tier.subtitle}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${annual ? tier.annual : tier.monthly}
                  </span>
                  {tier.monthly > 0 && <span className="text-gray-500">/month</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-brand-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={tier.ctaVariant} className="w-full justify-center">{tier.cta}</Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Comparison table */}
        <AnimatedSection>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-950">Feature</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Starter</th>
                  <th className="text-center py-3 px-4 font-medium text-brand-600 dark:text-brand-400">Pro</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''}>
                    <td className="py-3 pr-4 text-gray-600 dark:text-gray-400 sticky left-0 bg-inherit">{f.name}</td>
                    {['starter', 'pro', 'enterprise'].map((tier) => {
                      const val = f[tier as keyof typeof f];
                      return (
                        <td key={tier} className="py-3 px-4 text-center">
                          {val === true ? (
                            <Check className="w-4 h-4 text-brand-500 mx-auto" />
                          ) : val === false ? (
                            <Minus className="w-4 h-4 text-gray-300 dark:text-gray-700 mx-auto" />
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
