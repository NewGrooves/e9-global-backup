import Header from "../components/Header";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import ProductModules from "../components/ProductModules";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";

const HomeStaging = () => {
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
        {/* HERO (simplified, premium, not wordy, no duplicate tagline) */}
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

              {/* Single, non-repeating tagline (keep subtle) */}
              <p className="mt-3 text-sm sm:text-base text-foreground/70">
                Monetizing authentic customer experiences.
              </p>

              {/* Headline */}
              <h1
                className="mt-10 font-playfair font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight"
                style={{ lineHeight: "1.06" }}
              >
                Authenticity and engagement,
                <span className="block">unified.</span>
              </h1>

              {/* Subhead (shorter, cleaner, less jargon) */}
              <p className="mt-6 text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mx-auto">
                EncryptorSeal™ protects what’s real. BEEEP™ turns every verified touchpoint into secure
                access, measurable engagement, and permission-based first-party signals.
              </p>

              {/* Calm “value chips” (optional, but far less clutter than cards) */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="rounded-full border border-border/35 bg-card/15 px-4 py-2 text-sm text-foreground/80">
                  Role-specific access
                </span>
                <span className="rounded-full border border-border/35 bg-card/15 px-4 py-2 text-sm text-foreground/80">
                  Permission-based data
                </span>
                <span className="rounded-full border border-border/35 bg-card/15 px-4 py-2 text-sm text-foreground/80">
                  Real-world analytics
                </span>
              </div>

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

              {/* Bottom line (optional; keep or remove) */}
              <p className="mt-8 text-sm sm:text-base text-foreground/65 max-w-3xl mx-auto">
                Built for brands, collectibles, and communities—without adding friction for the user.
              </p>
            </div>
          </div>
        </section>

        {/* Core sections */}
        <section>
          <ProductModules />
        </section>

        <section>
          <StatsSection />
        </section>

        <section>
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeStaging;
