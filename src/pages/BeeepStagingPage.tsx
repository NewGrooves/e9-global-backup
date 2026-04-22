import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { Building2, Users } from "lucide-react";

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
        title: "E9 Enterprise",
        subtitle:
          "Embedded engagement infrastructure for brands and enterprise organizations.",
        icon: Building2,
        highlights: [
          "Integrates into existing apps, web properties, and operational workflows",
          "Role-specific delivery for customers, partners, internal teams, and regulators",
          "Designed for secure participation and permission-based intelligence",
        ],
        notes: [
          "E9 Enterprise integrates directly into existing apps and real-world touchpoints to connect physical interaction with digital engagement at scale.",
          "Role-specific delivery ensures that customers, partners, internal teams, and regulators can access different secure experiences from the same scan--based on identity, permissions, and context.",
          "When users opt in, organizations capture permission-based signals they own--enabling data enrichment and monetization services that strengthen retention, operational performance, and long-term enterprise value.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "EncryptorSeal(TM): Covert Smartphone-Verified Anti-Counterfeit Protection",
        ],
      },
      {
        title: "E9 Metro",
        subtitle:
          "Participation-centric engagement for cities, venues, destinations, and communities.",
        icon: Users,
        highlights: [
          "Supports residents, visitors, staff, local organizations, and partners",
          "Dynamic content updates without reprinting signage or physical touchpoints",
          "Designed for participation loops, learning, and value exchange",
        ],
        notes: [
          "E9 Metro powers community-branded apps that serve as trusted gateways for participation, information, and engagement; designed to be adopted locally and used consistently.",
          "E9 Metro integrates into civic, cultural, and place-based touchpoints to connect real-world participation with secure, role-specific digital experiences.",
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
              {/* Heading */}
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground">
                  E9 Engagement Platform
                </h1>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                  E9 Global is a patented, trust-first engagement platform that
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
