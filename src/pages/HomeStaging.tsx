import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import ProductModules from '../components/ProductModules';
import AboutSection from '../components/AboutSection';
import ContactCTA from '../components/ContactCTA';
import SEOHead from '../components/SEOHead';
import { ProductSchema, VideoSchema, BreadcrumbSchema } from '../components/StructuredData';

const IndexNew = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [buildId, setBuildId] = useState<string>('');

  useEffect(() => {
    console.log('IndexNew component mounted');
    try {
      fetch('/build-id.txt')
        .then(res => res.text())
        .then(id => {
          console.log('Build ID loaded:', id);
          setBuildId(id);
        })
        .catch(err => {
          console.log('Build ID fetch error:', err);
          setBuildId('Unknown');
        });
    } catch (err) {
      console.error('Error in build ID fetch:', err);
      setBuildId('Error');
    }
  }, []);

  console.log('IndexNew rendering, buildId:', buildId);

  // Incremental component restoration
  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />
      
      {/* Step 1: Basic content - WORKING */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png" 
              alt="E9 Global - Monetizing Authentic Customer Experiences" 
              className="mx-auto max-w-full h-auto transform scale-[1.5]"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </section>
        
        {/* Step 3: Add AboutSection - Test iframe (highest risk) */}
        <AboutSection />
        
        {/* Step 4: Add ProductModules - Test image assets */}
        <ProductModules />
        
        {/* Step 5: Add StatsSection - Test gradients and icons */}
        <StatsSection />
        
        {/* Step 6: Add ContactCTA */}
        <ContactCTA />
      </main>
      
      {/* Footer - should be safest component */}
      <Footer />
      
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
    </div>
  );
};

export default IndexNew;
