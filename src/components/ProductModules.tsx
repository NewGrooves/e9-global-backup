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
            E9 Global transforms authenticated products and real-world places into
            secure engagement layers—so every interaction delivers trusted access,
            measurable outcomes, and permission-based first-party relationship
            signals.
          </p>

          {/* Strategic pill statements */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground">
              Authenticate what’s real
            </span>
            <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground">
              Control who sees what
            </span>
            <span className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-card/70 border border-border/30 backdrop-blur-sm text-foreground">
              Capture value with permission
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
                <div className="mt-4 text-sm sm:text-base text-foreground font-semibold">
                  Customer Engagement
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint - Hermes.png"
                  alt="Collector engaging with an authenticated asset"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-sm sm:text-base text-foreground font-semibold">
                  Collector Engagement
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint Metro Bus Scan.png"
                  alt="Community engagement through a place-based touchpoint"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-sm sm:text-base text-foreground font-semibold">
                  Community Engagement
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
