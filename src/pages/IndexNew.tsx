import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModules from "../components/ProductModules";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { ProductSchema, VideoSchema, BreadcrumbSchema } from "../components/StructuredData";
import { ShieldCheck, QrCode, Database, Users } from "lucide-react";

const IndexNew = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [buildId, setBuildId] = useState<string>("");

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

  useEffect(() => {
    console.log("IndexNew component mounted");
    try {
      fetch("/build-id.txt")
        .then((res) => res.text())
        .then((id) => {
          console.log("Build ID loaded:", id);
          setBuildId(id);
        })
        .catch((err) => {
          console.log("Build ID fetch error:", err);
          setBuildId("Unknown");
        });
    } catch (err) {
      console.error("Error in build ID fetch:", err);
      setBuildId("Error");
    }
  }, []);

  console.log("IndexNew rendering, buildId:", buildId);

  // Incremental component restoration
  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Step 1: Basic content - WORKING */}
      <main className="pt-24">
        {/* Hero Section */}
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

        {/* Step 3: Add AboutSection - Test iframe (highest risk) */}
        <AboutSection />

        {/* Step 4: Add ProductModules - Test image assets */}
        <ProductModules />

        {/* Step 5: Success section (replaces StatsSection) */}
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

        {/* Step 6: Add ContactCTA */}
        <ContactCTA />
      </main>

      {/* Footer - should be safest component */}
      <Footer />

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
        ]}
      />
    </div>
  );
};

export default IndexNew;
