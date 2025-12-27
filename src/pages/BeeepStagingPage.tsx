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

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-10 sm:pb-16 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="text-left">
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
                  BEEEP™ is a patented trust-first engagement platform that integrates directly into existing apps and real-world touchpoints.
                </p>

                <p className="text-foreground/90">
                  It enables organizations to securely collect and monetize cohesive, consent-based, behavioral audience intelligence that connects physical and digital engagement at scale.
                </p>

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
                        <strong>Role-specific secure access</strong> for every stakeholder
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic updates</strong> without reprinting packaging or signage
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Quantum-resistant design</strong> for long-term trust
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
