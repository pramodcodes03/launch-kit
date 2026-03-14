import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const entries = [
  {
    version: 'v2.4',
    date: 'March 8, 2025',
    title: 'Dashboard UI & Analytics',
    changes: [
      { type: 'New', items: ['Full dashboard mockup component', 'Analytics chart section', 'Revenue metrics cards'] },
      { type: 'Improved', items: ['Dark mode contrast ratios', 'Mobile navigation performance'] },
      { type: 'Fixed', items: ['Pricing toggle state on page refresh', 'FAQ accordion animation glitch'] },
    ],
  },
  {
    version: 'v2.3',
    date: 'February 20, 2025',
    title: 'Integrations & Waitlist',
    changes: [
      { type: 'New', items: ['Integrations grid section', 'Waitlist page with countdown timer', '16 integration cards'] },
      { type: 'Improved', items: ['Hero section gradient effect', 'Logo bar marquee smoothness'] },
      { type: 'Fixed', items: ['TypeScript strict mode errors', 'Hydration mismatch on theme toggle'] },
    ],
  },
  {
    version: 'v2.2',
    date: 'February 5, 2025',
    title: 'Blog & Changelog Templates',
    changes: [
      { type: 'New', items: ['Blog listing page', 'Changelog timeline page', 'Blog post card component'] },
      { type: 'Improved', items: ['Testimonial card hover effects', 'Section spacing consistency'] },
    ],
  },
  {
    version: 'v2.1',
    date: 'January 18, 2025',
    title: 'Pricing & FAQ Overhaul',
    changes: [
      { type: 'New', items: ['Feature comparison table', 'Annual/Monthly toggle with savings badge'] },
      { type: 'Improved', items: ['FAQ accordion accessibility', 'Pricing card responsive layout'] },
      { type: 'Fixed', items: ['Screen reader navigation order', 'Focus ring visibility in light mode'] },
    ],
  },
  {
    version: 'v2.0',
    date: 'January 2, 2025',
    title: 'Complete Redesign',
    changes: [
      { type: 'New', items: ['Complete theme rebuild with Next.js 14 App Router', 'Framer Motion scroll animations', 'Radix UI accessible components'] },
      { type: 'Improved', items: ['Performance: 95+ Lighthouse score', 'Tailwind CSS v4 migration'] },
    ],
  },
];

const typeColors: Record<string, string> = {
  New: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400',
  Improved: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400',
  Fixed: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400',
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold">Changelog</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                All the latest updates and improvements to LaunchKit.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

            <div className="space-y-12">
              {entries.map((entry, i) => (
                <AnimatedSection key={entry.version} delay={i * 0.1}>
                  <div className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white dark:ring-gray-950" />

                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300">
                        {entry.version}
                      </span>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{entry.title}</h2>

                    <div className="space-y-4">
                      {entry.changes.map((group) => (
                        <div key={group.type}>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${typeColors[group.type]}`}>
                            {group.type}
                          </span>
                          <ul className="space-y-1 ml-4">
                            {group.items.map((item) => (
                              <li key={item} className="text-sm text-gray-600 dark:text-gray-400 list-disc">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
