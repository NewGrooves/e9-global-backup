import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import ProductModules from "../components/ProductModules";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";

const HomeStaging = () => {
  const [buildId, setBuildId] = useState<string>("");

  useEffect(() => {
    // Optional build marker for debugging deploys
    fetch("/build-id.txt")
      .then((res) => res.text())
      .then(setBuildId)
      .catch(() => setBuildId("Unknown"));
  }, []);

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
        {/* Build ID marker (optional) */}
        {/* Hero */}
        <section className="relative py-16 sm:py-20 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <img
              src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
              alt="E9 Global - Monetizing Authentic Customer Experiences"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </section>

        {/* Core sections */}
        <section id="about-section">
          <AboutSection />
        </section>

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
