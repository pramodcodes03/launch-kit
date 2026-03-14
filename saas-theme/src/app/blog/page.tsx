import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const posts = [
  { title: 'How we built our SaaS in 14 days', category: 'Engineering', excerpt: 'A behind-the-scenes look at how our team used LaunchKit to go from zero to launch in just two weeks.', author: 'Sarah Kim', date: 'Mar 10, 2025', readTime: '8 min', color: 'bg-brand-500' },
  { title: 'The complete guide to SaaS pricing', category: 'Strategy', excerpt: 'Learn the pricing strategies that top SaaS companies use to maximize revenue and reduce churn.', author: 'James Chen', date: 'Mar 5, 2025', readTime: '12 min', color: 'bg-purple-500' },
  { title: 'Why dark mode matters for conversion', category: 'Design', excerpt: 'Studies show dark mode preferences are growing. Here is how it impacts your conversion rates.', author: 'Priya Shah', date: 'Feb 28, 2025', readTime: '6 min', color: 'bg-pink-500' },
  { title: 'How to write a landing page that converts', category: 'Marketing', excerpt: 'The proven framework for writing landing page copy that turns visitors into paying customers.', author: 'Tom Reed', date: 'Feb 20, 2025', readTime: '10 min', color: 'bg-emerald-500' },
  { title: 'Building a waitlist that actually works', category: 'Growth', excerpt: 'Most waitlists fail to convert. Here is a data-driven approach to building one that drives real signups.', author: 'Ana Lopez', date: 'Feb 15, 2025', readTime: '7 min', color: 'bg-amber-500' },
  { title: 'Design tokens every SaaS needs', category: 'Design', excerpt: 'The essential design tokens and variables that will keep your SaaS product consistent and maintainable.', author: 'Dev Bhatt', date: 'Feb 10, 2025', readTime: '9 min', color: 'bg-blue-500' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Insights, tutorials, and updates from the LaunchKit team.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.1}>
                <article className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  {/* Cover placeholder */}
                  <div className={`h-48 ${post.color} flex items-center justify-center`}>
                    <span className="text-white/50 text-6xl font-bold">{post.title.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
