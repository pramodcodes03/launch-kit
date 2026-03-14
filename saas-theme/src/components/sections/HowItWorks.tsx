'use client';

import { Download, Sliders, Rocket } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    num: 1,
    title: 'Choose your stack',
    icon: Download,
    desc: 'Pick Next.js, Webflow, or HTML. Install in under 5 minutes with our CLI or direct download.',
  },
  {
    num: 2,
    title: 'Customize everything',
    icon: Sliders,
    desc: 'Change colors, fonts, copy and layout using Tailwind config. No design skills needed.',
  },
  {
    num: 3,
    title: 'Launch and grow',
    icon: Rocket,
    desc: 'Deploy to Vercel with one click. Start collecting signups and customers from day one.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-500 mb-2">Simple process</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">Up and running in three steps</h2>
          </div>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px border-t-2 border-dashed border-gray-300 dark:border-gray-700" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.2}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-600/25">
                  <span className="text-xl font-bold text-white">{step.num}</span>
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                  <step.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
