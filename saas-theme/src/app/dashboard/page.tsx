import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DashboardMockup } from '@/components/sections/Dashboard';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold">Dashboard Preview</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A realistic dashboard mockup included with every LaunchKit theme.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </main>
      <Footer />
    </>
  );
}
