'use client';

import { Star } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stats = [
  { label: 'Teams', value: '10,000+' },
  { label: 'Rating', value: '4.9★' },
  { label: 'Saved', value: '$2M+' },
];

const testimonials = [
  { quote: 'We launched our entire SaaS in 2 weeks using LaunchKit. Saved us $8,000 in design costs.', name: 'Sarah K.', title: 'CTO', company: 'Flowbase', color: 'bg-purple-500', rating: 5 },
  { quote: 'The dashboard mockup alone was worth the price. Investors thought we had a full product.', name: 'James M.', title: 'Founder', company: 'Relic AI', color: 'bg-blue-500', rating: 5 },
  { quote: 'Best theme purchase I\'ve made. Dark mode is flawless and the docs are actually helpful.', name: 'Priya S.', title: 'Developer', company: 'Stackwise', color: 'bg-emerald-500', rating: 5 },
  { quote: 'Went from idea to Product Hunt launch in 11 days. LaunchKit handled everything visual.', name: 'Tom R.', title: 'Indie Hacker', company: '', color: 'bg-amber-500', rating: 5 },
  { quote: 'The pricing table converts incredibly well. Our trial signups increased 34% after switching.', name: 'Ana L.', title: 'Growth', company: 'Cortex', color: 'bg-pink-500', rating: 5 },
  { quote: 'Every section is exactly what a SaaS needs. Changelog, blog, waitlist — it\'s all there.', name: 'Dev B.', title: 'Co-founder', company: 'Loopcast', color: 'bg-indigo-500', rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-500 mb-2">What customers say</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">Loved by 10,000+ builders</h2>
          </div>
        </AnimatedSection>

        {/* Stats strip */}
        <AnimatedSection>
          <div className="flex justify-center gap-12 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="break-inside-avoid p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-medium`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}{t.company ? `, ${t.company}` : ''}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
