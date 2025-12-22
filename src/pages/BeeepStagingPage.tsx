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
} from "lucide-react";

type PlatformKey = "enterprise" | "collect" | "metro";

const BeeepStagingPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>("enterprise");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload images for smooth animation
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
        alt: "Woman scanning product with smartphone",
      },
      {
        src: "/lovable-uploads/a598f3f0-1391-48f2-83f0-230cc65f4b86.png",
        alt: "Medical professional scanning QR code",
      },
      {
        src: "/lovable-uploads/d8be894c-fe1d-4fac-8e1e-7afae82889dd.png",
        alt: "Man using smartphone at museum display",
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
        title: "BEEEP Enterprise™",
        subtitle: "For brands, manufacturers, and enterprise organizations.",
        icon: Building2,
        highlights: [
          "Turns products, packaging, and OOH/digital displays into secure engagement channels",
          "Permission-based participation to unlock brand-owned first-party data",
          "Trusted engagement tied to authenticated touchpoints (not anonymous traffic)",
        ],
      },
      {
        key: "collect" as const,
        title: "BEEEP Collect™",
        subtitle: "For auction houses and the global collectibles ecosystem.",
        icon: Gem,
        highlights: [
          "Transforms authenticated assets + records into persistent engagement channels",
          "Supports provenance continuity across resale, inheritance, and stewardship cycles",
          "Item-linked storytelling + education that evolves over time",
        ],
      },
      {
        key: "metro" as const,
        title: "BEEEP Metro™",
        subtitle: "For cities, destinations, venues, and community ecosystems.",
        icon: MapPin,
        highlights: [
          "Turns civic and cultural touchpoints into multilingual pathways for engagement",
          "Built for persistent participation, not one-time interactions",
          "Enables guidance, learning, and optional incentives tied to real places",
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
        "A secure scan-to-engagement workflow that works on any smartphone",
        "Authenticated touchpoints to support trusted, measurable outcomes",
        "Multilingual delivery that preserves context and intent",
      ],
    };

    const enterprise = {
      eyebrow: "Commercial engagement layer",
      headline: "Secure, data-rich engagement for brands operating at scale.",
      body: [
        "BEEEP Enterprise™ transforms products, packaging, and real-world touchpoints—including digital displays and out-of-home media—into secure channels for direct interaction.",
        "Interactions can begin with a simple scan, while deeper engagement is enabled through secure, permission-based participation. When users opt in, enterprises gain brand-owned first-party behavioral data grounded in real-world intent.",
        "Because interactions are tied to authenticated touchpoints, Enterprise supports trusted engagement, measurable outcomes, and secure transactions where required.",
      ],
      bullets: [
        "Brand-owned first-party relationship signals (permission-based)",
        "Scan analytics tied to real-world context (time/place/touchpoint)",
        "Trusted pathways for loyalty, education, support, and transactions",
      ],
    };

    const collect = {
      eyebrow: "Collector relationship layer",
      headline: "Persistent engagement across ownership, resale, and legacy cycles.",
      body: [
        "BEEEP Collect™ transforms authenticated collectible assets and associated records into secure engagement channels—supporting trusted interactions across ownership, resale, and inheritance cycles.",
        "Collect enables item-linked storytelling, education, and stewardship experiences that can evolve over time, while strengthening provenance continuity and long-term collector loyalty.",
        "It also supports permission-based relationship signals tied to verified interactions—helping market participants stay connected well beyond the moment of sale.",
      ],
      bullets: [
        "Provenance continuity + engagement that persists beyond a sale",
        "Item-linked storytelling and education that evolves over time",
        "Verified interactions supporting long-term collector loyalty",
      ],
    };

    const metro = {
      eyebrow: "Place-based engagement layer",
      headline: "Multilingual engagement grounded in real places and real moments.",
      body: [
        "BEEEP Metro™ transforms civic and cultural touchpoints—signage, venues, corridors, events, and shared spaces—into trusted multilingual pathways for community engagement and learning.",
        "Metro is built for persistent participation, not one-time interactions. It supports inclusive communication across residents, visitors, local organizations, and on-the-ground stakeholders.",
        "Because engagement is grounded in real places, Metro enables continuity, evolving guidance, and shared understanding—without abstracting the city into a platform or system.",
      ],
      bullets: [
        "Right message, right moment, right language—grounded in place",
        "Persistent participation loops for education and community involvement",
        "Continuity across stakeholders without forcing a “city as a system” frame",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan It — BEEEP IT!™",
        description:
          "Users scan products or real-world touchpoints with any smartphone—no app download required.",
        icon: QrCode,
      },
      {
        step: "Experience It",
        description:
          "Dynamic content changes instantly by time, location, and audience context—while staying on-brand.",
        icon: Sparkles,
      },
      {
        step: "Permission-Based Data",
        description:
          "Scan events are captured by default. Personal data is collected only when users opt in—and remains client-owned.",
        icon: Database,
      },
      {
        step: "Scale Outcomes",
        description:
          "Use unified engagement signals to drive smarter campaigns, stronger loyalty, and measurable ROI.",
        icon: Rocket,
      },
    ],
    []
  );

  const trustCapabilities = useMemo(
    () => [
      {
        title: "Authentic Protection",
        description:
          "Stop counterfeits and gray market activity while strengthening trust through verified interactions.",
        icon: Shield,
      },
      {
        title: "Actionable Insights",
        description:
          "Track real behavior and real-world engagement outcomes with analytics that connect to intent.",
        icon: BarChart3,
      },
      {
        title: "Enterprise Security",
        description:
          "Security and compliance controls designed for enterprise requirements and protected data workflows.",
        icon: Lock,
      },
      {
        title: "AI-Powered Translation",
        description:
          "Multilingual delivery that preserves nuance, intent, and brand voice—without flattening meaning.",
        icon: Languages,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 sm:pb-20 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="text-left">
              <h1 className="font-playfair font-bold mb-6 text-left" style={{ lineHeight: "1.5" }}>
                <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor block mb-1 sm:mb-3 py-1 sm:py-2">
                  BEEEP<span className="trademark-small">™</span>
                </span>
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p>
                  <strong>A unified engagement platform—built for three real-world contexts.</strong>
                </p>

                <p className="text-foreground/90">
                  BEEEP Enterprise™, BEEEP Collect™, and BEEEP Metro™ are three independent, industry-specific BEEEP platforms—each configured to meet the unique engagement, trust, and data needs of its respective market. Built on a shared patented architecture, they transform trusted physical and digital touchpoints into secure, multilingual experiences and permission-based first-party relationship signals.
                </p>

                {/* Mobile-first quick bullets */}
                <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    At a glance
                  </div>
                  <ul className="space-y-2 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Scan-to-engagement on any smartphone (no app required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Trusted touchpoints + measurable outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>Permission-based participation for brand-owned first-party data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>Multilingual delivery that preserves intent and context</span>
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
                        index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
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

      {/* 3 Platform Cards */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
              Three platform categories. One unified system.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Choose the layer that matches your real-world environment—brands, collectibles, or
              communities—while operating on the same core BEEEP™ engine.
            </p>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {platformCards.map((card) => {
    ...
  })}
</div>

<p className="mt-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
  Select a platform above to view the expanded details below.
</p>

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
                      <p className="text-foreground/80 leading-relaxed">{card.subtitle}</p>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-foreground/60 transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    {card.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-foreground/90">
                        <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{h}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
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
                    <li key={idx} className="flex items-start gap-3 text-foreground/90">
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

      {/* Trust / Security / Multilingual */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              Trust-first engagement—by design
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Whether you are engaging customers, collectors, or communities, BEEEP™ is built around
              authenticated touchpoints, secure participation, and measurable outcomes.
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
                <div className="text-sm text-foreground/90 leading-relaxed">{f.description}</div>
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
