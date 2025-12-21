import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import ModernPhoneDisplay from '../components/ModernPhoneDisplay';
import { Button } from '../components/ui/button';
import { Shield, Zap, Target, BarChart3, Lock, Languages, Smartphone, Users, TrendingUp, QrCode, Sparkles, Database, Rocket } from 'lucide-react';

const Beeep = () => {
  const [customerJourneyStep, setCustomerJourneyStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload images for smooth animation
    const imageUrls = [
      "/lovable-uploads/c0f17761-f6f3-4727-a412-3a1009314704.png",
      "/lovable-uploads/a283b3f0-a558-45b5-a332-5fb5f08fb53f.png",
      "/lovable-uploads/15924118-0f12-4905-8052-bf11eb18a294.png",
      "/lovable-uploads/a598f3f0-1391-48f2-83f0-230cc65f4b86.png",
      "/lovable-uploads/d8be894c-fe1d-4fac-8e1e-7afae82889dd.png"
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
        setImagesLoaded(true);
      }
    };
    
    preloadImages();
  }, []);

  // Customer Journey Animation  
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCustomerJourneyStep((prev) => (prev + 1) % 2); // Toggle between QR scan and engagement
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Hero image slideshow
  const heroImages = [
    {
      src: "/lovable-uploads/15924118-0f12-4905-8052-bf11eb18a294.png",
      alt: "Woman scanning product with smartphone"
    },
    {
      src: "/lovable-uploads/a598f3f0-1391-48f2-83f0-230cc65f4b86.png", 
      alt: "Medical professional scanning QR code"
    },
    {
      src: "/lovable-uploads/d8be894c-fe1d-4fac-8e1e-7afae82889dd.png",
      alt: "Man using NFC technology with smartphone at museum display with Roman bust"
    }
  ];

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const whyBeeeepFeatures = [
    {
      title: "Authentic Protection",
      description: "Stop counterfeits and gray marketing while building customer trust through verified product interactions.",
      icon: Shield,
      gradient: "from-cobalt-blue to-purple-600"
    },
    {
      title: "No-Code Simplicity", 
      description: "Launch engaging experiences in minutes with drag-and-drop tools that require zero technical expertise.",
      icon: Zap,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Smart Personalization",
      description: "Deliver the right message to the right customer at the perfect moment with segmented, micro-targeting.",
      icon: Target,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Actionable Insights",
      description: "Track real customer behavior and measure ROI with comprehensive analytics and reporting.",
      icon: BarChart3,
      gradient: "from-cobalt-blue to-indigo-600"
    },
    {
      title: "Enterprise Security",
      description: "GDPR-compliant platform with enterprise-grade security keeps your data and customers protected.",
      icon: Lock,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "AI-powered Translation",
      description: "Maximize global audience interaction by preserving the context, nuance, and intent of your original content and brand messaging.",
      icon: Languages,
      gradient: "from-purple-600 to-cobalt-blue"
    }
  ];

  const keyCapabilities = [
    {
      module: "Smart Tag Manager",
      description: "Assign secure QR or NFC identifiers to millions of items, set destinations, and update them anytime.",
      impact: "Ensure every item tells the right story—even after it leaves the factory."
    },
    {
      module: "Experience Builder",
      description: "Drag‑and‑drop blocks for video, AR, coupons, forms, and more.",
      impact: "Launch campaigns without developers."
    },
    {
      module: "Campaign Manager",
      description: "Bundle experiences, schedule activations, and A/B test copy or incentives.",
      impact: "Optimize engagement and conversion by audience segment."
    },
    {
      module: "Analytics Hub",
      description: "Live dashboards with exports to your Business Intelligence tools.",
      impact: "Close the loop from scan to sale."
    },
    {
      module: "Open API / SDK",
      description: "Seamless connection to your Customer Relationship Management, Customer Data Platform, or Proprietary Apps.",
      impact: "Keep your data flywheel spinning where you need it."
    }
  ];

  const howItWorksSteps = [
    {
      step: "Scan It - BEEEP IT!",
      description: "End Users scan products and real-world branded touchpoints with any smartphone- no app download.",
      icon: QrCode,
      gradient: "from-cobalt-blue to-purple-600"
    },
    {
      step: "Experience It!",
      description: "Dynamic, Context-Aware Content is presented that changes instantly by time, location, and audience type",
      icon: Sparkles,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      step: "Data Collection & AI Analytics",
      description: "Initial scans collect scan event data only: place, time, location, product, and device. Personal data is collected and analyzed only if users provides it and remains client-owned.",
      icon: Database,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      step: "Scale Smarter. Sell Faster.",
      description: "Micro-targeted outbound campaigns powered by BEEEP's unified engagement data drives high-precision acquisition of new customers.",
      icon: Rocket,
      gradient: "from-purple-600 to-cobalt-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pb-24 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="font-playfair font-bold mb-6 text-left" style={{ lineHeight: '1.5' }}>
                <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor block mb-1 sm:mb-3 py-1 sm:py-2">
                  BEEEP<span className="trademark-small">™</span>
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  <strong>Unified Audience Engagement Made Simple</strong>
                </p>
                <p>
                  • Connect every product plus all digital and real-world branded touchpoints, into one seamless, personalized brand experience for supply chain stakeholders and end users, whether a business or a consumer.
                </p>
                <p>
                  • Ensure that every interaction is personalized and contextually relevant in multiple languages.
                </p>
                <p>
                  • Understand each end user's behavior, preferences, and needs in real time.
                </p>
                <p>
                  • Leverage AI-powered insights.
                </p>
                <p>
                  • Drive revenue growth by maximizing our data intelligence services.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image Slideshow with Logo */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden">
                  {heroImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className={`w-full max-w-sm sm:max-w-md lg:max-w-lg transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  />
                  ))}
                </div>
                {/* Floating decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-3xl blur-lg transform rotate-12"></div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How BEEEP™ Works Section */}
      <section className="py-12 md:py-20 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-2" style={{ lineHeight: '1.3' }}>
              <span className="gradient-text-investor">BEEEP IT!<span className="trademark-small">™</span></span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-foreground/90 mb-6">
              How BEEEP<span className="trademark-small">™</span> Works
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {howItWorksSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-border/20 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 icon-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4">
                    {step.step}
                  </h3>
                  <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Authentication Journey */}
      <section className="py-8 sm:py-12 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
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
                  <h3 className="text-xl font-bold text-foreground">Smarter Supply Chain Engagement</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  BEEEP™ streamlines partner operations with automated reordering, instant access to technical docs, lifecycle tracking, and rapid recall tools—plus secure, role-specific content for every stakeholder.
                </p>
              </div>

              <div className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-purple-500 transition-all duration-700 ${
                customerJourneyStep === 1 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
              }`}>
                <div className="flex items-center mb-4">
                  <span className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mr-4 transition-all duration-500 ${
                    customerJourneyStep === 1 ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>B2C</span>
                  <h3 className="text-xl font-bold text-foreground">Engaging Every Customer Touchpoint</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  BEEEP™ turns every product and real-world touchpoint interaction into a personalized experience—delivering rich content, rewards, and interactive brand stories that deepen loyalty and drive repeat sales.
                </p>
              </div>
            </div>

            {/* Direct Image Display without Frame */}
            <div className="flex justify-center">
              <div className="w-64 h-[520px] sm:w-72 sm:h-[580px] relative transition-all duration-500 ease-in-out">
                {customerJourneyStep === 0 ? (
                  <img 
                    src="/lovable-uploads/c0f17761-f6f3-4727-a412-3a1009314704.png"
                    alt="Medical tools and surgical instruments mobile interface"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src="/lovable-uploads/a283b3f0-a558-45b5-a332-5fb5f08fb53f.png"
                    alt="Cosmetics and makeup products mobile interface"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Core Capabilities - Integrated with Journey */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Primary Features List */}
              <div className="space-y-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center lg:text-left">
                  Protection & Analytics
                </h3>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Authentic Protection</h4>
                    <p className="text-foreground/90 leading-relaxed">Stop counterfeits and gray marketing while building customer trust through verified product interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Actionable Insights</h4>
                    <p className="text-foreground/90 leading-relaxed">Track real customer behavior and measure ROI with comprehensive analytics and reporting.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-tertiary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Smart Targeting</h4>
                    <p className="text-foreground/90 leading-relaxed">Deliver personalized content and experiences at the perfect moment with intelligent segmentation.</p>
                  </div>
                </div>
              </div>
              
              {/* Secondary Features List */}
              <div className="space-y-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center lg:text-left">
                  Platform & Security
                </h3>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">No-Code Simplicity</h4>
                    <p className="text-foreground/90 leading-relaxed">Launch engaging experiences in minutes with intuitive drag-and-drop tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-quaternary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Enterprise Security</h4>
                    <p className="text-foreground/90 leading-relaxed">GDPR-compliant platform with enterprise-grade security keeps your data protected.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Languages className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Global Reach</h4>
                    <p className="text-foreground/90 leading-relaxed">AI-powered translation that preserves your brand voice and messaging context.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Combined */}
      <section className="py-20 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]"></div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-text-investor" style={{ lineHeight: '1.3' }}>
              The Problem & Our Solution
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              See how we're transforming the challenges brands face into opportunities&nbsp;for&nbsp;growth.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problems */}
              <div className="space-y-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center lg:text-left">
                  Why Intelligent Packaging Matters
                </h3>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cobalt-blue to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Packaging Is Passive and Unconnected</h4>
                    <p className="text-foreground/90 leading-relaxed">Most packaging today can't engage or inform customers, missing a critical chance to build loyalty.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Loyalty Is Fragile and Transactional</h4>
                    <p className="text-foreground/90 leading-relaxed">Without direct engagement, brands struggle to create lasting customer relationships or recurring revenue.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Brands Lack Visibility</h4>
                    <p className="text-foreground/90 leading-relaxed">After products ship, most brands lose visibility into usage, location, and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cobalt-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Value Chains & Marketing Channels Are Disconnected</h4>
                    <p className="text-foreground/90 leading-relaxed">Distributors, reps, and customers often work in silos, causing delays and missed opportunities.</p>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center lg:text-left">
                  How BEEEP<span className="trademark-small">™</span> Solves This Crisis
                </h3>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cobalt-blue to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Increases Supply Chain & Customer Trust</h4>
                    <p className="text-foreground/90 leading-relaxed">BEEEP™ transforms packaging into digital touchpoints that deliver instant information, rewards, and brand trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Enables Real-time Insights</h4>
                    <p className="text-foreground/90 leading-relaxed">Every scan generates real-time data, giving brands a clear view of customer behavior and product movement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">From Static Packaging to Smart Experiences</h4>
                    <p className="text-foreground/90 leading-relaxed">BEEEP™ turns packaging into a channel for loyalty, content, and reorders—driving revenue and retention.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cobalt-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-foreground mb-2">Seamlessly Connects Brands, Distributors, and Customers</h4>
                    <p className="text-foreground/90 leading-relaxed">BEEEP™ builds bridges across disconnected channels, enabling real-time collaboration and shared success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Unified Physical & Digital Engagement Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-6">
              Secure Unified Physical & Digital Engagement
            </h2>
            <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              E9 Global isn't just protecting the supply chain — it's redefining how brands and 
              consumers connect in the intelligent economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pharmacy/Retail QR Scan */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/ef0976f5-fdc2-4dc6-aa32-53918c2ecb03.png" 
                  alt="Customer scanning QR code on toothbrush product display in pharmacy"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* In-Vehicle Pharmacy Display */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/a77382a8-b91f-4372-aec2-846183914390.png" 
                  alt="Person scanning QR code on in-vehicle pharmacy display screen"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Duty Free Shopping */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/17af36ac-d105-4ce5-8545-85d8029bb135.png" 
                  alt="Customer scanning product in duty-free store with smartphone"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Beeep;
// no-op commit to force Netlify rebuild
