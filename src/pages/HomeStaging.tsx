import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModules from "../components/ProductModules";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";
import { ShieldCheck, QrCode, Database, Users } from "lucide-react";

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
          {/* Ambient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl py-8 sm:py-11 lg:py-14 text-center">
              {/* Logo — width-driven, aspect-safe */}
              <div className="flex justify-center">
                <div className="w-full max-w-[520px] sm:max-w-[640px] md:max-w-[760px]">
                  <img
                    src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
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
                Authenticity and engagement,
                <span className="block">unified.</span>
              </h1>

              {/* Subhead (correct size, single instance) */}
              <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                Covert anti-counterfeit protection, secure role-based QR engagement,
                and opt-in data signals—designed to scale across brands, collectors,
                and communities.
              </p>

              {/* CTAs */}
              <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="/beeep"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                >
                  Explore BEEEP Platforms
                </a>
                <a
                  href="/book-demo"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold border border-border/60 bg-background/40 hover:bg-background/60 transition"
                >
                  Book a Demo
                </a>
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
                enterprises can prove what’s real—and monetize what’s trusted.
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
