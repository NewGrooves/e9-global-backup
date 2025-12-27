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
          "Embedded authentication, permission, and role-specific delivery inside brand-owned apps and systems.",
        icon: Building2,
        highlights: [
          "Integrates into existing mobile apps, web properties, and packaging workflows",
          "No new app, no new login, and no new consumer trust surface",
          "Brand remains the data controller while BEEEP™ operates as bounded infrastructure",
        ],
      },
      {
        key: "collect" as const,
        title: "Collectibles Deployment",
        subtitle:
          "Persistent verification, provenance continuity, and secure stakeholder delivery across ownership lifecycles.",
        icon: Gem,
        highlights: [
          "Embeds into auction, registry, and provenance systems",
          "Supports role-specific access for buyers, sellers, authenticators, and partners",
          "Authenticated items become long-lived, updateable engagement touchpoints",
        ],
      },
      {
        key: "metro" as const,
        title: "Community Deployment",
        subtitle:
          "Scan-initiated engagement grounded in real places, with optional covert verification and multilingual delivery.",
        icon: MapPin,
        highlights: [
          "Integrates into city apps, venue platforms, and destination experiences",
          "Different stakeholders receive different secure content from the same code",
          "Content can be updated at any time without reprinting signage",
        ],
      },
    ],
    []
  );

  const platformDetail = useMemo(() => {
    const common = {
      sectionTitle: "How BEEEP™ works as embedded infrastructure",
      bulletsTitle: "Infrastructure outcomes",
      bullets: [
        "Scan-initiated intent captured at the moment of real-world interaction",
        "Permission handled inside existing brand or institutional frameworks",
        "Trusted, normalized signals without fragmenting ownership or control",
      ],
    };

    const enterprise = {
      eyebrow: "Embedded engagement infrastructure",
      headline:
        "Authentication and permission-based engagement inside systems brands already run.",
      body: [
        "BEEEP™ Enterprise operates as an embedded scan-to-engagement layer inside existing brand apps, websites, packaging flows, and digital experiences.",
        "Every scan is backed by patented Optropic GS1 QR code technology and covert EncryptorSeal™ authentication, so the scan is not just a link. It is a verification event brands can trust.",
        "Optropic is designed for role-specific, secure delivery. The same printed code can serve different secure experiences for customers, distributors, internal teams, service providers, or regulators, based on identity, permissions, and context.",
        "Content can be updated at any time without reprinting packaging. Brands can correct instructions, push recalls, update offers, change onboarding, or deliver stakeholder-specific workflows instantly.",
        "Optropic is designed to be resistant against future quantum attacks, supporting long-term durability for trust, authentication, and data integrity.",
      ],
      bullets: [
        "Brand remains the data controller; BEEEP™ acts as a bounded processor",
        "Role-specific secure content from the same code with dynamic updates",
        "High-confidence, permission-based signals that support monetizable intelligence",
      ],
    };

    const collect = {
      eyebrow: "Embedded provenance infrastructure",
      headline:
        "Persistent verification that travels with the asset, not the platform.",
      body: [
        "BEEEP™ Collect embeds directly into auction, registry, and provenance systems, transforming authenticated items into persistent engagement anchors.",
        "Optropic GS1 QR codes provide interoperable scanning, while EncryptorSeal™ adds a covert anti-counterfeit layer that ordinary QR codes cannot replicate or securely copy.",
        "Role-specific access allows different stakeholders to receive different secure content from the same item code. A buyer can see verified provenance, a service partner can see service records, and an authenticator can see privileged verification data, without exposing sensitive content to the wrong party.",
        "Because the code remains constant while content can be updated, the engagement and intelligence loop persists across resale, inheritance, and long-term stewardship cycles.",
        "Optropic is designed to be resistant against future quantum attacks, supporting a long horizon for valuable assets and records.",
      ],
      bullets: [
        "Covert anti-counterfeit verification at the point of scan",
        "Role-specific secure delivery across stakeholders and lifecycle stages",
        "Durable, updateable item intelligence that compounds over time",
      ],
    };

    const metro = {
      eyebrow: "Embedded place-based infrastructure",
      headline:
        "Scan-initiated engagement that respects place, context, and governance.",
      body: [
        "BEEEP™ Metro embeds into city apps, venue systems, signage, and destination platforms, activating real-world touchpoints without centralizing control.",
        "Optropic GS1 QR codes provide a familiar scan behavior, while EncryptorSeal™ can add covert verification where authenticity and safety matter.",
        "Role-specific access makes the same printed code far more powerful. Visitors can receive public guidance, residents can receive localized services, staff can receive operational content, and partners can receive secure workflows, each governed by permissions.",
        "Dynamic updates allow content to evolve with events, emergencies, schedules, language needs, and community initiatives without reprinting signage.",
        "Optropic is designed to be resistant against future quantum attacks, supporting long-term trust for civic and institutional deployments.",
      ],
      bullets: [
        "Right message for the right stakeholder at the right moment",
        "Dynamic updates without redesign or reprint cycles",
        "Optional covert verification for safety, access, and authenticity",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan initiates verification and intent",
        description:
          "A familiar scan becomes a verification event and a high-signal intent marker at the moment of interaction.",
        icon: QrCode,
      },
      {
        step: "Role-specific secure delivery",
        description:
          "The same code can deliver different secure content to different stakeholders based on identity, permissions, and context.",
        icon: Users,
      },
      {
        step: "Dynamic updates",
        description:
          "Content can be updated at any time without reprinting packaging or signage, keeping experiences current and accurate.",
        icon: RefreshCw,
      },
      {
        step: "Permission-based intelligence",
        description:
          "When users opt in, verified signals flow back to the brand for analytics, enrichment, and monetizable intelligence.",
        icon: Database,
      },
    ],
    []
  );

  const trustCapabilities = useMemo(
    () => [
      {
        title: "Not a regular QR code",
        description:
          "Optropic GS1 QR plus covert EncryptorSeal™ turns a scan into a trusted verification event, not a simple redirect.",
        icon: Shield,
      },
      {
        title: "Quantum-resistant design",
        description:
          "Optropic is designed to be resistant against future quantum attacks for durable trust and long-term data integrity.",
        icon: Lock,
      },
      {
        title: "Role-specific access",
        description:
          "Different stakeholders can receive entirely different secure content from the same code, governed by permissions.",
        icon: Users,
      },
      {
        title: "Live content control",
        description:
          "Update content instantly without reprinting, enabling rapid changes across products, assets, and places.",
        icon: Sparkles,
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
                  Embedded infrastructure that turns GS1 QR scans into secure verification,
                  role-specific delivery, and permission-based data intelligence.
                </p>

                <p className="text-foreground/90">
                  The most common question we hear is, “What makes this different from regular QR codes?” The answer is simple.
                  Regular QR codes are links.{" "}
                  <strong>
                    BEEEP™ is a patented trust and intelligence layer powered by Optropic GS1 QR technology plus covert EncryptorSeal™ authentication.
                  </strong>
                </p>

                <p className="text-foreground/90">
                  The same printed code can securely deliver different content to different stakeholders, and that content can be updated at any time.
                  When users opt in, brands capture permission-based signals they own. E9 Global can then enrich them with additional permission-based datasets,
                  and monetize their data intelligence in ways that increase enterprise value.
                </p>

                {/* Quick bullets with colors */}
                <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    At a glance
                  </div>
                  <ul className="space-y-3 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>
                        <strong>Verification, not a link</strong> via Optropic GS1 QR plus EncryptorSeal™
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>Role-specific secure access</strong> so each stakeholder receives only what is relevant to them
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic updates</strong> to content without reprinting packaging or signage
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Quantum-resistant design</strong> for long-term durability of trust and data integrity
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>
                        <strong>Embedded by design</strong> inside brand-owned systems. “Powered by BEEEP™” branding is optional.
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

      {/* Why this is different from regular QR codes */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              Why this is not a regular QR code
            </h2>
            <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Regular QR codes resolve to a destination. Optropic GS1 QR codes, combined with covert EncryptorSeal™ authentication,
              turn the scan into a verification event. That verification can unlock secure, role-specific content and permission-based data capture.
              Content can also be updated at any time without reprinting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground">
                  Regular QR codes
                </h3>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Primarily function as a link or redirect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>Easy to copy, reprint, and redeploy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                  <span>No built-in authenticity proof at scan time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span>Limited ability to control role-specific secure access</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-500/30 ring-1 ring-purple-500/10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-blue-500/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-3 relative">
                <div className="w-11 h-11 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground">
                  BEEEP™-powered Optropic plus EncryptorSeal™
                </h3>
              </div>
              <ul className="space-y-2 text-foreground/90 relative">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>
                    Patented <strong>Optropic GS1 QR</strong> for interoperable, standards-aligned scanning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>
                    Covert <strong>EncryptorSeal™</strong> authentication to verify authenticity at scan time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                  <span>
                    <strong>Role-specific secure access</strong> so different stakeholders receive different secure content from the same code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span>
                    <strong>Dynamic updates</strong> so content can change at any time without reprinting
                  </span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-foreground/80 relative">
                Optropic is designed to be resistant against future quantum attacks, supporting durable trust and long-term data integrity.
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-base sm:text-lg text-foreground/90 font-medium max-w-4xl mx-auto">
            The result is higher trust, higher scan completion, and stakeholder-specific experiences that stay current, without forcing brands to adopt a new consumer app.
          </p>
        </div>
      </section>

      {/* Deployment Contexts */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
              One infrastructure. Multiple deployment contexts.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              The same engine adapts to brands, assets, and places while preserving ownership, permissions, and role-specific delivery.
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

      {/* Trust / Security / Capabilities */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              Trust-first engagement by design
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP™ is built around verified touchpoints, covert anti-counterfeit authentication, role-specific access, permission controls,
              and measurable outcomes. It is embedded inside systems brands already operate.
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

      {/* Data Intelligence + Valuation */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Permission-based intelligence increases enterprise value
              </h2>
              <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
                Verified scans create high-confidence intent signals. When users opt in, those signals become permission-based data assets the brand owns.
                Brands that control their data and know how to monetize intelligence often earn stronger valuation multiples than businesses dependent on third-party platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">Cleaner signals</div>
                <p className="text-foreground/90 leading-relaxed">
                  Authentication reduces noise and fraud, improving attribution, segmentation, and decision quality across marketing, support, and operations.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">Enriched permission-based databases</div>
                <p className="text-foreground/90 leading-relaxed">
                  E9 Global can help brands enhance existing datasets with additional permission-based data sources, building richer customer intelligence while preserving consent and ownership.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">Monetizable intelligence</div>
                <p className="text-foreground/90 leading-relaxed">
                  Permission-based insight can power pricing, retention, product strategy, and performance marketing, turning data ownership into durable, compounding enterprise value.
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-5xl mx-auto bg-card/70 border border-border/30 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">Key point</div>
              <p className="text-foreground/90 leading-relaxed">
                The brand remains the data controller and retains ownership of permission-based relationship signals. E9 Global operates as a bounded technology provider,
                helping clients transform trusted scans into measurable outcomes and monetizable data intelligence.
              </p>
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
