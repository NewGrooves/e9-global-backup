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
        title: "Place-Based Deployment",
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
        "Every scan is backed by patented Optropic GS1 QR code technology and covert EncryptorSeal™ authentication, so the scan is not just a link. It is a verification event.",
        "The same printed code can securely deliver different content to different stakeholders based on identity, permissions, and context.",
        "Content can be updated at any time without reprinting packaging, enabling rapid corrections, recalls, onboarding changes, and role-specific workflows.",
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
        "Optropic GS1 QR codes provide interoperable scanning, while EncryptorSeal™ adds a covert anti-counterfeit layer that ordinary QR codes cannot replicate.",
        "Different stakeholders receive different secure views of the same asset, without exposing sensitive data to unauthorized parties.",
        "Because the code remains constant while content evolves, engagement persists across resale, inheritance, and long-term stewardship cycles.",
        "Optropic is designed to be resistant against future quantum attacks, protecting high-value assets over extended lifespans.",
      ],
      bullets: [
        "Covert anti-counterfeit verification at the point of scan",
        "Role-specific secure delivery across ownership stages",
        "Durable, updateable item intelligence that compounds over time",
      ],
    };

    const metro = {
      eyebrow: "Embedded place-based infrastructure",
      headline:
        "Scan-initiated engagement that respects place, context, and governance.",
      body: [
        "BEEEP™ Metro embeds into city apps, venue systems, signage, and destination platforms, activating real-world touchpoints without centralizing control.",
        "Optropic GS1 QR codes provide a familiar scan behavior, while EncryptorSeal™ adds covert verification where authenticity and safety matter.",
        "Role-specific access allows the same printed code to serve visitors, residents, staff, and partners with entirely different secure content.",
        "Dynamic updates allow content to evolve with events, emergencies, schedules, and language needs without reprinting signage.",
        "Optropic is designed to be resistant against future quantum attacks, supporting long-term civic trust.",
      ],
      bullets: [
        "Right message for the right stakeholder at the right moment",
        "Dynamic updates without redesign or reprint cycles",
        "Optional covert verification for safety and access control",
      ],
    };

    if (selectedPlatform === "enterprise") return { ...common, ...enterprise };
    if (selectedPlatform === "collect") return { ...common, ...collect };
    return { ...common, ...metro };
  }, [selectedPlatform]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/lovable-uploads/BEEEPWhiteLogo.png"
              alt="BEEEP™"
              className="w-64 mb-6"
            />

            <div className="space-y-5 text-lg">
              <p className="text-2xl font-semibold">
                Embedded infrastructure that turns GS1 QR scans into secure
                verification, role-specific delivery, and permission-based data intelligence.
              </p>

              <p>
                Regular QR codes are links.{" "}
                <strong>
                  BEEEP™ is a patented trust and intelligence layer powered by
                  Optropic GS1 QR technology plus covert EncryptorSeal™ authentication.
                </strong>
              </p>

              <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                    <span>
                      <strong>Verification, not a link</strong> via Optropic GS1 QR plus EncryptorSeal™
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                    <span>
                      <strong>Role-specific secure access</strong> for every stakeholder
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-pink-500" />
                    <span>
                      <strong>Dynamic updates</strong> without reprinting packaging or signage
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />
                    <span>
                      <strong>Quantum-resistant design</strong> for long-term trust
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />
                    <span>
                      <strong>Embedded by design</strong> inside brand-owned systems.
                      “Powered by BEEEP™” branding is optional.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              />
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
