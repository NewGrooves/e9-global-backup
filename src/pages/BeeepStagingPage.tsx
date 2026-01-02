import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { Building2, Gem, Users, ArrowRight } from "lucide-react";

const BeeepStagingPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const imageUrls = [
      "/lovable-uploads/BEEEP-page-cosmetics.jpg",
      "/lovable-uploads/BEEEP page Rolex Guy Beeeping.png",
      "/lovable-uploads/BEEEP page Woman Scanning at Concert.png",
    ];

    const preloadImages = async () => {
      const promises = imageUrls.map(
        (url) =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = url;
          })
      );

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  const heroImages = useMemo(
    () => [
      {
        src: "/lovable-uploads/BEEEP-page-cosmetics.jpg",
        alt: "Consumer scanning product with smartphone",
      },
      {
        src: "/lovable-uploads/BEEEP page Rolex Guy Beeeping.png",
        alt: "Healthcare professional scanning authenticated asset",
      },
      {
        src: "/lovable-uploads/BEEEP page Woman Scanning at Concert.png",
        alt: "Visitor engaging with authenticated cultural content",
      },
    ],
    []
  );

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesLoaded, heroImages.length]);

  const deploymentStackCards = useMemo(
    () => [
      {
        title: "BEEEP™ Enterprise",
        subtitle:
          "Embedded engagement infrastructure for brands and enterprise organizations.",
        icon: Building2,
        highlights: [
          "Integrates into existing apps, web properties, and operational workflows",
          "Role-specific delivery for customers, partners, internal teams, and regulators",
          "Designed for secure participation and permission-based intelligence",
        ],
        notes: [
          "BEEEP™ Enterprise integrates directly into existing apps and real-world touchpoints to connect physical interaction with digital engagement at scale.",
          "Role-specific delivery ensures that customers, partners, internal teams, and regulators can access different secure experiences from the same scan—based on identity, permissions, and context.",
          "When users opt in, organizations capture permission-based signals they own—enabling data enrichment and monetization services that strengthen retention, operational performance, and long-term enterprise value.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "EncryptorSeal™: Covert Smartphone-Verified Anti-Counterfeit Protection",
        ],
      },
      {
        title: "BEEEP™ Collect",
        subtitle:
          "High-trust engagement and lifecycle continuity for authenticated assets.",
        icon: Gem,
        highlights: [
          "Supports provenance continuity across resale, inheritance, and stewardship",
          "Role-specific delivery for buyers, sellers, authenticators, and service partners",
          "Built for high-security asset workflows and premium stakeholder experiences",
        ],
        notes: [
          "BEEEP™ Collect is designed for authenticated assets and high-trust markets where provenance continuity and stakeholder-specific workflows matter across long ownership horizons.",
          "For high-security assets, BEEEP™ Collect supports patented biometric authentication and patented AI-based visual and surface analysis, enabling non-invasive verification using inherent material characteristics—without introducing physical tags, markers, or codes.",
          "BEEEP™ Collect also supports patented automated royalty payments, enabling programmable, auditable economics that align creators, collectors, and marketplaces across resale and stewardship cycles.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "EncryptorSeal™: Covert Smartphone-Verified Anti-Counterfeit Protection",
          "Mark-Free Surface Fingerprint Authentication",
          "High-Assurance Biometric Identity & Authorization",
          "Immutable Ownership, Provenance, and Resale Integrity",
        ],
      },
      {
        title: "BEEEP™ Metro",
        subtitle:
          "Participation-centric engagement for cities, venues, destinations, and communities.",
        icon: Users,
        highlights: [
          "Supports residents, visitors, staff, local organizations, and partners",
          "Dynamic content updates without reprinting signage or physical touchpoints",
          "Designed for participation loops, learning, and value exchange",
        ],
        notes: [
          "BEEEP™ Metro powers community-branded apps that serve as trusted gateways for participation, information, and engagement - designed to be adopted locally and used consistently.",
          "BEEEP™ Metro integrates into civic, cultural, and place-based touchpoints to connect real-world participation with secure, role-specific digital experiences.",
          "Content can be updated at any time to support events, alerts, initiatives, education, and multilingual guidance without reprinting signage or materials.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "High-Assurance Biometric Identity & Authorization",
        ],
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-10 sm:pb-16 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="text-left">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="/lovable-uploads/BEEEPWhiteLogo.png"
                  alt="BEEEP™"
                  className="w-56 sm:w-64 md:w-72 object-contain"
                  loading="eager"
                />
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                  BEEEP™ is a patented, trust-first engagement platform that
                  integrates directly into existing apps and real-world
                  touchpoints.
                </p>

                <p className="text-foreground/90">
                  It enables organizations to securely collect and monetize cohesive,
                  consent-based behavioral audience intelligence, connecting real-world
                  interaction and digital engagement at scale.
                </p>

                {/* AT A GLANCE */}
                <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    At a glance
                  </div>

                  <ul className="space-y-3 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>
                        <strong>Scan-initiated engagement</strong> that connects real-world
                        interaction to digital experiences
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>Patented secure scan architecture</strong> that verifies
                        authenticity at the physical code itself and can support offline
                        verification when required
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Governed, role-specific access</strong> so each participant
                        sees only what is relevant to them
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic content control</strong> with the ability to update
                        experiences at any time
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>
                        <strong>
                          Permission-based data enrichment and monetization services
                        </strong>
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>
                        <strong>High-assurance identity and authentication options</strong>{" "}
                        including advanced biometric authentication when required
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                      <span>
                        <strong>Trust at the point of interaction</strong> so confidence is
                        established before downstream actions occur
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden">
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`w-full max-w-sm sm:max-w-md lg:max-w-lg transition-opacity duration-1000 ${
                        index === currentSlide
                          ? "opacity-100"
                          : "opacity-0 absolute inset-0"
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-3xl blur-lg transform rotate-12" />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white shadow-lg" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Contexts */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
              Multiple contexts. One infrastructure layer.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP™ adapts to brands, assets, and communities while preserving
              governance, permissions, and role-specific delivery.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {deploymentStackCards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-border/20"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-foreground/80 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: How it works in practice */}
                    <div className="bg-background/40 border border-border/20 rounded-2xl p-5">
                      <div className="text-sm font-semibold text-foreground mb-3">
                        How it works in practice
                      </div>
                      <ul className="space-y-2 text-foreground/90">
                        {card.notes.map((n, nIdx) => (
                          <li key={nIdx} className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base leading-relaxed">
                              {n}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: stacked windows */}
                    <div className="space-y-4">
                      {/* What you get */}
                      <div className="bg-background/60 border border-border/30 rounded-2xl p-5">
                        <div className="text-sm font-semibold text-foreground mb-3">
                          What you get
                        </div>
                        <ul className="space-y-2">
                          {card.highlights.map((h, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-3 text-foreground/90"
                            >
                              <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                              <span className="text-sm">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Security tech */}
                      <div className="bg-background/60 border border-border/30 rounded-2xl p-5">
                        <div className="text-sm font-semibold text-foreground mb-3">
                          Security tech
                        </div>
                        <ul className="space-y-2">
                          {card.securityTech.map((t, tIdx) => (
                            <li
                              key={tIdx}
                              className="flex items-start gap-3 text-foreground/90"
                            >
                              <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                              <span className="text-sm">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {idx < deploymentStackCards.length - 1 && (
                    <div className="mt-7 flex items-center gap-3 text-foreground/60">
                      <div className="h-px flex-1 bg-border/40" />
                      <ArrowRight className="w-4 h-4" />
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default BeeepStagingPage;
