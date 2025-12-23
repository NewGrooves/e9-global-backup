import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModules from "../components/ProductModules";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";
import { ShieldCheck, KeyRound, Database, LineChart, Globe2, Sparkles } from "lucide-react";

const HomeStaging = () => {
  const metrics = [
    {
      icon: ShieldCheck,
      title: "Covert authenticity at scale",
      description:
        "EncryptorSeal™ protects products and packaging with invisible, copy-proof verification—built for real-world enforcement and trust.",
    },
    {
      icon: KeyRound,
      title: "Role-specific secure access",
      description:
        "GS1-aligned secure QR workflows enable different experiences for customers, operators, and partners—without exposing sensitive pathways.",
    },
    {
      icon: Database,
      title: "Permission-based first-party signals",
      description:
        "BEEEP™ enables opt-in relationship signals and data enrichment—client-owned, compliant, and tied to authenticated touchpoints.",
    },
    {
      icon: LineChart,
      title: "Real-world analytics (not clicks)",
      description:
        "Measure engagement grounded in time, place, and touchpoint context—connecting physical behavior to outcomes and ROI.",
    },
    {
      icon: Globe2,
      title: "Multilingual engagement by design",
      description:
        "Deliver secure, context-preserving experiences globally—supporting brands, collectibles, and place-based ecosystems.",
    },
    {
      icon: Sparkles,
      title: "Programmable value layers",
      description:
        "Enable high-security and high-value workflows—like biometric verification and automated royalty logic—when the use case demands it.",
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
          "counterfeit prevention",
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
        {/* HERO (cleaned: remove duplicate tagline, chips, and bottom line) */}
        <section className="relative overflow-hidden">
          {/* Ambient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl py-12 sm:py-16 lg:py-20 text-center">
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
                  alt="E9 Global"
                  className="h-44 sm:h-56 md:h-64 w-auto"
                  loading="eager"
                />
              </div>

              {/* Headline */}
              <h1
                className="mt-10 font-playfair font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight"
                style={{ lineHeight: "1.06" }}
              >
                Authenticity and engagement,
                <span className="block">unified.</span>
              </h1>

              {/* Subhead */}
              <p className="mt-6 text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mx-auto">
                EncryptorSeal™ protects what’s real. BEEEP™ turns every verified touchpoint into secure
                access, measurable engagement, and permission-based first-party signals.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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

        {/* Touchpoint to Trustpoint (images section) */}
        <section>
          <ProductModules />
        </section>

        {/* UPDATED “Success / Metrics” SECTION (replaces old anti-counterfeit stats) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(59,130,246,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_55%,rgba(147,51,234,0.08),transparent_70%)]" />

          <div className="container mx-auto relative">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Trust infrastructure for the physical world.
              </h2>
              <p className="text-base sm:text-lg text-foreground/85 max-w-3xl mx-auto leading-relaxed">
                E9 Global combines covert authentication, secure GS1 QR engagement, and permission-based
                intelligence—so brands can protect authenticity, deepen relationships, and measure real-world outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-7 shadow-lg border border-border/20 hover:border-border/40 transition-colors"
                  >
                    <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-playfair font-bold text-foreground mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Optional: single-line investor-friendly clarification */}
            <div className="mt-10 text-center">
              <p className="text-sm sm:text-base text-foreground/70">
                Built to support brands, collectors, and communities—without forcing complexity on the end user.
              </p>
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
