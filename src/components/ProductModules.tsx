import { Eye, Zap, Package, Network } from "lucide-react";

const ProductModules = () => {
  const modules = [
    {
      icon: Eye,
      title: "Authenticity That's Invisible, But Inarguable",
      description: "Encryption-grade protection verified by smartphones",
      gradient: "from-cobalt-blue to-purple-600",
      bgGradient: "from-blue-50 to-purple-100/50",
    },
    {
      icon: Zap,
      title: "Every Scan Becomes an Experience",
      description: "From Environmental Touchpoints to Intelligent Media",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-100/50",
    },
    {
      icon: Package,
      title: "From Commodities to Brand Discoveries",
      description: "Silent Packaging becomes the gateway to loyalty & data insights",
      gradient: "from-pink-500 to-purple-600",
      bgGradient: "from-pink-50 to-purple-100/50",
    },
    {
      icon: Network,
      title: "The Future of Logistics Trust",
      description: "Tamper-proof logistics and supply chain verification",
      gradient: "from-cobalt-blue to-indigo-600",
      bgGradient: "from-indigo-50 to-blue-100/50",
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor px-4">
            From <span className="gradient-text-blue">Touchpoint</span> to{" "}
            <span className="gradient-text-purple">Trustpoint</span>
          </h2>

          {/* Investor/client-friendly subheading */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            E9 Global turns authenticated products and real-world places into secure engagement layers—so every interaction
            can deliver trusted access, measurable outcomes, and permission-based first-party relationship signals.
          </p>

          {/* 3 capability micro-bullets (replaces the old 4-card block below) */}
          <div className="mt-8 max-w-5xl mx-auto">
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <li className="text-base sm:text-lg text-foreground font-medium">
                Authenticate what’s real
              </li>

              <span className="hidden sm:inline-block text-foreground/40" aria-hidden="true">
                •
              </span>

              <li className="text-base sm:text-lg text-foreground font-medium">
                Control who sees what
              </li>

              <span className="hidden sm:inline-block text-foreground/40" aria-hidden="true">
                •
              </span>

              <li className="text-base sm:text-lg text-foreground font-medium">
                Capture value with permission
              </li>
            </ul>

            <p className="mt-3 text-sm sm:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Covert anti-counterfeit protection, secure role-based QR engagement, and opt-in data signals—designed to scale
              across brands, collectors, and communities.
            </p>
          </div>

          {/* 3 images (with labels below each image) */}
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
                  alt="Collector engaging with an authenticated asset touchpoint"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-sm sm:text-base text-foreground font-semibold">
                  Collector Engagement
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/Touchpoint Metro Bus Scan.png"
                  alt="Community member engaging with a place-based touchpoint"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-sm sm:text-base text-foreground font-semibold">
                  Community Engagement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE: Keeping the existing module cards for now (per your prior layout).
            If you later want them removed entirely, we can delete this block cleanly. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl card-professional card-hover hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${module.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${module.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                >
                  <module.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {module.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed text-lg">{module.description}</p>
              </div>

              {/* Decorative Elements - varied and simplified */}
              <div className="absolute -top-6 -right-6 w-24 h-8 bg-cobalt-blue/6 rounded-xl transform -rotate-12" />
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-cobalt-blue/4 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
