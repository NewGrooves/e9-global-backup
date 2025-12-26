import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModernPhoneDisplay from '../components/ModernPhoneDisplay';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import { Button } from '../components/ui/button';
import {
  Shield,
  Palette,
  FileCheck,
  Wrench,
  Mail,
  Layers,
  ScanLine,
  LockKeyhole,
  Sparkles,
  Database,
  Network,
  BadgeCheck,
  Users,
  Coins
} from 'lucide-react';
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
      "/lovable-uploads/1df3ea4e-13ed-4337-b4cb-7c6c21c12d64.png",
      "/lovable-uploads/7298e1dc-6acc-4460-898f-56d1cb718f7a.png",
      "/lovable-uploads/621da557-fb9d-4ab7-b4ad-06453353ed2e.png"
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
    }, 4500);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Customer Journey Animation - slower for mobile performance
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCustomerJourneyStep((prev) => (prev + 1) % 2); // Toggle between QR scan and engagement
    }, 5000);

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
      title: "Regulatory-Friendly",
      description: "Designed to support compliance-driven industries"
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
      title: "We embed invisible latent image encoding into your artwork",
      image: "/lovable-uploads/8d2482c5-5633-4973-9331-d7783c9f2616.png"
    },
    {
      step: "3",
      title: "You print and produce as normal — no workflow disruption",
      image: "/lovable-uploads/ec04fe06-9a57-43b5-a244-5fc07c492798.png"
    }
  ];

  const systemLayers = [
    {
      icon: BadgeCheck,
      title: "1) Physical Authentication",
      description:
        "EncryptorSeal™ embeds invisible, copy-resistant authentication directly into packaging during standard printing."
    },
    {
      icon: LockKeyhole,
      title: "2) Secure GS1 QR Routing",
      description:
        "A patented, role-based GS1 QR layer securely routes each scan to the right experience — by user, context, and permission."
    },
    {
      icon: Sparkles,
      title: "3) Brand Experience Delivery",
      description:
        "BEEEP™ dynamically serves content, rewards, education, and opt-in experiences — no app download required."
    },
    {
      icon: Coins,
      title: "4) Collector Royalties (Optional)",
      description:
        "BEEEP Collector can enable blockchain-based provenance and programmable royalty logic for collectibles and secondary markets."
    },
    {
      icon: Database,
      title: "5) Brand-Owned Data Flywheel",
      description:
        "Every authenticated interaction generates permission-based, brand-owned first-party data that compounds value over time."
    }
  ];

  const gs1Roles = [
    { icon: Users, title: "Consumers", desc: "Verify authenticity and access BEEEP™ experiences." },
    { icon: Shield, title: "Retail & Channel", desc: "Confirm product legitimacy at shelf or point-of-sale." },
    { icon: FileCheck, title: "Compliance & Inspectors", desc: "Access secure, role-specific verification tools and reporting." },
    { icon: Network, title: "Collectors", desc: "Enable provenance, ownership history, and royalty logic (where applicable)." }
  ];

  const beeepContent = [
    "Product details, specs, and usage education",
    "Brand storytelling and video-rich experiences",
    "Rewards, loyalty, and membership access",
    "Community, events, and gated content",
    "Opt-in surveys and preference capture",
    "Promotions, offers, and calls-to-action",
    "Support workflows and product registration",
    "Compliance disclosures (when required)"
  ];

  const enhancementServices = [
    "Permission-based identity resolution and enrichment (where allowed)",
    "Audience segmentation and lifecycle modeling",
    "Campaign optimization (email, SMS, display, and beyond)",
    "Attribution and performance reporting",
    "Fraud/anomaly detection signals across geographies"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-10 sm:pb-20 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-text-investor text-center pb-4"
              style={{ lineHeight: '1.4' }}
            >
              How It Works
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 mb-4 max-w-5xl mx-auto leading-relaxed">
              A layered system that turns real-world packaging and branded surfaces into a secure gateway for authentication,
              role-based access, and permission-based first-party data.
            </p>

          </div>
        </div>
      </section>

      {/* AT-A-GLANCE SYSTEM LAYERS */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold gradient-text-investor mb-4 text-center" style={{ lineHeight: '1.2' }}>
              The E9 System at a Glance
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed text-center">
              Five integrated layers move value from the physical world to digital trust, engagement, and intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {systemLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base">{layer.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{layer.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LAYER 1: ENCRYPTORSEAL AUTH */}
      <section className="py-12 md:py-20 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 text-center gradient-text-investor" style={{ lineHeight: '1.2' }}>
              1) EncryptorSeal™ Authentication
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto leading-relaxed text-center mb-4">
              EncryptorSeal™ uses latent image encoding to embed invisible images into clear varnish during printing.
              These images are not visible to the naked eye, but can be detected and verified using a smartphone app or enterprise workflows.
            </p>

            <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto text-center font-medium">
              An evolution of U.S. Government-trusted technology — proven for 45 years and deployed at global scale.
            </p>
          </div>

          {/* How We Work With You */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-foreground text-center">
                How We Work With You
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-10"></div>
                  )}

                  <div className="text-center relative">
                    <div className="relative mb-8 group">
                      <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 bg-card/80 p-4 flex items-center justify-center">
                        <img src={step.image} alt={`Step ${step.step}`} className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110">
                        {step.step}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>

                    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <p className="text-foreground/90 text-lg leading-relaxed font-medium">{step.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="text-center mb-14">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-foreground text-center">
                Production-Friendly by Design
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {clientBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Icon className="text-white w-8 h-8" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 1: VERIFICATION UI (KEEP EXISTING, REFRAMED) */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
              Verification Outcomes
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-4xl mx-auto mb-6 sm:mb-8 text-center">
              Authenticity is confirmed at the unit level. Verification can occur offline, and syncs to the dashboard once connected.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Display */}
            <div className="flex justify-center lg:order-1">
              <ModernPhoneDisplay className="transition-all duration-500 ease-in-out">
                <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="text-center mt-4 mb-6">
                    <h3 className="text-white font-bold text-lg">Your Brand</h3>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-6">
                    <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10 w-full max-w-xs shadow-2xl">
                      <div className="text-center mb-6">
                        <div className="relative">
                          <img
                            src="/lovable-uploads/cda3507f-b76e-4be3-8c03-3e35ba64c192.png"
                            alt="Authentic product verified"
                            className={`w-28 h-28 object-contain rounded-2xl mx-auto mb-4 shadow-lg absolute inset-0 transition-opacity duration-700 ease-in-out ${
                              supplyChainStep === 0 ? 'opacity-100' : 'opacity-0'
                            }`}
                            loading="eager"
                            decoding="sync"
                          />
                          <img
                            src="/lovable-uploads/ec04fe06-9a57-43b5-a244-5fc07c492798.png"
                            alt="Counterfeit detected"
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
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="font-bold text-xl text-emerald-300 mb-1">Verified Authentic</p>
                              <p className="text-white/70 text-sm">Unit-level authenticity confirmed</p>
                              <div className="mt-3 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                                <p className="text-emerald-300 text-xs font-medium">Serial: #EPX-2024-001</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
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

            {/* Outcomes */}
            <div className="space-y-6 lg:order-2">
              <div
                className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-green-500 transition-all duration-700 ${
                  supplyChainStep === 0 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-500 ${
                      supplyChainStep === 0 ? 'scale-110 shadow-lg' : 'scale-100'
                    }`}
                  >
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Authentic</h4>
                </div>
                <p className="text-foreground/90">
                  Confirms unit-level authenticity and supports downstream access control, engagement, and analytics.
                </p>
              </div>

              <div
                className={`bg-card/80 rounded-2xl p-6 shadow-lg border-l-4 border-red-500 transition-all duration-700 ${
                  supplyChainStep === 1 ? 'scale-105 shadow-2xl bg-gradient-to-r from-card/90 to-muted/90' : 'scale-100'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-500 ${
                      supplyChainStep === 1 ? 'scale-110 shadow-lg' : 'scale-100'
                    }`}
                  >
                    ✕
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Counterfeit / Unverified</h4>
                </div>
                <p className="text-foreground/90">
                  Flags suspicious units immediately, enabling reporting workflows and risk intelligence.
                </p>
              </div>

              <div className="bg-card/80 rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-bold text-foreground mb-2">Logged & Traceable</h4>
                <p className="text-foreground/90">
                  Verification attempts can be logged with timestamps and geolocation signals to support monitoring and investigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 2: SECURE GS1 QR + ROLE-BASED ROUTING */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
              2) Secure GS1 QR + Role-Based Access
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed">
              A GS1 QR (or NFC) scan is more than a link. It is a secure, role-based gateway that can route different users to different
              outcomes — while preserving brand control and data governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50 lg:col-span-1">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <ScanLine className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What Role-Based Means</h3>
              <p className="text-foreground/90 leading-relaxed">
                The same physical code can securely unlock different experiences for different stakeholders — based on identity, permission,
                context, and policy. This enables consumer simplicity and enterprise-grade control.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
              {gs1Roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="bg-card/80 rounded-2xl p-6 shadow-lg border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">{r.title}</h4>
                        <p className="text-foreground/85 text-sm leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <LockKeyhole className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Secure by Design</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Authentication can occur first, and then authorized experiences are delivered. This supports enterprise visibility,
                  reduces counterfeit risk, and enables clean permission-based data capture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 3: BEEEP CONTENT DELIVERY (CAPABILITIES, NOT A PITCH) */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
              3) BEEEP™ Content & Experiences
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed">
              After authentication, BEEEP™ delivers dynamic, brand-controlled experiences designed to educate, reward, convert, and capture
              opt-in signals — with no app download required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Capability list */}
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">What You Can Deploy</h3>
              </div>

              <ul className="space-y-3 text-foreground/90">
                {beeepContent.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/50">
                <p className="text-sm text-foreground/85 leading-relaxed">
                  For the full BEEEP™ platform overview, features, and positioning, visit the BEEEP™ page.
                </p>
              </div>

              <div className="mt-6">
                <Link to="/beeep" className="inline-block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-3 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[48px]">
                    <span className="whitespace-nowrap text-center leading-tight">
                      Explore BEEEP<span className="trademark-small">™</span>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Existing phone experience animation */}
            <div className="flex justify-center">
              <ModernPhoneDisplay className="transition-all duration-500 ease-in-out">
                {customerJourneyStep === 0 ? (
                  <div className="w-full h-full relative">
                    <img
                      src="/lovable-uploads/7298e1dc-6acc-4460-898f-56d1cb718f7a.png"
                      alt="Secure scan interface"
                      className="w-full h-full object-contain rounded-[2.5rem]"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <img
                      src="/lovable-uploads/621da557-fb9d-4ab7-b4ad-06453353ed2e.png"
                      alt="BEEEP experience interface"
                      className="w-full h-full object-contain rounded-[2.5rem]"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                )}
              </ModernPhoneDisplay>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 4: COLLECTOR + BLOCKCHAIN ROYALTIES */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
              4) Collector Provenance & Royalties (Optional)
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed">
              For collectibles and secondary-market use cases, BEEEP Collector can add blockchain-based provenance and programmable royalty logic —
              anchored to authenticated products and verified ownership history.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-2">Provenance</h3>
              <p className="text-foreground/90 leading-relaxed">
                Establish verifiable product identity and ownership lineage for high-value goods, memorabilia, and limited releases.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-2">Royalties</h3>
              <p className="text-foreground/90 leading-relaxed">
                Enable programmable royalties for creators, licensors, or rights holders when assets trade in secondary markets.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-2">Compliance & Trust</h3>
              <p className="text-foreground/90 leading-relaxed">
                Use blockchain as an integrity layer for records — not as a consumer-facing “crypto” requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 5: DATA FLYWHEEL + DASHBOARD */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-6 text-center" style={{ lineHeight: '1.2' }}>
              5) Brand-Owned Data Flywheel
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto leading-relaxed text-center">
              Authentication creates trust. Trust enables opt-in engagement. Engagement generates permission-based first-party data.
              That data improves targeting, experiences, and measurable revenue outcomes — while remaining brand-owned.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <AnalyticsDashboard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-6 h-6 text-foreground" />
                <h3 className="text-2xl font-bold text-foreground">What Gets Captured</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Depending on use case and permission, the system can capture timestamp, location signals, verification outcome,
                engagement events, and opt-in identity attributes.
              </p>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Data capture and enhancement are designed to be permission-based and brand-governed.
                </p>
              </div>
            </div>

            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-6 h-6 text-foreground" />
                <h3 className="text-2xl font-bold text-foreground">Enhancement Services (Optional)</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed mb-4">
                For brands seeking greater performance and insight, permission-based enhancement services can expand what you learn
                and how effectively you activate.
              </p>

              <ul className="space-y-3 text-foreground/90">
                {enhancementServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equation CTA */}
          <div className="mt-12 bg-card/80 rounded-2xl p-8 shadow-lg border border-border/50 text-center">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 text-foreground">
              EncryptorSeal™ + Secure GS1 QR + BEEEP™ = Compounding Brand Intelligence
            </h3>
            <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-6">
              One integrated system: protect your products, control access, deploy experiences, and build a brand-owned data asset over time.
            </p>
            <Link to="/beeep" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-3 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[48px]">
                <span className="whitespace-nowrap text-center leading-tight">
                  Learn More About BEEEP<span className="trademark-small">™</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-4 sm:mb-6 text-center" style={{ lineHeight: '1.2' }}>
            Ready to See It in Action?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground/90 mb-6 sm:mb-8 max-w-6xl mx-auto text-center">
            Book a demo to explore EncryptorSeal™ authentication, secure GS1 QR role-based routing, and BEEEP™ experiences — and how they
            generate brand-owned, permission-based data.
          </p>
          <div className="flex justify-center">
            <Link to="/book-demo">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group">
                <Mail size={20} />
                <span>Book Demo</span>
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
