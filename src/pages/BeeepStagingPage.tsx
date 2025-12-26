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

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 sm:pb-20 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="text-left">
              {/* Custom Logo Header */}
              <div className="mb-6">
                <img
                  src="/lovable-uploads/BEEEPWhiteLogo.png"
                  alt="BEEEP Logo"
                  className="w-48 sm:w-56 md:w-64 object-contain"
                />
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />

              <div className="space-y-5 text-lg text-foreground leading-relaxed">
                <p>
                  <strong>
                    A unified engagement platform—built for three real-world
                    contexts.
                  </strong>
                </p>

                <p className="text-foreground/90">
                  BEEEP Enterprise™, BEEEP Collect™, and BEEEP Metro™ are three
                  independent, industry-specific BEEEP platforms—each configured
                  to meet the unique engagement, trust, and data needs of its
                  respective market. Built on a shared patented architecture,
                  they transform trusted physical and digital touchpoints into
                  secure, multilingual experiences and permission-based
                  first-party relationship signals.
                </p>

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
