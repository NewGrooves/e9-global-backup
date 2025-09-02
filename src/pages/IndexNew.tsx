import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProductModules from '../components/ProductModules';
import ClosingCTA from '../components/ClosingCTA';
import DemoButton from '../components/DemoButton';
import DemoModal from '../components/DemoModal';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { ProductSchema, VideoSchema, BreadcrumbSchema } from '../components/StructuredData';

const IndexNew = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [buildId, setBuildId] = useState<string>('');

  useEffect(() => {
    fetch('/build-id.txt')
      .then(res => res.text())
      .then(setBuildId)
      .catch(() => setBuildId('Unknown'));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <SEOHead 
        title="E9 Global - Monetizing Authentic Customer Experiences."
        description="Transform product authentication and customer engagement with EncryptorSeal™ and BEEEP™. Secure, scalable solutions for brand protection and revenue growth."
        keywords={["product authentication", "brand protection", "customer engagement", "EncryptorSeal", "BEEEP", "security technology", "anti-counterfeiting", "revenue growth"]}
        ogImage="/og-image.png"
      />
      <ProductSchema product="encryptorseal" />
      <ProductSchema product="beeep" />
      <VideoSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.e9global.com/" }
      ]} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-8">
          {buildId && (
            <div className="absolute top-4 left-4 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Build: {buildId}
            </div>
          )}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <img 
              src="/lovable-uploads/e0e0f792-81d8-4d56-b7fb-0a257675f19d.png" 
              alt="E9 Global - Monetizing Authentic Customer Experiences"
              className="max-w-full h-auto"
            />
          </div>
        </section>

        <section id="about-section">
          <AboutSection />
        </section>
        <section>
          <StatsSection />
        </section>
        <section>
          <ProductModules />
        </section>
        <ClosingCTA />
        <Footer />
        <DemoButton onClick={() => setIsDemoOpen(true)} />
        <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      </main>
    </div>
  );
};

export default IndexNew;