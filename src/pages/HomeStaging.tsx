// src/pages/HomeStaging.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessSection from "../components/SuccessSection"; // ✅ swapped in
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
        {/* HERO (logo-forward, centered, no asymmetry) */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
          {/* soft background accents */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              {/* Hero Card */}
              <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-3xl shadow-xl px-6 sm:px-10 py-10 sm:py-12">
                {/* Logo */}
                <div className="flex justify-center mb-8 sm:mb-10">
                  <img
                    src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
                    alt="E9 Global"
                    className="h-32 sm:h-40 md:h-48 w-auto"
                    loading="eager"
                  />
                </div>

                {/* Headline */}
                <div className="text-center">
                  <h1
                    className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
                    style={{ lineHeight: "1.15" }}
                  >
                    Authenticity, secure engagement, and intelligence—unified.
                  </h1>

                  <p className="mt-5 text-base sm:text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                    E9 Global combines covert anti-counterfeit protection (EncryptorSeal™) with
                    secure GS1 QR engagement (BEEEP™) to turn every trusted touchpoint into
                    role-specific access, measurable outcomes, and permission-based first-party
                    relationship signals.
                  </p>

                  {/* Primary CTAs */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="/beeep"
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                    >
                      Explore BEEEP Platforms
                    </a>
                    <a
                      href="/book-demo"
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-border/60 bg-background/40 hover:bg-background/60 transition"
                    >
                      Book a Demo
                    </a>
                  </div>

                  {/* Optional micro-proof line */}
                  <p className="mt-6 text-sm sm:text-base text-foreground/70">
                    Built for brands, collectibles, and place-based ecosystems—without forcing complexity on the user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core sections */}
        <section>
          <ProductModules />
        </section>

        {/* ✅ swapped: this is the section that will change your “statistics boxes” */}
        <section>
          <SuccessSection />
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
