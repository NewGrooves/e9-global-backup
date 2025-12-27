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
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroImages.length),
      4000
    );
    return () => clearInterval(interval);
  }, [imagesLoaded, heroImages.length]);

  const platformCards = useMemo(
    () => [
      {
        key: "enterprise" as const,
        title: "Enterprise Deployment",
        subtitle: "Embedded authentication and engagement inside brand-owned apps and systems.",
        icon: Building2,
        highlights: [
          "Integrates into existing mobile apps, web properties, and digital workflows",
          "No new app, login, or consumer trust decision required",
          "Brand remains data controller; BEEEP operates as infrastructure",
        ],
      },
      {
        key: "collect" as const,
        title: "Collectibles Deployment",
        subtitle: "Persistent authentication and stewardship across ownership lifecycles.",
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
        subtitle: "Scan-initiated engagement grounded in real places and moments.",
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
        "Consumers never need to download a BEEEP app or create a new account. Authentication, consent, and identity remain governed by the brand’s existing UX and privacy framework.",
        "BEEEP functions as infrastructure: capturing high-intent scan events, enabling permission-based participation, and returning trusted engagement signals to the brand—without competing for end-user ownership.",
      ],
      bullets: [
        "Brand remains the data controller; BEEEP acts as a bounded processor",
        "Higher scan completion rates with zero install friction",
        "Faster enterprise approvals and lower regulatory exposure",
      ],
    };

    const collect = {
      eyebrow: "Embedded provenance infrastructure",
      headline:
        "Persistent authentication that travels with the asset—not the platform.",
      body: [
        "BEEEP Collect embeds directly into auction, registry, and provenance systems—transforming authenticated items into persistent engagement anchors.",
        "Because BEEEP operates beneath the interface, ownership transitions do not break the engagement loop. Stewardship, education, and storytelling evolve alongside the asset.",
        "The result is continuity across resale and legacy cycles without forcing collectors into a new platform or application.",
      ],
      bullets: [
        "Engagement continuity across ownership transitions",
        "Item-level authentication tied to real-world interactions",
        "Infrastructure that outlives any single marketplace or interface",
      ],
    };

    const metro = {
      eyebrow: "Embedded place-based infrastructure",
      headline:
        "Scan-initiated engagement that respects place, context, and governance.",
      body: [
        "BEEEP Metro embeds into city apps, venue systems, signage, and destination platforms—activating real-world touchpoints without centralizing control.",
        "Engagement begins with a scan and unfolds inside the environments people already trust, supporting multilingual access, education, and guidance.",
        "Because BEEEP is infrastructure, cities and institutions retain governance while benefiting from consistent, learn-once scan behavior.",
      ],
      bullets: [
        "Right message, right moment, right language—grounded in place",
        "No ‘city as a platform’ abstraction",
        "Persistent participation without new consumer adoption hurdles",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  const howItWorksSteps = useMemo(
    () => [
      {
        step: "Scan Initiates Intent",
        description:
          "A simple scan signals real-world intent—no app install, no new account, no friction.",
        icon: QrCode,
      },
      {
        step: "Permission Handshake",
        description:
          "Consent and identity are handled inside the brand’s existing systems and policies.",
        icon: Lock,
      },
      {
        step: "Authenticated Engagement",
        description:
          "Content, guidance, or interaction unfolds where the user already is—app, site, or system.",
        icon: Sparkles,
      },
      {
        step: "Normalized Signals",
        description:
          "Trusted engagement signals flow back to the brand without fragmenting ownership.",
        icon: Database,
      },
    ],
    []
  );

  const trustCapabilities = useMemo(
    () => [
      {
        title: "Authentication First",
        description:
          "Every engagement begins with a verified, real-world touchpoint—not anonymous traffic.",
        icon: Shield,
      },
      {
        title: "Permission by Design",
        description:
          "Personal data is captured only when users opt in, under brand-controlled consent.",
        icon: Lock,
      },
      {
        title: "Enterprise-Safe Infrastructure",
        description:
          "Designed to reduce liability, regulatory exposure, and platform dependency.",
        icon: BarChart3,
      },
      {
        title: "Multilingual at the Core",
        description:
          "Language delivery preserves nuance and intent without flattening meaning.",
        icon: Languages,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/lovable-uploads/BEEEPWhiteLogo.png"
                alt="BEEEP"
                className="w-64 mb-6"
              />

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <p className="text-xl font-semibold mb-4">
                BEEEP is embedded infrastructure for authentication and
                permission-based engagement.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                BEEEP does not replace your app, your identity system, or your
                customer relationship. It operates underneath them—activating
                scan-initiated intent, trusted participation, and normalized
                engagement signals inside environments people already trust.
              </p>

              <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
  <ul className="space-y-3 text-base text-foreground/90">
    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
      <span>No new consumer app</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
      <span>No new login or trust surface</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
      <span>Brand remains data controller</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
      <span>“Powered by BEEEP” when you choose to show it</span>
    </li>
  </ul>
</div>

            </div>

            <div className="relative">
              <div className="rounded-3xl shadow-2xl overflow-hidden">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`transition-opacity duration-1000 ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Contexts */}
      <section className="py-16 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              One infrastructure. Multiple deployment contexts.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
              The same BEEEP engine adapts to brands, assets, and places—without
              fragmenting behavior or ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {platformCards.map((card) => {
              const Icon = card.icon;
              const isActive = selectedPlatform === card.key;

              return (
                <button
                  key={card.key}
                  onClick={() => setSelectedPlatform(card.key)}
                  className={`text-left p-6 rounded-3xl border transition ${
                    isActive
                      ? "border-purple-500 ring-2 ring-purple-500/20"
                      : "border-border/20"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon />
                    <h3 className="font-bold text-xl">{card.title}</h3>
                  </div>
                  <p className="mb-3 text-foreground/80">{card.subtitle}</p>
                  <ul className="space-y-2 text-sm">
                    {card.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-playfair font-bold mb-4">
            {platformDetail.headline}
          </h3>
          <p className="uppercase text-sm text-foreground/60 mb-6">
            {platformDetail.eyebrow}
          </p>

          {platformDetail.body.map((p, i) => (
            <p key={i} className="mb-4 text-lg text-foreground/90">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {howItWorksSteps.map((s, i) => (
              <div
                key={i}
                className="p-5 bg-card/80 rounded-3xl border border-border/20"
              >
                <s.icon className="mb-3" />
                <h4 className="font-bold mb-2">{s.step}</h4>
                <p className="text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Built for trust, scale, and inevitability
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCapabilities.map((t, i) => (
            <div key={i} className="p-6 bg-card rounded-3xl">
              <t.icon className="mb-3" />
              <h4 className="font-bold mb-2">{t.title}</h4>
              <p className="text-sm">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default BeeepStagingPage;
