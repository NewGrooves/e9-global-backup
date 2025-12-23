import { TrendingUp, ShieldCheck, Users, Network } from "lucide-react";

const SuccessSection = () => {
  const valueMetrics = [
    {
      icon: TrendingUp,
      stat: "$500B+",
      title: "Global value tied to trusted engagement",
      description:
        "Products, brand equity, loyalty, and data integrity all depend on authenticity and trust.",
    },
    {
      icon: ShieldCheck,
      stat: "100% Permission-Based",
      title: "Engagement data you can actually use",
      description:
        "Opt-in participation tied to real-world intent — not anonymous clicks or scraped data.",
    },
    {
      icon: Users,
      stat: "Every Scan Matters",
      title: "Measurable relationships at scale",
      description:
        "From customers to collectors to communities, every interaction is authenticated and contextual.",
    },
    {
      icon: Network,
      stat: "One Unified System",
      title: "Built to scale across industries",
      description:
        "Enterprise, collectibles, and cities all operate on the same secure engagement foundation.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.12),transparent_65%)]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text-investor mb-6">
            Trust is no longer a cost center —<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>it’s a growth engine.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Counterfeiting erodes revenue, loyalty, and data integrity.  
            <span className="block mt-2">
              E9 Global transforms trusted touchpoints into permission-based engagement,
              measurable insight, and long-term value.
            </span>
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueMetrics.map((metric, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-900/90 border border-gray-800
                         hover:border-cobalt-blue/60 hover:shadow-xl
                         transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-cobalt-blue/20 rounded-xl flex items-center justify-center mb-6
                              group-hover:scale-110 transition-transform">
                <metric.icon className="text-cobalt-blue" size={32} />
              </div>

              <div className="text-3xl font-playfair font-bold text-white mb-2">
                {metric.stat}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {metric.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
