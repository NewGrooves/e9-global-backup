
import { ArrowRight, Building, Truck, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      icon: Building,
      title: "Maxter Healthcare × ASB",
      category: "Healthcare Supply Chain",
      problem: "Medical device counterfeiting threatening patient safety",
      solution: "EncryptorSeal™ authentication for surgical instruments",
      impact: "100% authentication rate, zero counterfeit incidents",
      status: "Active"
    },
    {
      icon: Truck,
      title: "Great Plains Logistics × TalkFreight × Zayo",
      category: "Logistics & Transportation",
      problem: "Cargo tampering and documentation fraud",
      solution: "Tamper-proof seals with real-time tracking",
      impact: "85% reduction in cargo disputes",
      status: "Scaling"
    },
    {
      icon: ShoppingCart,
      title: "Global Retail Consumer Platform",
      category: "Consumer Retail",
      problem: "Brand dilution through counterfeit products",
      solution: "AI-powered customer engagement platform",
      impact: "Expected 40% increase in brand loyalty",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
            Real Solutions, <span className="text-cobalt-blue">Real Results</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how industry leaders are transforming trust and engagement with E9 Global.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-cobalt-blue/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-cobalt-blue/20 rounded-lg flex items-center justify-center">
                  <caseStudy.icon className="text-cobalt-blue" size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  caseStudy.status === 'Active' ? 'bg-green-500/20 text-green-700' :
                  caseStudy.status === 'Scaling' ? 'bg-blue-500/20 text-blue-700' :
                  'bg-yellow-500/20 text-yellow-700'
                }`}>
                  {caseStudy.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-bold text-black mb-2">
                {caseStudy.title}
              </h3>
              
              <p className="text-cobalt-blue text-sm font-medium mb-4">
                {caseStudy.category}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-black font-semibold mb-1">Challenge</h4>
                  <p className="text-gray-700 text-sm">{caseStudy.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-black font-semibold mb-1">Solution</h4>
                  <p className="text-gray-700 text-sm">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-black font-semibold mb-1">Impact</h4>
                  <p className="text-cobalt-blue text-sm font-medium">{caseStudy.impact}</p>
                </div>
              </div>

              {/* CTA */}
              <Link to="/book-demo">
                <button className="w-full flex items-center justify-center text-cobalt-blue hover:text-black transition-colors group-hover:bg-cobalt-blue/10 py-3 rounded-lg border border-cobalt-blue/20 hover:border-cobalt-blue">
                  <span>Learn More</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
