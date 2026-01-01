import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModules from "../components/ProductModules";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";
import { ShieldCheck, QrCode, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HomeStaging = () => {
  const successMetrics = [
    {
      icon: ShieldCheck,
      title: "Verified Trust Layer",
      description:
        "Covert authentication and secure validation that protect what’s real—across products, assets, and environments.",
    },
    {
      icon: QrCode,
      title: "Role-Based Access via Secure QR",
      description:
        "One touchpoint can serve different stakeholders with permissioned experiences—without adding user friction.",
    },
    {
      icon: Users,
      title: "Measurable Engagement Outcomes",
      description:
        "Turn real-world touchpoints into interactive moments that drive education, loyalty, and conversion—by design.",
    },
    {
      icon: Database,
      title: "Opt-In First-Party Signals",
      description:
        "Capture permission-based relationship signals that brands and operators own—built for compliance and durability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* SEO / Schema */}
      <SEOHead
        title="E9 Global — Home (Staging)"
        description="E9 Global unifies covert anti-counterfeit protection with secure, role-based engagement and permission-based intelligence."
        keywords={[
          "E9 Global",
          "EncryptorSeal",
          "BEEEP",
          "product authentication",
          "brand protection",
          "secure QR",
          "customer engagement",
        ]}
        ogImage="/og-image.png"
      />

      <ProductSchema product="encryptorseal" />
      <ProductSchema product="beeep" />
      <VideoSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.e9global.com/" },
          { name: "Home (Staging)", url: "https://www.e9global.com/home-staging" },
        ]}
      />

      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl py-8 sm:py-11 lg:py-14 text-center">
              {/* Logo */}
              <div className="flex justify-center">
                <div className="w-full max-w-[780px] sm:max-w-[960px] md:max-w-[1100px]">
                  <img
                    src="/lovable-uploads/E9 Hero Logo.png"
                    alt="E9 Global"
                    className="w-full h-auto object-contain"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Headline */}
              <h1
                className="mt-9 sm:mt-10 font-playfair font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight"
                style={{ lineHeight: "1.06" }}
              >
                Authentication Meets
                <span className="block">Unified Audience Engagement</span>
              </h1>

              {/* Subhead */}
              <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                Powered by BEEEP*, our patented, data-centric, trust-first platform, we securely connect
                physical and digital interactions at scale.
              </p>

              <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                *Brand Experience, Engagement, Encryption Platform
              </p>

              {/* CTAs */}
              <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/beeep"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                >
                  Explore the BEEEP™ Platform
                </Link>

                <Link
                  to="/security-tech-stack"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold
                             bg-blue-500/15 text-blue-300
                             border border-blue-400/30
                             hover:bg-blue-500/25 transition"
                >
                  How We Secure Engagement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who / Why / How */}
        <section className="py-10 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold">
                  Built for trusted engagement across the physical world.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">Who We Are</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    E9 Global is a data-centric MarTech company. We recast products, collectible assets
                    and real-world places as secure, data-rich engagement channels—creating meaningful
                    connections while generating actionable intelligence and new revenue opportunities.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">Why E9 Global</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Because trust and security are what make unified engagement across physical
                    touchpoints possible.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">How We Do It</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Through BEEEP™, our trust-first engagement platform embedded into apps and real-world
                    touchpoints—enabling cohesive, consent-based audience intelligence and monetization
                    at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Touchpoint section */}
        <section>
          <ProductModules />
        </section>

        {/* Success section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Outcomes you can measure—built on trust.
              </h2>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                E9 Global connects authentication, engagement, and permission-based intelligence so
                organizations can prove what’s real—and monetize what’s trusted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20 hover:border-border/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <m.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="font-playfair font-bold text-lg text-foreground mb-2">
                    {m.title}
                  </div>
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    {m.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeStaging;
