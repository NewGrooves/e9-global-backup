import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import ProductModules from "../components/ProductModules";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";

const HomeStagingPage = () => {
  const [buildId, setBuildId] = useState<string>("");
  const [safeMode, setSafeMode] = useState<boolean>(true);

  useEffect(() => {
    fetch("/build-id.txt")
      .then((res) => res.text())
      .then((id) => setBuildId(id))
      .catch(() => setBuildId("Unknown"));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* SEO / Structured Data */}
      <SEOHead
        title="E9 Global - Monetizing Authentic Customer Experiences."
        description="Transform product authentication and customer engagement with EncryptorSeal™ and BEEEP™. Secure, scalable solutions for brand protection and revenue growth."
        keywords={[
          "product authentication",
          "brand protection",
          "customer engagement",
          "EncryptorSeal",
          "BEEEP",
          "security technology",
          "anti-counterfeiting",
          "revenue growth",
        ]}
        ogImage="/og-image.png"
      />
      <ProductSchema product="encryptorseal" />
      <ProductSchema product="beeep" />
      <VideoSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.e9global.com/" },
          { name: "Home Staging", url: "https://www.e9global.com/home-staging" },
        ]}
      />

      <Header />

      <main className="pt-24">
        {/* Optional build badge (helps confirm deploy is current) */}
        {buildId && (
          <div className="fixed top-24 left-4 z-50 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            Build: {buildId}
          </div>
        )}

        {/* Safe Mode toggle (debug) */}
        <div className="container mx-auto px-4 sm:px-6 mb-6">
          <button
            type="button"
            onClick={() => setSafeMode((v) => !v)}
            className="text-sm underline text-foreground/80 hover:text-foreground"
          >
            {safeMode ? "Show full sections" : "Show hero only (safe mode)"}
          </button>
        </div>

        {/* Hero Section (should always render) */}
        <section className="relative py-20 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/92326d7f-5c6a-4075-85f0-fd776e75240a.png"
              alt="E9 Global - Monetizing Authentic Customer Experiences"
              className="mx-auto max-w-full h-auto transform scale-[1.5]"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </section>

        {/* These sections are the most likely to cause a blank page if one crashes */}
        {!safeMode && (
          <>
            <AboutSection />
            <ProductModules />
            <StatsSection />
            <ContactCTA />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HomeStagingPage;
