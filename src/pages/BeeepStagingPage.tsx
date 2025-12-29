import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import {
  QrCode,
  Users,
  RefreshCw,
  Database,
  Building2,
  Gem,
  ChevronDown,
} from "lucide-react";

type PlatformKey = "enterprise" | "collect" | "community";

const BeeepStagingPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformKey>("enterprise");

  useEffect(() => {
    window.scrollTo(0, 0);

    const imageUrls = [
      "/lovable-uploads/15924118-0f12-4905-8052-bf11eb18a294.png",
      "/lovable-uploads/a598f3f0-1391-48f2-83f0-230cc65f4b86.png",
      "/lovable-uploads/d8be894c-fe1d-4fac-8e1e-7afae82889dd.png",
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
        src: "/lovable-uploads/15924118-0f12-4905-8052-bf11eb18a294.png",
        alt: "Consumer scanning product with smartphone",
      },
      {
        src: "/lovable-uploads/a598f3f0-1391-48f2-83f0-230cc65f4b86.png",
        alt: "Healthcare professional scanning authenticated asset",
      },
      {
        src: "/lovable-uploads/d8be894c-fe1d-4fac-8e1e-7afae82889dd.png",
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

  const platformCards = useMemo(
    () => [
      {
        key: "enterprise" as const,
        title: "BEEEP™ Enterprise",
        subtitle:
          "Embedded engagement infrastructure for brands and enterprise organizations.",
        icon: Building2,
        highlights: [
          "Integrates into existing apps, web properties, and operational workflows",
          "Role-specific delivery for customers, partners, internal teams, and regulators",
          "Designed for secure participation and permission-based intelligence",
        ],
      },
      {
        key: "collect" as const,
        title: "BEEEP™ Collector",
        subtitle:
          "High-trust engagement and lifecycle continuity for authenticated assets.",
        icon: Gem,
        highlights: [
          "Supports provenance continuity across resale, inheritance, and stewardship",
          "Role-specific delivery for buyers, sellers, authenticators, and service partners",
          "Built for high-security asset workflows and premium stakeholder experiences",
        ],
      },
      {
        key: "community" as const,
        title: "BEEEP™ Metro",
        subtitle:
          "Participation-centric engagement for cities, venues, destinations, and communities.",
        icon: Users,
        highlights: [
          "Supports residents, visitors, staff, local organizations, and partners",
          "Dynamic content updates without reprinting signage or touchpoints",
          "Designed for participation loops, learning, and value exchange",
        ],
      },
    ],
    []
  );

  const platformDetail = useMemo(() => {
    const common = {
      sectionTitle: "How it works in practice",
      bulletsTitle: "What you get",
      bullets: [
        "Scan-initiated engagement tied to real-world touchpoints",
        "Role-specific delivery governed by permissions and context",
        "Dynamic updates without reprinting or redeploying",
      ],
    };

    const enterprise = {
      eyebrow: "Enterprise-grade embedded infrastructure",
      headline:
        "Secure engagement and permission-based intelligence inside systems brands already run.",
      body: [
        "BEEEP™ Enterprise integrates directly into existing apps and real-world touchpoints to connect physical engagement to digital experiences at scale.",
        "Role-specific delivery enables different stakeholders to access different secure content from the same scan based on identity, permissions, and context.",
        "EncryptorSeal™ can be deployed as part of Enterprise for covert anti-counterfeit authentication and trusted verification workflows where required.",
        "When users opt in, brands capture permission-based signals they own, enabling enrichment and monetization services that strengthen retention, performance, and valuation.",
      ],
      bullets: [
        "Embedded into existing brand-owned systems",
        "Role-specific delivery with dynamic content control",
        "Optional EncryptorSeal™ for covert verification and anti-counterfeit protection",
      ],
    };

    const collect = {
      eyebrow: "High-security collectibles infrastructure",
      headline:
        "Trusted asset engagement with advanced verification and lifecycle economics.",
      body: [
        "BEEEP™ Collector is designed for authenticated assets and high-trust markets where provenance continuity and stakeholder-specific workflows matter.",
        "EncryptorSeal™ can be deployed for covert anti-counterfeit authentication and trusted verification at the point of interaction.",
        "For high-security assets, Collect can support biometric scanning and advanced verification workflows, including 3D fingerprinting verification.",
        "Collect can also support patented automated royalty payments to enable programmable, auditable economics across resale and stewardship cycles.",
      ],
      bullets: [
        "Optional EncryptorSeal™ for covert verification and anti-counterfeit protection",
        "Biometric scanning for high-security assets; 3D fingerprinting verification workflows",
        "Patented automated royalty payments for lifecycle-aligned economics",
      ],
    };

    const community = {
      eyebrow: "Participation-centric community infrastructure",
      headline:
        "Scan-initiated engagement that supports participation, learning, and value exchange.",
      body: [
        "BEEEP™ Metro integrates into civic and cultural touchpoints to connect real-world participation to secure, role-specific digital experiences.",
        "The same touchpoint can deliver different content to residents, visitors, staff, and partners, based on permissions and context.",
        "Content can be updated at any time to support events, alerts, initiatives, education, and multilingual guidance without reprinting.",
        "Community deployments can include a participation-powered value exchange component that rewards constructive engagement and reinforces recurring participation loops.",
      ],
      bullets: [
        "Role-specific delivery across community stakeholders",
        "Dynamic content updates without reprinting",
        "Participation-powered value exchange component for recurring engagement",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...community };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan-initiated engagement",
        description:
          "A familiar scan connects physical touchpoints to digital experiences without requiring a new consumer app.",
        icon: QrCode,
      },
      {
        step: "Role-specific delivery",
        description:
          "Different stakeholders can receive different secure content based on permissions and context.",
        icon: Users,
      },
      {
        step: "Dynamic updates",
        description:
          "Update content at any time without reprinting packaging, signage, or physical touchpoints.",
        icon: RefreshCw,
      },
      {
        step: "Permission-based intelligence",
        description:
          "When users opt in, organizations can enrich and monetize cohesive consent-based behavioral intelligence.",
        icon: Database,
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
                  BEEEP™ is a patented trust-first engagement platform that
                  integrates directly into existing apps and real-world
                  touchpoints.
                </p>

                <p className="text-foreground/90">
                  It enables organizations to securely collect and monetize
                  cohesive, consent-based, behavioral audience intelligence that
                  connects physical and digital engagement at scale.
                </p>

                {/* Quick bullets with colors (UNIVERSAL ONLY) */}
                <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    At a glance
                  </div>

                  <ul className="space-y-3 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>
                        <strong>Scan-initiated engagement</strong> that connects
                        physical interaction to digital experiences
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>Patented, secure role-specific content delivery</strong>{" "}
                        so each stakeholder experiences what is relevant to them
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic content control</strong> with updates at
                        any time
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Permission-based data enrichment and monetization services</strong>
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
                        index === currentSlide
                          ? "bg-white shadow-lg"
                          : "bg-white/50"
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {platformCards.map((card) => {
              const isActive = selectedPlatform === card.key;
              const Icon = card.icon;

              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setSelectedPlatform(card.key)}
                  className={`text-left bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "border-purple-500/60 ring-2 ring-purple-500/20"
                      : "border-border/20 hover:border-border/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-11 h-11 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-playfair font-bold text-xl text-foreground">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-foreground/60 transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    {card.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{h}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-8 text-center text-base sm:text-lg text-foreground font-medium">
            Select a deployment context above to view the expanded details below.
          </p>
        </div>
      </section>

      {/* Selected Platform Detail */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto bg-card/70 border border-border/30 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                  {platformDetail.eyebrow}
                </div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-3">
                  {platformDetail.headline}
                </h3>
              </div>

              <div className="bg-background/60 border border-border/30 rounded-2xl p-4 sm:p-5 min-w-[260px]">
                <div className="text-sm font-semibold text-foreground mb-3">
                  {platformDetail.bulletsTitle}
                </div>
                <ul className="space-y-2">
                  {platformDetail.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 space-y-4 text-foreground/90 leading-relaxed">
              {platformDetail.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-sm uppercase tracking-wide text-foreground/70 mb-4">
                {platformDetail.sectionTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {howItWorksSteps.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-card/80 backdrop-blur-sm rounded-3xl p-5 shadow-lg border border-border/20"
                  >
                    <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-playfair font-bold text-base text-foreground mb-2">
                      {s.step}
                    </div>
                    <div className="text-sm text-foreground/90 leading-relaxed">
                      {s.description}
                    </div>
                  </div>
                ))}
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

export default BeeepStagingPage;
