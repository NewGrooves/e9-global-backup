import { Eye, Zap, Package, Network } from 'lucide-react';

const ProductModules = () => {
  const modules = [
    {
      icon: Eye,
      title: "Authenticity That's Invisible, But Inarguable",
      description: "Encryption-grade protection verified by smartphones",
      gradient: "from-cobalt-blue to-purple-600",
      bgGradient: "from-blue-50 to-purple-100/50"
    },
    {
      icon: Zap,
      title: "Every Scan Becomes an Experience",
      description: "From Environmental Touchpoints to Intelligent Media",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-100/50"
    },
    {
      icon: Package,
      title: "From Commodities to Brand Discoveries",
      description: "Silent Packaging becomes the gateway to loyalty & data insights",
      gradient: "from-pink-500 to-purple-600",
      bgGradient: "from-pink-50 to-purple-100/50"
    },
    {
      icon: Network,
      title: "The Future of Logistics Trust",
      description: "Tamper-proof logistics and supply chain verification",
      gradient: "from-cobalt-blue to-indigo-600",
      bgGradient: "from-indigo-50 to-blue-100/50"
    }
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor px-4">
            From <span className="gradient-text-blue">Touchpoint</span> to <span className="gradient-text-purple">Trustpoint</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Our Brand Experience, Engagement & Encryption Platform, BEEEP™, transforms every product or environmental touchpoint into an opportunity for value creation.
          </p>
          
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/35d01727-682a-41be-996f-31819b9045d4.png" 
                  alt="Woman using smartphone to engage with QR code at stadium, demonstrating BEEED platform touchpoint interaction"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/c4f5f77a-5e22-4427-adb7-ab44b0b3ef4b.png" 
                  alt="Woman scanning QR code on handbag with smartphone, demonstrating product authentication"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f9e54fa6-5f90-453a-96e0-60815f9ef598.png" 
                  alt="Automotive mechanic using smartphone to verify brake pads packaging in garage, demonstrating product authentication"
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl card-professional card-hover hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${module.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                  <module.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {module.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {module.description}
                </p>
              </div>

              {/* Decorative Elements - varied and simplified */}
              <div className={`absolute -top-6 -right-6 w-24 h-8 bg-cobalt-blue/6 rounded-xl transform -rotate-12`}></div>
              <div className={`absolute -bottom-8 -left-8 w-12 h-12 bg-cobalt-blue/4 rounded-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
