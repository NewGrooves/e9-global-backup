import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import {
  Shield,
  BarChart3,
  Lock,
  Languages,
  QrCode,
  Sparkles,
  Database,
  Rocket,
  Building2,
  Gem,
  MapPin,
  ChevronDown,
  Users,
  RefreshCw,
} from "lucide-react";

type PlatformKey = "enterprise" | "collect" | "metro";

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
      } catch {
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
        title: "Enterprise Deployment",
        subtitle:
          "Embedded engagement infrastructure for brands and enterprise organizations.",
        icon: Building2,
        highlights: [
          "Integrates into existing mobile apps, web properties, and operational workflows",
          "Supports secure engagement and permission-based data capture inside brand-owned systems",
          "Designed for scalable analytics and trusted outcomes across customer and partner touchpoints",
        ],
      },
      {
        key: "collect" as const,
        title: "Collectibles Deployment",
        subtitle:
          "Persistent engagement and secure stakeholder delivery across asset lifecycles.",
        icon: Gem,
        highlights: [
          "Embeds into auction, registry, and provenance ecosystems",
          "Supports role-specific access for buyers, sellers, authenticators, and partners",
          "Assets become long-lived, updateable engagement touchpoints over time",
        ],
      },
      {
        key: "metro" as const,
        title: "Place-Based Deployment",
        subtitle:
          "Scan-initiated engagement grounded in real places and community ecosystems.",
        icon: MapPin,
        highlights: [
          "Integrates into city apps, venue platforms, signage, and destination experiences",
          "Role-specific delivery supports residents, visitors, staff, and partner workflows",
          "Content can be updated at any time without reprinting signage",
        ],
      },
    ],
    []
  );

  const platformDetail = useMemo(() => {
    const common = {
      sectionTitle: "How BEEEP™ works in practice",
      bulletsTitle: "What you get",
      bullets: [
        "A secure scan-to-engagement workflow that works on any smartphone",
        "Role-specific delivery so each stakeholder sees what is relevant to them",
        "Dynamic content control with updates at any time without reprinting",
      ],
    };

    const enterprise = {
      eyebrow: "Embedded engagement infrastructure",
      headline:
        "Trust-first engagement and permission-based intelligence inside systems brands already run.",
      body: [
        "BEEEP™ Enterprise integrates into existing apps, websites, packaging, and real-world touchpoints to connect physical engagement to digital experiences at scale.",
        "It supports role-specific content delivery for customers, partners, internal teams, and regulated stakeholders, while keeping governance and access controls aligned to existing systems.",
        "When users opt in, organizations can capture cohesive, consent-based behavioral intelligence and activate it for performance marketing, loyalty, support, and operational efficiency.",
      ],
      bullets: [
        "Integrates into existing systems without a new consumer app",
        "Permission-based intelligence where the organization remains the data controller",
        "Role-specific delivery and measurable engagement signals",
      ],
    };

    const collect = {
      eyebrow: "Embedded collectibles infrastructure",
      headline:
        "Persistent engagement and trusted stakeholder workflows across ownership cycles.",
      body: [
        "BEEEP™ Collect embeds into auction, registry, and provenance environments to maintain continuity across resale, inheritance, and long-term stewardship.",
        "A single printed code can securely serve different stakeholders with different content and workflows, based on permissions and context.",
        "Content can be updated at any time, allowing the experience and intelligence loop to evolve without changing the asset’s physical touchpoint.",
      ],
      bullets: [
        "Role-specific delivery for buyers, sellers, authenticators, and partners",
        "Dynamic content updates without reprinting",
        "Persistent engagement signals that compound across lifecycle events",
      ],
    };

    const metro = {
      eyebrow: "Embedded place-based infrastructure",
      headline:
        "Scan-initiated engagement grounded in real places, built for participation and continuity.",
      body: [
        "BEEEP™ Metro integrates into signage, venues, destinations, and community platforms to deliver multilingual guidance and secure experiences in real-world contexts.",
        "Role-specific access enables the same code to serve visitors, residents, staff, and partners differently, while keeping governance and content control clean.",
        "Because content can be updated at any time, cities and venues can keep engagement accurate across events, schedules, and evolving initiatives without reprinting.",
      ],
      bullets: [
        "Right message for the right stakeholder at the right moment",
        "Dynamic updates without redesign or reprint cycles",
        "Scan-to-engagement pathways that support participation and learning",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan initiates engagement",
        description:
          "A familiar scan connects real-world touchpoints to digital experiences, without requiring a new consumer app.",
        icon: QrCode,
      },
      {
        step: "Role-specific secure delivery",
        description:
          "The same code can deliver different secure content to different stakeholders based on identity, permissions, and context.",
        icon: Users,
      },
      {
        step: "Dynamic content control",
        description:
          "Update content at any time without reprinting packaging or signage, keeping experiences current and accurate.",
        icon: RefreshCw,
      },
      {
        step: "Permission-based intelligence",
        description:
          "When users opt in, cohesive consent-based signals can be owned, enriched, and activated for measurable outcomes.",
        icon: Database,
      },
    ],
    []
  );

  const trustCapabilities = useMemo(
    () => [
      {
        title: "Trust-first by design",
        description:
          "Built for secure participation, role-specific delivery, and measurable outcomes across real-world touchpoints.",
        icon: Shield,
      },
      {
        title: "Role-specific access",
        description:
          "Different stakeholders can receive different secure content from the same code, governed by permissions.",
        icon: Users,
      },
      {
        title: "Live content control",
        description:
          "Update content instantly without reprinting, enabling rapid changes across products, assets, and places.",
        icon: Sparkles,
      },
      {
        title: "Consent-based intelligence",
        description:
          "Capture cohesive, permission-based signals that connect physical and digital engagement at scale.",
        icon: BarChart3,
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
                        <strong>Embedded by design</strong> inside existing apps
                        and real-world touchpoints
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>Scan-initiated engagement</strong> that connects
                        physical interaction to digital experience
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Role-specific content delivery</strong> so each
                        stakeholder sees what is relevant to them
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic content control</strong> with updates at
                        any time, without reprinting or redeploying
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>
                        <strong>Permission-based data ownership</strong> where
                        the brand or operator remains the data controller
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
              Multiple deployment contexts. One infrastructure layer.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP™ adapts to brands, assets, and places while preserving
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

      {/* Trust / Security / Capabilities */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              Trust-first engagement by design
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP™ is built around verified touchpoints, secure participation,
              role-specific delivery, permission controls, and measurable
              outcomes across diverse real-world contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCapabilities.map((f, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20"
              >
                <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-lg text-foreground mb-2">
                  {f.title}
                </div>
                <div className="text-sm text-foreground/90 leading-relaxed">
                  {f.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default BeeepStagingPage;
