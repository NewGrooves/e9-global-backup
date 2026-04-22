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
      title: "Secure by Design",
      description:
        "Covert authentication protects what‚Äôs real ‚Äî across products, assets, and environments.",
    },
    {
      icon: QrCode,
      title: "Role-Based Access via Patented QR",
      description:
        "One code. Multiple permissioned experiences. No added friction.",
    },
    {
      icon: Users,
      title: "Measurable Engagement Outcomes",
      description:
        "Turn real-world access into measurable moments that drive education, loyalty, participation, and conversion.",
    },
    {
      icon: Database,
      title: "Opt-In First-Party Signals",
      description:
        "Capture permission-based relationship signals that organizations own ‚Äî built for compliance, durability, and long-term value.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <SEOHead
        title="E9 Global | Brand Protection and Secure Engagement"
        description="E9 Global unifies covert anti-counterfeit protection with secure, role-based engagement and permission-based intelligence."
        keywords={[
          "E9 Global",
          "EncryptorSeal",
          "E9 Engagement Platform",
          "product authentication",
          "brand protection",
          "secure QR",
          "customer engagement",
        ]}
        ogImage="/og-image.png"
        robots="noindex,nofollow"
      />

      <ProductSchema product="encryptorseal" />
      <VideoSchema />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.e9global.com/" },
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
              <div className="flex justify-center">
                {/* Logo resized by another 10% reduction */}
                <div className="w-full max-w-[176px] sm:max-w-[216px] md:max-w-[248px]">
                  <img
                    src="/lovable-uploads/E9G logo White -Transparent.png"
                    alt="E9 Global"
                    className="w-full h-auto object-contain"
                    loading="eager"
                  />
                </div>
              </div>

              <h1
                className="mt-9 sm:mt-10 font-playfair font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight"
                style={{ lineHeight: "1.06" }}
              >
                Securing Physical-to-Digital
                <span className="block">Engagement at Scale</span>
              </h1>

              <p className="mt-6 text-xl sm:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
               We transform standard, unintelligent QR codes into a company‚Äôs most valuable asset for marketing and secure, monetizable data intelligence.
              </p>

              <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/platform"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                >
                  Explore the E9 Engagement Platform
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">Who We Are</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    E9 Global secures physical-to-digital engagement in the real world.
                    <br /><br />
                    We embed authentication and governance directly into products, assets, and environments ‚Äî
                    turning everyday access points into trusted digital entry points.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">Why E9 Global</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Because digital intelligence built on fragmented, unverified activity creates risk.
                    E9 Global verifies the code, structures the data, and applies governance before
                    information moves beyond the first moment of access.
                    <br /><br /><br />
                    Scan data is generated immediately.
                    <br /><br />
                    Behavioral data is collected only with permission.
                    <br /><br />
                    Trust is built in ‚Äî not layered on later.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="font-playfair font-bold text-lg mb-2">How We Do It</div>
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    <p>
                      Through the E9 Engagement Platform, our secure authentication architecture, embedded directly into apps,
                      products, and real-world touchpoints.
                    </p>

                    <p className="mt-4">Each engagement is:</p>
                    <ul className="mt-2 space-y-1">
                      <li>‚Ä¢ Verified at the source</li>
                      <li>‚Ä¢ Governed by permission</li>
                      <li>‚Ä¢ Structured for clarity</li>
                      <li>‚Ä¢ Compiled into centralized intelligence</li>
                    </ul>

                    <p className="mt-4">
                      No overlays.
                      <br /><br />
                      No fragmented QR tools.
                      <br /><br />
                      Security and control built in from the start.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ProductModules />
        </section>

        {/* Success Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Outcomes You Can Measure ‚Äî Built on Security
              </h2>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                E9 Global connects verification, permission, and structured data ‚Äî so organizations can prove
                what‚Äôs real and act on what‚Äôs trusted.
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

        <section>
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeStaging;

