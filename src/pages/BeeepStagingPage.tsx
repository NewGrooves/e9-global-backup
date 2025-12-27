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
          "Embedded authentication + permission inside brand-owned apps and systems.",
        icon: Building2,
        highlights: [
          "Integrates into existing mobile apps, web properties, and packaging workflows",
          "No new app, login, or consumer trust decision required",
          "Brand remains data controller; BEEEP operates as bounded infrastructure",
        ],
      },
      {
        key: "collect" as const,
        title: "Collectibles Deployment",
        subtitle:
          "Persistent authentication and stewardship across ownership lifecycles.",
        icon: Gem,
        highlights: [
          "Embeds into auction, registry, and provenance systems",
          "Maintains continuity across resale, inheritance, and transfer",
          "Authenticated items become long-lived engagement touchpoints",
        ],
      },
      {
        key: "metro" as const,
        title: "Place-Based Deployment",
        subtitle:
          "Scan-initiated engagement grounded in real places and real moments.",
        icon: MapPin,
        highlights: [
          "Integrates into city apps, venue platforms, and destination experiences",
          "Multilingual engagement without abstracting place into a system",
          "Supports persistent participation across communities and visitors",
        ],
      },
    ],
    []
  );

  const platformDetail = useMemo(() => {
    const common = {
      sectionTitle: "How BEEEP works as embedded infrastructure",
      bulletsTitle: "Infrastructure outcomes",
      bullets: [
        "Scan-initiated intent captured at the moment of real-world interaction",
        "Permission handled inside existing brand or institutional frameworks",
        "Normalized engagement signals without fragmenting ownership or control",
      ],
    };

    const enterprise = {
      eyebrow: "Embedded engagement infrastructure",
      headline:
        "Authentication and permission-based engagement—inside systems brands already run.",
      body: [
        "BEEEP Enterprise operates as an embedded scan-to-engagement layer inside existing brand apps, websites, packaging flows, and digital experiences.",
        "Every scan is backed by patented Optropic GS1 QR code technology and covert EncryptorSeal anti-counterfeit authentication—so the scan is not just a link, it is a verification event.",
        "Consumers never need to download a BEEEP app or create a new account. Authentication, consent, and identity remain governed by the brand’s existing UX and privacy framework, while BEEEP returns trusted engagement signals to the brand without competing for end-user ownership.",
      ],
      bullets: [
        "Brand remains the data controller; BEEEP acts as a bounded processor",
        "Verification-led engagement (not commodity QR redirects)",
        "Higher-signal, permission-based data that can be monetized as intelligence",
      ],
    };

    const collect = {
      eyebrow: "Embedded provenance infrastructure",
      headline:
        "Persistent verification that travels with the asset—not the platform.",
      body: [
        "BEEEP Collect embeds directly into auction, registry, and provenance systems—transforming authenticated items into persistent engagement anchors.",
        "Optropic GS1 QR codes enable interoperable, standards-aligned scanning, while EncryptorSeal adds a covert anti-counterfeit layer that ordinary QR codes cannot replicate or securely “copy.”",
        "Because the verification layer persists across interfaces, ownership transitions do not break the engagement loop. Stewardship, education, and storytelling evolve alongside the asset without forcing collectors into a new platform.",
      ],
      bullets: [
        "Covert anti-counterfeit verification at the point of scan",
        "Continuity across resale, inheritance, and long-term stewardship cycles",
        "Item-level intelligence and engagement that compounds over time",
      ],
    };

    const metro = {
      eyebrow: "Embedded place-based infrastructure",
      headline:
        "Scan-initiated engagement that respects place, context, and governance.",
      body: [
        "BEEEP Metro embeds into city apps, venue systems, signage, and destination platforms—activating real-world touchpoints without centralizing control.",
        "Optropic GS1 QR codes provide a familiar, globally interoperable scan behavior, while EncryptorSeal can add covert verification where authenticity matters (access control, safety, verified information).",
        "Because BEEEP is infrastructure, cities and institutions retain governance while benefiting from consistent, learn-once scan behavior and multilingual delivery that preserves intent and context.",
      ],
      bullets: [
        "Trusted scan experiences grounded in real places and real moments",
        "Optional covert verification where authenticity and safety matter",
        "Persistent participation loops without new consumer adoption hurdles",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan Initiates Verification + Intent",
        description:
          "A familiar scan becomes a verification event—capturing high-signal intent at the moment of interaction.",
        icon: QrCode,
      },
      {
        step: "Covert Authentication Layer",
        description:
          "EncryptorSeal adds covert anti-counterfeit verification ordinary QR codes cannot provide.",
        icon: Shield,
      },
      {
        step: "Permission Handshake",
        description:
          "Consent and identity are handled inside the brand’s existing systems and privacy framework.",
        icon: Lock,
      },
      {
        step: "Trusted Signals + Intelligence",
        description:
          "Verified engagement signals flow back to the brand, supporting analytics, enrichment, and monetizable intelligence.",
        icon: Database,
      },
    ],
    []
  );

  const trustCapabilities = useMemo(
    () => [
      {
        title: "Not a Regular QR Code",
        description:
          "Optropic GS1 QR + covert EncryptorSeal means scans are verification-led, not just redirects.",
        icon: QrCode,
      },
      {
        title: "Authenticity + Anti-Counterfeit",
        description:
          "Stop counterfeits and gray market activity with covert verification tied to real-world touchpoints.",
        icon: Shield,
      },
      {
        title: "Permission by Design",
        description:
          "Personal data is captured only when users opt in, under brand-controlled consent and policy.",
        icon: Lock,
      },
      {
        title: "Multilingual at the Core",
        description:
          "Language delivery preserves nuance, intent, and brand voice—without flattening meaning.",
        icon: Languages,
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
                  alt="BEEEP"
                  className="w-56 sm:w-64 md:w-72 object-contain"
                  loading="eager"
                />
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                  Embedded infrastructure for{" "}
                  <span className="font-semibold">
                    verification-led engagement
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    permission-based data intelligence
                  </span>
                  .
                </p>

                <p className="text-foreground/90">
                  BEEEP is not a standalone app that competes with your customer
                  relationship. It operates underneath your existing apps and
                  systems—activating scan-initiated intent through{" "}
                  <strong>patented Optropic GS1 QR codes</strong> and a covert{" "}
                  <strong>EncryptorSeal anti-counterfeit layer</strong> that
                  ordinary QR codes cannot replicate.
                </p>

                <p className="text-foreground/90">
                  When users opt in, brands can capture permission-based
                  first-party signals, enrich and enhance existing datasets, and
                  monetize data intelligence in ways that increase enterprise
                  value.
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
                        <strong>Not a regular QR code:</strong> verification-led
                        scans via Optropic GS1 QR + EncryptorSeal
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>No new consumer app</strong> (embedded inside
                        what brands already run)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Brand remains data controller</strong>; BEEEP
                        operates as bounded infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Permission-based intelligence</strong> that can
                        be enriched and monetized to increase valuation
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="text-sm text-foreground/75">
                  “Powered by BEEEP” branding is optional—show it when you choose
                  to signal capability.
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

      {/* Why this is different from regular QR codes */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              What makes this different from regular QR codes?
            </h2>
            <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Regular QR codes primarily resolve to a destination (a link). BEEEP
              transforms the scan into a{" "}
              <strong>verification event</strong>—powered by patented Optropic
              GS1 QR technology and a covert EncryptorSeal anti-counterfeit
              layer—so engagement and data are grounded in authenticity, not
              assumptions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground">
                  Regular QR Codes
                </h3>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Typically act as a static or redirected link</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>Easy to copy, reprint, and redeploy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                  <span>No built-in proof of authenticity at scan time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span>Data can be noisy and difficult to trust</span>
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
                  BEEEP-Powered Codes
                </h3>
              </div>
              <ul className="space-y-2 text-foreground/90 relative">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>
                    Patented <strong>Optropic GS1 QR</strong> for interoperable,
                    standards-aligned scanning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>
                    Covert <strong>EncryptorSeal</strong> anti-counterfeit layer
                    to verify authenticity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                  <span>
                    Scan becomes a <strong>verification event</strong>, not just
                    a destination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span>
                    Trusted, permission-based data signals built for measurable
                    outcomes
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-base sm:text-lg text-foreground/90 font-medium max-w-4xl mx-auto">
            The result: higher trust, higher scan completion, and higher-signal
            data—without forcing brands to adopt a new consumer app.
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
              The same BEEEP engine adapts to brands, assets, and places—without
              fragmenting behavior, ownership, or control.
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
            Select a deployment context above to view the expanded details
            below.
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

      {/* Trust / Security / Multilingual */}
      <section className="py-12 md:py-16 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
        <div className="container mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
              Trust-first engagement—by design
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP is built around verified touchpoints, covert
              anti-counterfeit authentication, permission-based participation,
              and measurable outcomes—embedded inside systems brands already
              operate.
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
                Verified scans create high-confidence intent signals. When users
                opt in, those signals become permission-based first-party data
                assets that brands can use to improve LTV, reduce CAC, and
                monetize intelligence—often increasing valuation multiples
                relative to businesses dependent on third-party platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">
                  Cleaner signals
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Authentication-led scans reduce noise and fraud—improving
                  attribution, segmentation, and decision quality.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">
                  Enriched first-party databases
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  E9 Global can help brands enhance existing datasets with
                  additional permission-based data sources—building richer
                  customer intelligence while preserving ownership and consent.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="font-playfair font-bold text-xl mb-2">
                  Monetizable intelligence
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Permission-based insight can power pricing, retention, product
                  strategy, and paid growth—turning data ownership into durable,
                  compounding enterprise value.
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-5xl mx-auto bg-card/70 border border-border/30 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                Key point
              </div>
              <p className="text-foreground/90 leading-relaxed">
                BEEEP is designed so the brand remains the data controller and
                retains ownership of permission-based relationship signals.
                E9 Global operates as a bounded technology provider—helping
                clients transform authentication into measurable engagement and
                monetizable data intelligence.
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
