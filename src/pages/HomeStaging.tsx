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
        description="E9 Global unifies covert authentication and permission-based engagement to turn real-world touchpoints into trusted, revenue-driving relationship signals."
        keywords={[
          "E9 Global",
          "EncryptorSeal",
          "BEEEP",
          "product authentication",
          "brand protection",
          "customer engagement",
          "GS1",
          "secure QR",
          "biometrics",
          "blockchain royalties",
          "first-party data",
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
        <section className="relative py-14 sm:py-18 px-4 sm:px-6 bg-background overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Message */}
              <div className="text-left">
                <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
                  Turn every touchpoint into a{" "}
                  <span className="gradient-text-investor">trusted relationship signal</span>.
                </h1>

                <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl mb-7">
                  E9 Global unifies covert anti-counterfeit authentication and permission-based engagement—so brands,
                  collectors, and communities can verify authenticity, control access, capture first-party signals, and
                  drive measurable outcomes.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-lg border border-border/30 bg-card/80 hover:bg-card transition-colors"
                  >
                    Book a demo
                  </a>

                  <a
                    href="/beeep"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-95 transition-opacity"
                  >
                    Explore BEEEP platforms
                  </a>
                </div>

                <div className="mt-7 bg-card/70 border border-border/30 rounded-3xl p-5 shadow-lg max-w-2xl">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                    What we deliver
                  </div>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Verified authenticity across supply chain and end users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Role-specific access and permission-based participation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>Brand-owned first-party relationship signals tied to real-world touchpoints</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Brand image (kept) */}
              <div className="flex justify-center lg:justify-end">
                <div className="text-center max-w-5xl mx-auto">
                  <img
                    src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
                    alt="E9 Global - Monetizing Authentic Customer Experiences"
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SUMMARY */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
                Authentication + engagement, built as one system
              </h2>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Most solutions stop at “tracking.” E9 Global turns verified touchpoints into secure experiences—and
                converts permission-based participation into brand-owned relationship signals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">Pillar 1</div>
                <div className="font-playfair font-bold text-xl mb-2">Covert Authentication</div>
                <p className="text-foreground/90 leading-relaxed">
                  EncryptorSeal™ provides invisible, encryption-grade protection to detect counterfeits and control
                  trusted verification across stakeholders.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">Pillar 2</div>
                <div className="font-playfair font-bold text-xl mb-2">Secure Touchpoint Access</div>
                <p className="text-foreground/90 leading-relaxed">
                  Patented GS1-compatible secure QR enables role-specific access—so each scan can unlock the right
                  workflow, content, or verification step.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">Pillar 3</div>
                <div className="font-playfair font-bold text-xl mb-2">Permission-Based Data & Growth</div>
                <p className="text-foreground/90 leading-relaxed">
                  BEEEP™ turns opt-in participation into first-party relationship signals, analytics, and revenue-driving
                  engagement—without sacrificing trust.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/beeep"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-95 transition-opacity"
              >
                See the three BEEEP platforms
              </a>
              <div className="mt-3 text-sm text-foreground/70">
                Enterprise, Collect, and Metro—same core engine, configured for different environments.
              </div>
            </div>
          </div>
        </section>

        {/* WHY DIFFERENT / STACK */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
                  Why E9 Global is different
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  We don’t bolt marketing onto security—or bolt security onto marketing. We engineered a unified system
                  where authenticity, access control, and engagement reinforce each other.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Capabilities */}
                <div className="bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-4">
                    Core capabilities
                  </div>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>
                        <strong>EncryptorSeal™ covert anti-counterfeit</strong> for trusted verification and counterfeit
                        detection.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>
                        <strong>Patented GS1 secure QR</strong> enabling role-specific access and secure workflows.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                      <span>
                        <strong>Biometric scanning</strong> for high-security authentication and sensitive use cases.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>
                        <strong>Blockchain-based royalties</strong> for collectibles and automated secondary-market
                        participation.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span>
                        <strong>Permission-based data enhancement</strong> to increase revenue, retention, and valuation
                        leverage.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right: Simple “How it works” */}
                <div className="bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-4">
                    How it works (simple)
                  </div>

                  <div className="space-y-4 text-foreground/90">
                    <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                      <div className="font-playfair font-bold text-lg mb-1">1) Verify</div>
                      <div className="text-sm leading-relaxed">
                        Authentication confirms what’s real—across stakeholders and end users.
                      </div>
                    </div>

                    <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                      <div className="font-playfair font-bold text-lg mb-1">2) Control access</div>
                      <div className="text-sm leading-relaxed">
                        Secure QR + role rules deliver the right content, workflow, or proof—based on who is scanning.
                      </div>
                    </div>

                    <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                      <div className="font-playfair font-bold text-lg mb-1">3) Convert engagement</div>
                      <div className="text-sm leading-relaxed">
                        Opt-in participation becomes measurable, permission-based first-party relationship signals.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/how-it-works"
                      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-lg border border-border/30 bg-card/80 hover:bg-card transition-colors w-full"
                    >
                      See how it works
                    </a>
                  </div>
                </div>
              </div>

              {/* Investor-style outcomes */}
              <div className="mt-8 bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-3">
                  Outcomes (what this enables)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-foreground/90">
                  <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                    <div className="font-playfair font-bold text-lg mb-1">Reduce risk</div>
                    <div className="text-sm leading-relaxed">
                      Detect counterfeits, tighten distribution control, and protect trust.
                    </div>
                  </div>
                  <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                    <div className="font-playfair font-bold text-lg mb-1">Increase revenue</div>
                    <div className="text-sm leading-relaxed">
                      Convert touchpoints into engagement loops that drive loyalty and conversion.
                    </div>
                  </div>
                  <div className="bg-background/60 border border-border/30 rounded-2xl p-4">
                    <div className="font-playfair font-bold text-lg mb-1">Improve valuation</div>
                    <div className="text-sm leading-relaxed">
                      Build durable first-party data assets through permission-based relationship signals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing modules (kept) */}
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
