
import { useState, useEffect } from 'react';
import Header from '../components/Header';
// Hero section removed - using placeholder
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProductModules from '../components/ProductModules';
import ClosingCTA from '../components/ClosingCTA';
import DemoButton from '../components/DemoButton';
import DemoModal from '../components/DemoModal';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { ProductSchema, VideoSchema, BreadcrumbSchema } from '../components/StructuredData';

const Index = () => {
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
        <section>
          <div className="bg-background text-foreground min-h-[400px] flex justify-center items-center relative">
            {buildId && (
              <div className="absolute top-4 left-4 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                Build: {buildId}
              </div>
            )}
            <img 
              src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png" 
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

export default Index;
