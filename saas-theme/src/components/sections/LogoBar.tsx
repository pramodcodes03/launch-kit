import { AnimatedSection } from '@/components/ui/AnimatedSection';

const logos = [
  'Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Loom',
  'Intercom', 'Slack', 'HubSpot', 'Shopify', 'GitHub', 'Atlassian',
];

export function LogoBar() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-500 mb-8">
            Trusted by teams at
          </p>
        </AnimatedSection>

        {/* Marquee */}
        <div className="relative overflow-hidden mask-fade">
          <div className="flex animate-marquee gap-12 w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-xl font-semibold text-gray-400 dark:text-gray-600 whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
