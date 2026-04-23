import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { Building2, Users } from "lucide-react";

const BeeepStagingPageV2 = () => {
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
        title: "BEEEP™ Assets",
        subtitle:
          "Verification infrastructure for high-value collectibles, fine art, and authenticated assets.",
        icon: Building2,
        highlights: [
          "Provenance continuity across ownership changes, resale, and stewardship",
          "Role-specific access for buyers, sellers, authenticators, and service partners",
          "Built for auction houses, galleries, and high-trust asset markets",
        ],
        notes: [
          "Auction houses establish trust at the point of sale. BEEEP preserves it indefinitely — ensuring provenance, permissions, and role-based information remain intact across the full ownership lifecycle.",
          "Each scan verifies the asset before engagement begins, connecting the physical object to its verified digital record without introducing tags, markers, or codes.",
          "Currently in pilot development with a major auction house, with applications across high-value collectibles, fine art, and authenticated luxury goods.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "Mark-Free Surface Fingerprint Authentication",
          "Immutable Ownership, Provenance, and Resale Integrity",
        ],
      },
      {
        title: "BEEEP™ Culture",
        subtitle:
          "Engagement infrastructure for museums, cultural institutions, and place-based experiences.",
        icon: Users,
        highlights: [
          "Transforms passive visits into measurable, data-generating engagement",
          "Dynamic content delivery without reprinting signage or physical materials",
          "New sponsorship and revenue models built on verified audience intelligence",
        ],
        notes: [
          "Museums and cultural institutions struggle to engage younger, digital-native audiences and generate meaningful revenue. BEEEP provides the infrastructure layer that makes engagement measurable and monetizable.",
          "Each physical touchpoint becomes a verified entry point — connecting real-world participation to secure, role-specific digital experiences that institutions own and control.",
          "In collaboration with pioneers in interactive engagement, including Nolan Bushnell, Founder of Atari.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "High-Assurance Biometric Identity & Authorization",
        ],
      },
      {
        title: "BEEEP™ Live",
        subtitle:
          "Real-time engagement infrastructure for live entertainment, concerts, and events.",
        icon: Users,
        highlights: [
          "Converts anonymous crowds into known, engaged audiences",
          "Connects artists, venues, and sponsors through a shared engagement layer",
          "Opt-in, permission-based audience intelligence that sponsors can actually measure",
        ],
        notes: [
          "Sponsors invest billions annually in live events with almost no measurable engagement. Artists and operators have no direct visibility into audience behavior. BEEEP changes that.",
          "Secure QR interactions — embedded in wristbands, tickets, or physical touchpoints — verify engagement and unlock dynamic experiences in real time.",
          "Each interaction generates verified behavioral signals that artists, venues, and sponsors own — unlocking new revenue streams without disrupting the live experience.",
        ],
        securityTech: [
          "Patented Optropic GS1-Compatible QR Infrastructure",
          "Secure, Role-Based Experience Delivery",
          "Real-Time Engagement Tracking & Behavioral Analytics",
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold gradient-text-investor">
                  The Verification Infrastructure Layer for the Physical World.
                </h1>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                  BEEEP is a patented, white-label infrastructure platform that enables
                  auction houses, cultural institutions, and live event operators to
                  verify physical objects and power secure engagement — without building
                  the technology themselves.
                </p>

                <p className="text-foreground/90">
                  Think of BEEEP the way you think of Stripe for payments — the
                  infrastructure layer that powers trust behind the scenes. Partners
                  integrate once. BEEEP handles verification, permissions, and
                  engagement delivery. Brands keep their identity.
                </p>

                {/* AT A GLANCE */}
                <div className="bg-card/70 border border-border/30 rounded-2xl p-5 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    The infrastructure layer
                  </div>

                  <ul className="space-y-3 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>
                        <strong>Patented secure scan architecture</strong> that verifies
                        the physical object itself before engagement begins
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>White-label by design</strong> — partners integrate via
                        SDK or API; BEEEP powers the trust layer invisibly
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Governed, role-specific access</strong> so each
                        stakeholder sees only what is relevant to their role
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Dynamic content control</strong> with the ability to
                        update experiences at any time without reprinting materials
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>
                        <strong>Permission-based audience intelligence</strong> that
                        partners own — built for compliance and long-term durability
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>
                        <strong>Offline verification capability</strong> for high-security
                        environments where connectivity cannot be assumed
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                      <span>
                        <strong>Trust established at the point of interaction</strong> —
                        before any downstream action occurs
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
              One infrastructure layer. Three verified markets.
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              BEEEP is purpose-built for high-trust verticals where physical verification
              and secure engagement create measurable value — for partners and the
              audiences they serve.
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
                      {/* At a glance */}
                      <div className="bg-background/60 border border-border/30 rounded-2xl p-5">
                        <div className="text-sm font-semibold text-foreground mb-3">
                          At a glance
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
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA heading="Let's Build the Category Together." />
      <Footer />
    </div>
  );
};

export default BeeepStagingPageV2;
