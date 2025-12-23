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

          {/* Strategic micro-bullets */}
          <div className="mt-8 max-w-5xl mx-auto">
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <li className="text-base sm:text-lg text-foreground font-medium">
                Authenticate what’s real
              </li>

              <span className="hidden sm:inline-block text-foreground/40">•</span>

              <li className="text-base sm:text-lg text-foreground font-medium">
                Control who sees what
              </li>

              <span className="hidden sm:inline-block text-foreground/40">•</span>

              <li className="text-base sm:text-lg text-foreground font-medium">
                Capture value with permission
              </li>
            </ul>

            <p className="mt-3 text-sm sm:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Covert anti-counterfeit protection, secure role-based QR engagement,
              and opt-in data signals—designed to scale across brands, collectors,
              and communities.
            </p>
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
                  src="/lovable-uploads/Touchpoint-Collect.png"
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
