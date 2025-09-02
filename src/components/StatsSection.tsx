
import { DollarSign, Shield, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      value: "$500B+",
      label: "Lost To Counterfeiting Globally",
      description: "Annual economic impact of counterfeit goods.",
      icon: DollarSign
    },
    {
      value: "1 in 4",
      label: "Customers Make Loyalty Decisions Based On Authenticity",
      description: "Trust drives purchasing behavior.",
      icon: Shield
    },
    {
      value: "5.4 Million",
      label: "Jobs At Risk Globally",
      description: "Employment threatened by counterfeit goods.",
      icon: Users
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(147,51,234,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor py-2" style={{ lineHeight: '1.4' }}>
            <span className="gradient-text-blue">Anti-Counterfeit Authentication</span> Meets <span className="gradient-text-purple">Global, Unified</span><br />
            <span className="gradient-text-blue">Audience Engagement</span>.
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Counterfeits are costing more than money — they're costing relationships. 
            EncryptorSeal™ + BEEEP™ repair that connection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center p-8 rounded-3xl card-professional card-hover hover:-translate-y-2 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cobalt-blue to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-playfair font-bold gradient-text-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                
                <p className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.label}
                </p>
                
                <p className="text-foreground/70 text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative elements - remove some, vary others */}
              <div className="absolute -top-4 -right-4 w-16 h-4 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-lg transform rotate-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
