
import { Scan, Clock, Database, Globe } from 'lucide-react';

const SuccessSection = () => {
  const successMetrics = [
    {
      icon: Scan,
      title: "Scannable Products",
      description: "Every item becomes a gateway to digital experiences"
    },
    {
      icon: Clock,
      title: "Real-Time Trust",
      description: "Instant verification builds immediate confidence"
    },
    {
      icon: Database,
      title: "Zero-Party Data Collection",
      description: "Customers willingly share data for personalized value"
    },
    {
      icon: Globe,
      title: "Intelligent Networks",
      description: "Connected ecosystems of authenticated products"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text-investor mb-6">
            Anti-Counterfeit Authentication Meets<br className="hidden sm:block"/>
            <span className="sm:hidden"> </span>Global, Unified Audience Engagement.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This is the UX layer for the physical world — and it's powered by EncryptorSeal™.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cobalt-blue/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cobalt-blue/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <metric.icon className="text-cobalt-blue" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cobalt-blue transition-colors">
                {metric.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
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
