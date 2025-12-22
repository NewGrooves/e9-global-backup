import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";
import {
  Building2,
  Gem,
  MapPin,
  Eye,
  Zap,
  BadgeCheck,
  Network,
  Shield,
  ScanLine,
  Play,
} from "lucide-react";

const HomeStaging = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* SEO / Schema */}
      <SEOHead
        title="E9 Global — Home (Staging)"
        description="Staging revision of the E9 Global homepage."
        keywords={[
          "E9 Global",
          "EncryptorSeal",
          "BEEEP",
          "product authentication",
          "brand protection",
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
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 lg:px-6 bg-background overflow-hidden">
          <div className="container mx-auto relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="text-sm sm:text-base text-foreground/70 mb-3">
                E9 Global
              </div>

              <h1
                className="font-playfair font-bold mb-4"
                style={{ lineHeight: "1.15" }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor">
                  Monetizing Authentic Customer Experiences.
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-foreground/90 mb-6">
                From Touchpoint to Trustpoint.
              </h2>

              <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed max-w-4xl mx-auto">
                Turn any physical or digital touchpoint into a secure, multilingual brand experience—
                while capturing permission-based first-party relationship signals that you can activate
                across your ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* 3 PLATFORM CATEGORIES */}
        <section className="py-12 md:py-16 px-4 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 gradient-text-investor">
                Three platform categories. One unified system.
              </h3>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Choose the layer that matches your real-world environment—brands, collectibles, or
                communities—while operating on the same core BEEEP™ engine.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Enterprise */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-playfair font-bold text-xl">BEEEP Enterprise™</div>
                </div>
                <div className="text-foreground/80 mb-4">
                  For brands, manufacturers, and enterprise organizations.
                </div>

                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Turns products, packaging, and OOH/digital displays into secure engagement channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Permission-based participation to unlock brand-owned first-party data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Trusted engagement tied to authenticated touchpoints (not anonymous traffic)</span>
                  </li>
                </ul>
              </div>

              {/* Collect */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Gem className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-playfair font-bold text-xl">BEEEP Collect™</div>
                </div>
                <div className="text-foreground/80 mb-4">
                  For auction houses and the global collectibles ecosystem.
                </div>

                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Transforms authenticated assets + records into persistent engagement channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Supports provenance continuity across resale, inheritance, and stewardship cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Item-linked storytelling + education that evolves over time</span>
                  </li>
                </ul>
              </div>

              {/* Metro */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-playfair font-bold text-xl">BEEEP Metro™</div>
                </div>
                <div className="text-foreground/80 mb-4">
                  For cities, destinations, venues, and community ecosystems.
                </div>

                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Turns civic and cultural touchpoints into multilingual pathways for engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Built for persistent participation, not one-time interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>Enables guidance, learning, and optional incentives tied to real places</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4 FEATURE CARDS */}
        <section className="py-12 md:py-16 px-4 sm:px-8 lg:px-6 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/70 border border-border/30 rounded-3xl p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-xl mb-2">
                      Visibility into real-world product movement + interaction
                    </div>
                    <div className="text-foreground/85 leading-relaxed">
                      Connect every touchpoint to context—time, place, and behavior—so you can understand what is
                      happening after distribution, not just before it.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 border border-border/30 rounded-3xl p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-xl mb-2">
                      Faster decisions, smarter campaigns, measurable ROI
                    </div>
                    <div className="text-foreground/85 leading-relaxed">
                      Turn verified engagement into signals you can act on—optimization, targeting, and outcomes that
                      can be measured and improved.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 border border-border/30 rounded-3xl p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-xl mb-2">
                      Brand-managed identity, not rented attention
                    </div>
                    <div className="text-foreground/85 leading-relaxed">
                      Permission-based participation creates brand-owned relationships and first-party data—without
                      depending on third-party identifiers.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 border border-border/30 rounded-3xl p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-xl mb-2">
                      Connection across disconnected ecosystems
                    </div>
                    <div className="text-foreground/85 leading-relaxed">
                      Bring brands, channels, and end users into one unified engagement layer—so every interaction
                      reinforces trust and continuity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENCRYPTORSEAL + BEEEP SECTION */}
        <section className="py-12 md:py-16 px-4 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Anti-Counterfeit Authentication Meets Global, Unified Audience Engagement.
              </h3>
              <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
                Counterfeits are costing more than money — they&apos;re costing relationships.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: video / preview placeholder */}
              <div className="bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-playfair font-bold text-xl">
                    Protected by EncryptorSeal™
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-border/30 bg-background/40">
                  <div className="aspect-video flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center p-6">
                      <div className="w-14 h-14 rounded-2xl bg-card/70 border border-border/30 flex items-center justify-center shadow-lg">
                        <Play className="w-7 h-7 text-foreground/80" />
                      </div>
                      <div className="text-foreground/90 font-medium">
                        Video / demo placeholder
                      </div>
                      <div className="text-sm text-foreground/70 max-w-sm">
                        If you have a specific hero video or preview image, replace this block with your asset.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: two benefit cards */}
              <div className="space-y-6">
                <div className="bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-playfair font-bold text-xl mb-2">
                        Invisible Protection
                      </div>
                      <div className="text-foreground/85 leading-relaxed">
                        Secure authentication that is difficult to replicate, easy to verify, and designed to scale
                        across real-world supply chains.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/70 border border-border/30 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <ScanLine className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-playfair font-bold text-xl mb-2">
                        Customer Verification
                      </div>
                      <div className="text-foreground/85 leading-relaxed">
                        Turn verification into an engagement moment—unlocking multilingual experiences and
                        permission-based relationship signals tied to trusted touchpoints.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 border border-border/30 rounded-3xl p-6 shadow-lg">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                    Outcome
                  </div>
                  <div className="text-foreground/90 leading-relaxed">
                    Verified products become verified channels—so trust and engagement compound together.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default HomeStaging;
