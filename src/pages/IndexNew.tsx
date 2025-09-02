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
        {/* Step 2: Add Footer - Test basic layout */}
        <div className="min-h-[60vh] flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-center mb-4">E9 Global Test Page</h1>
          <p className="text-center mt-4 mb-8">Build ID: {buildId || 'Loading...'}</p>
          
          <div className="text-center space-y-4">
            <button 
              onClick={() => console.log('Button clicked')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
            >
              Test Button
            </button>
            <div className="text-sm text-muted-foreground">
              Step 2: Adding Footer component...
            </div>
          </div>
        </div>
        
        {/* Step 3: Add StatsSection - Test gradients and icons */}
        <StatsSection />
        
        {/* Step 4: Add ProductModules - Test image assets */}
        <ProductModules />
        
        {/* Step 5: Add AboutSection - Test iframe (highest risk) */}
        <AboutSection />
        
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