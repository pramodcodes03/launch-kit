import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { LogoBar } from '@/components/sections/LogoBar';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { DashboardSection } from '@/components/sections/Dashboard';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Integrations } from '@/components/sections/Integrations';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <DashboardSection />
        <Testimonials />
        <Pricing />
        <Integrations />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
