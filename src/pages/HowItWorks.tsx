
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModernPhoneDisplay from '../components/ModernPhoneDisplay';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import { Button } from '../components/ui/button';
import { Shield, Palette, FileCheck, Wrench, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [supplyChainStep, setSupplyChainStep] = useState(0);
  const [customerJourneyStep, setCustomerJourneyStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload all images for smooth mobile performance
    const imageUrls = [
      "/lovable-uploads/cda3507f-b76e-4be3-8c03-3e35ba64c192.png",
      "/lovable-uploads/ec04fe06-9a57-43b5-a244-5fc07c492798.png",
      "/lovable-uploads/1df3ea4e-13ed-4337-b4cb-7c6c21c12d64.png"
    ];
    
    const preloadImages = async () => {
      const promises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });
      
      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setImagesLoaded(true); // Still proceed even if preload fails
      }
    };
    
    preloadImages();
  }, []);

  // Supply Chain Animation - slower for mobile performance
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setSupplyChainStep((prev) => (prev + 1) % 2); // Toggle between authentic and counterfeit
    }, 4500); // Increased from 3000ms to 4500ms
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Customer Journey Animation - slower for mobile performance  
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCustomerJourneyStep((prev) => (prev + 1) % 2); // Toggle between QR scan and engagement
    }, 5000); // Increased from 3500ms to 5000ms
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const clientBenefits = [
    {
      icon: Palette,
      title: "No Effect on Artwork",
      description: "Seamlessly integrates without altering your product design"
    },
    {
      icon: FileCheck,
      title: "No Effect on Regulatory",
      description: "Maintains compliance with all industry regulations"
    },
    {
      icon: Shield,
      title: "No Special Materials",
      description: "Works with standard packaging and printing materials"
    },
    {
      icon: Wrench,
      title: "No Special Equipment",
      description: "Uses existing printing and production infrastructure"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "You send us your product/packaging artwork",
      image: "/lovable-uploads/492b7c6a-7999-4013-8913-e28d855f232e.png"
    },
    {
      step: "2", 
      title: "We add our invisible latent image encoding to your artwork",
      image: "/lovable-uploads/8d2482c5-5633-4973-9331-d7783c9f2616.png"
    },
    {
      step: "3",
      title: "You print your artwork as normal",
      image: "/lovable-uploads/ec04fe06-9a57-43b5-a244-5fc07c492798.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pb-24 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-text-investor text-center pb-4" style={{ lineHeight: '1.4' }}>
              How It Works
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Discover how our dual-authentication technology transforms scanning product and all real world branded surfaces into 
              engaging, secure customer experiences.
            </p>
            
            {/* Two Shield Logos Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 relative">
              {/* EncryptorSeal Shield - Client */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/lovable-uploads/d705ae60-025f-4a1d-87f5-e5fb2da3daa4.png" 
                    alt="EncryptorSeal - Client Protection" 
                    className="h-80"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">Client</h3>
                <div className="text-center space-y-2">
                  <p className="text-lg sm:text-xl text-foreground/90">• Invisible Product Protection</p>
                  <p className="text-lg sm:text-xl text-foreground/90">• Chain of Custody Security</p>
                  <p className="text-lg sm:text-xl text-foreground/90 font-bold">• App Download or API Integration</p>
                </div>
              </div>
              
              {/* Plus Sign - Centered between images */}
              <div className="hidden lg:flex absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-xl lg:text-2xl shadow-md z-10">
                +
              </div>
              
              {/* Engage Blue Shield - Customer */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/lovable-uploads/Latina-Cosmetics-BEEEP.png" 
                    alt="Customer scanning product with smartphone" 
                    className="h-80"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">Customer</h3>
                <div className="text-center space-y-2">
                  <p className="text-lg sm:text-xl text-foreground/90">• Verify & Engage</p>
                  <p className="text-lg sm:text-xl text-foreground/90">• Real-Time Analytics</p>
                  <p className="text-lg sm:text-xl text-foreground/90 font-bold">• No App Needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Authentication */}
      <section className="py-12 md:py-20 px-3 sm:px-8 lg:px-6 bg-card/30 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 text-center gradient-text-investor" style={{ lineHeight: '1.2' }}>
              Client Authentication
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed text-center mb-4">
              EncryptorSeal™ uses latent image encoding to embed hidden images into clear varnish during printing. These images, invisible to the naked eye, are detected and verified using a smartphone app to confirm product authenticity.
            </p>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto text-center mb-16 font-medium">
              An evolution of U.S. Government-trusted technology — proven for 45 years, battle-tested on billions of products worldwide.
            </p>
          </div>

          {/* How We Work With You */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-foreground text-center">
                How We Work With You
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Connecting line for desktop */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-10"></div>
                  )}
                  
                  <div className="text-center relative">
                    {/* Image container with consistent sizing */}
                    <div className="relative mb-8 group">
                      <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 bg-card/80 p-4 flex items-center justify-center">
                        <img 
                          src={step.image} 
                          alt={`Step ${step.step}`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Floating step number */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        {step.step}
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <p className="text-foreground/90 text-lg leading-relaxed font-medium">
                        {step.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Benefits Grid */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-foreground text-center">
                Why Choose Our Solution
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {clientBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                
                return (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
                  >
                    {/* Icon container */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Icon className="text-white w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-bold text-foreground mb-3 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Verification */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
              Custom-Branded
            </h2>
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-foreground/90 mb-4 text-center">
              Smartphone App Verifies Authenticity of the Product
            </h3>
              <p className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-8 text-center">
                Products can be verified offline and as soon as the phone is connected, the information will go to the cloud dashboard.
              </p>
          </div>

          {/* iPhone and Steps Layout - Flipped */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Display - Left Side */}
            <div className="flex justify-center lg:order-1">
              <ModernPhoneDisplay className="transition-all duration-500 ease-in-out">
                <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="text-center mt-4 mb-6">
                    <h3 className="text-white font-bold text-lg">Your Brand</h3>
                  </div>
                  
                  {/* Verification Content */}
                  <div className="flex-1 flex items-center justify-center px-6">
                    <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10 w-full max-w-xs shadow-2xl">
                      <div className="text-center mb-6">
                        <div className="relative">
                          {/* Both images rendered but only one visible - prevents loading lag */}
                          <img 
                            src="/lovable-uploads/cda3507f-b76e-4be3-8c03-3e35ba64c192.png"
                            alt="Authentic vitamin supplement with QR code" 
                            className={`w-28 h-28 object-contain rounded-2xl mx-auto mb-4 shadow-lg absolute inset-0 transition-opacity duration-700 ease-in-out ${
                              supplyChainStep === 0 ? 'opacity-100' : 'opacity-0'
                            }`}
                            loading="eager"
                            decoding="sync"
                          />
                          <img 
                            src="/lovable-uploads/ec04fe06-9a57-43b5-a244-5fc07c492798.png"
                            alt="Counterfeit product without encoding" 
                            className={`w-28 h-28 object-contain rounded-2xl mx-auto mb-4 shadow-lg transition-opacity duration-700 ease-in-out ${
                              supplyChainStep === 1 ? 'opacity-100' : 'opacity-0'
                            }`}
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        {supplyChainStep === 0 ? (
                          <div className="space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-bold text-xl text-emerald-300 mb-1">Verified Authentic</p>
                              <p className="text-white/70 text-sm">Product authenticity confirmed</p>
                              <div className="mt-3 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                                <p className="text-emerald-300 text-xs font-medium">Serial: #EPX-2024-001</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-bold text-xl text-red-300 mb-1">Counterfeit Detected</p>
                              <p className="text-white/70 text-sm">Authentication failed</p>
                              <div className="mt-3 px-4 py-2 bg-red-500/20 rounded-lg border border-red-500/30">
                                <p className="text-red-300 text-xs font-medium">Report this product</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ModernPhoneDisplay>
            </div>

            {/* Verification Steps - Right Side */}
            <div className="space-y-6 lg:order-2">
              <div className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-green-500 transition-all duration-700 ${
                supplyChainStep === 0 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-500 ${
                    supplyChainStep === 0 ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Authentic Product</h4>
                </div>
                <p className="text-foreground/90">Product verified with embedded latent image encoding, confirming authenticity through secure verification.</p>
              </div>

              <div className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-red-500 transition-all duration-700 ${
                supplyChainStep === 1 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-500 ${
                    supplyChainStep === 1 ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>
                    ✕
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Counterfeit Detection</h4>
                </div>
                <p className="text-foreground/90">Products without proper encoding are immediately identified as counterfeit, protecting your brand integrity.</p>
              </div>

              <div className="bg-card/80 rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-bold text-foreground mb-2">Real-Time Monitoring</h4>
                <p className="text-foreground/90">All verification attempts are logged and tracked, providing valuable supply chain insights and security analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-20 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-6 text-center" style={{ lineHeight: '1.2' }}>
              Analytics Dashboard
            </h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-foreground/90 mb-4 text-center">
                Customizable Data Analytics
              </h3>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-center">
                Valuable authentication and customer interaction data is uploaded and stored with smart admin alerts and comprehensive analytics.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <AnalyticsDashboard />
          </div>
        </div>
      </section>

      {/* Customer Authentication Journey */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
  Customer Authentication/<br className="sm:hidden" />Engagement Journey
</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-8 text-center">
              Experience how customers interact with your protected products with NO app download required.
            </p>
          </div>

          {/* Customer Journey Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Steps */}
            <div className="space-y-8">
              <div className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 transition-all duration-700 ${
                customerJourneyStep === 0 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
              }`}>
                <div className="flex items-center mb-4">
                  <span className={`bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mr-4 transition-all duration-500 ${
                    customerJourneyStep === 0 ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>B2B</span>
                  <h3 className="text-xl font-bold text-foreground">Customer Scans GS1 QR Code or NFC Chip</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  User points their smartphone camera at the Secure GS1 QR Code or NFC chip, triggering the secondary authentication while the brand maintains visibility.
                </p>
              </div>

              <div className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-purple-500 transition-all duration-700 ${
                customerJourneyStep === 1 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
              }`}>
                <div className="flex items-center mb-4">
                  <span className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mr-4 transition-all duration-500 ${
                    customerJourneyStep === 1 ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>B2C</span>
                  <h3 className="text-xl font-bold text-foreground">BEEEP<span className="trademark-small">™</span> Experience Activated</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Customer receives rich content, product/services specs, rewards, and opt-in interactive brand experiences, through our <b>B</b>rand <b>E</b>xperience, <b>E</b>ngagement & <b>E</b>ncryption <b>P</b>latform while you gain data insights that we help you monetize.
                </p>
              </div>
            </div>

            {/* Modern iPhone Display */}
            <div className="flex justify-center">
              <ModernPhoneDisplay className="transition-all duration-500 ease-in-out">
                {customerJourneyStep === 0 ? (
                  <div className="w-full h-full relative">
                    <img 
                      src="/lovable-uploads/7298e1dc-6acc-4460-898f-56d1cb718f7a.png" 
                      alt="QR Code Scanning Interface"
                      className="w-full h-full object-contain rounded-[2.5rem]"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <img 
                      src="/lovable-uploads/621da557-fb9d-4ab7-b4ad-06453353ed2e.png" 
                      alt="Customer Engagement Interface"
                      className="w-full h-full object-contain rounded-[2.5rem]"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                )}
              </ModernPhoneDisplay>
            </div>
          </div>

          {/* Dual Authentication CTA */}
          <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50 text-center">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 text-foreground">
              EncryptorSeal™ + BEEEP™ = Data Maximization
            </h3>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-6">
              Discover how maximizing your data can drive significant revenue while safeguarding your brand's reputation.
            </p>
            <Link to="/beeep" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-3 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[48px]">
                <span className="whitespace-nowrap text-center leading-tight">Learn More About BEEEP<span className="trademark-small">™</span></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
            Ready to Grow Your Revenue<br/>
            While Protecting Your Brand?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground/90 mb-6 sm:mb-8 max-w-6xl mx-auto text-center">
            Connect with our team to discover how EncryptorSeal™ and BEEEP™<br/>
            can transform your brand/product security, customer engagement, and data monetization strategies.
          </p>
          <div className="flex justify-center">
            <Link to="/book-demo">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group">
                <Mail size={20} />
                <span>Contact Our Team</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
