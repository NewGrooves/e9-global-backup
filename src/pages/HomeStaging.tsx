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
        {/* HERO (no inner card, premium spacing/typography, mobile-safe) */}
        <section className="relative overflow-hidden">
          {/* Ambient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/4 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-6xl py-14 sm:py-20 lg:py-24">
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
                  alt="E9 Global"
                  className="h-36 sm:h-48 md:h-56 w-auto"
                  loading="eager"
                />
              </div>

              {/* Optional brand line (kept subtle) */}
              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm text-foreground/70 tracking-wide">
                  Monetizing Authentic Customer Experiences.
                </p>
              </div>

              {/* Headline */}
              <div className="mt-10 text-center">
                <h1
                  className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight"
                  style={{ lineHeight: "1.08" }}
                >
                  Authenticity, secure engagement,
                  <span className="block">and intelligence—unified.</span>
                </h1>

                {/* Subhead */}
                <p className="mt-6 text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  E9 Global combines covert anti-counterfeit protection (EncryptorSeal™) with secure
                  GS1 QR engagement (BEEEP™) to turn every trusted touchpoint into role-specific
                  access, measurable outcomes, and permission-based first-party relationship
                  signals.
                </p>

                {/* Micro bullets (premium, low-noise, investor-friendly) */}
                <div className="mt-8 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm px-5 py-4">
                      <div className="text-sm font-semibold text-foreground">Secure access</div>
                      <div className="mt-1 text-sm text-foreground/75">
                        Role-specific experiences across stakeholders
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm px-5 py-4">
                      <div className="text-sm font-semibold text-foreground">Permission-based data</div>
                      <div className="mt-1 text-sm text-foreground/75">
                        Brand-owned signals tied to real-world intent
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm px-5 py-4">
                      <div className="text-sm font-semibold text-foreground">Measured outcomes</div>
                      <div className="mt-1 text-sm text-foreground/75">
                        Analytics grounded in touchpoints, not clicks
                      </div>
                    </div>
                  </div>
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

                {/* Bottom proof line */}
                <p className="mt-8 text-sm sm:text-base text-foreground/70 max-w-3xl mx-auto">
                  Built for brands, collectibles, and place-based ecosystems—without forcing
                  complexity on the user.
                </p>
              </div>
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
