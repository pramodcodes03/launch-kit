'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 px-8 py-16 sm:px-16 sm:py-24 text-center">
          {/* Floating dots */}
          <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-white/20 animate-float" />
          <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-white/15 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-12 left-1/4 w-2 h-2 rounded-full bg-white/20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 rounded-full bg-white/10 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 left-8 w-1.5 h-1.5 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1.5s' }} />

          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Ready to launch your SaaS?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Join 10,000+ founders who shipped faster with LaunchKit. Start free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Get started free →
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                View live demo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
