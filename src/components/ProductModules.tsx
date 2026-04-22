const ProductModules = () => {
  return (
    <section
      id="products"
      className="py-12 md:py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          {/* Section headline */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor px-4">
            From <span className="gradient-text-blue">Touchpoint</span> to{" "}
            <span className="gradient-text-purple">Trustpoint</span>
          </h2>

          {/* Core positioning statement */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            The E9 Engagement Platform transforms real-world touchpoints into secure digital entry points -- ensuring every
scan begins with verification and every outcome is governed by permission.
          </p>

          {/* Strategic pill statements */}
<div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
  <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
    <span>Verify at the source</span>
  </span>

  <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
    <span>Control access with built-in permissions</span>
  </span>

  <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
    <span>Generate structured, secure verified data</span>
  </span>
</div>


          {/* Engagement imagery */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint-Enterprise.png"
                  alt="Customer engaging with a secure QR touchpoint"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-base sm:text-lg text-foreground font-semibold">
                  Product & Retail Environments
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint - Hermes.png"
                  alt="Collector engaging with an authenticated asset"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-base sm:text-lg text-foreground font-semibold">
                  High-Value Asset Markets
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint Metro Bus Scan.png"
                  alt="Community engagement through a place-based touchpoint"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-base sm:text-lg text-foreground font-semibold">
                  Shared & Institutional Environments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
