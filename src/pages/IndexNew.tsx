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

  // Test with minimal content first
  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center">E9 Global Test Page</h1>
        <p className="text-center mt-4">Build ID: {buildId || 'Loading...'}</p>
        <div className="mt-8 text-center">
          <button 
            onClick={() => console.log('Button clicked')}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
          >
            Test Button
          </button>
        </div>
      </div>
      
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