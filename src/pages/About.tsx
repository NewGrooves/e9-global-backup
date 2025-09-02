import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Shield, Zap, Target, Users, Lock, Smartphone, Eye, BarChart3 } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDoFeatures = [
    {
      icon: Shield,
      title: "Anti-Counterfeit Technology", 
      description: "EncryptorSeal™ provides invisible authentication that protects your brand from counterfeiting."
    },
    {
      icon: Smartphone,
      title: "Brand Experience Platform",
      description: "BEEEP™ delivers remarkable direct-to-customer experiences at the moment of scan."
    },
    {
      icon: BarChart3,
      title: "Maximize Data ROI",
      description: "We generate valuable customer data intelligence that drives revenue."
    }
  ];

  const howWeDoItSteps = [
    {
      icon: Target,
      title: "PaaS Licensing",
      description: "We license our proprietary, fully integrated brand protection and customer engagement platform as a service (PaaS) for seamless integration into packaging, labels, products and physical branded surfaces."
    },
    {
      icon: Eye,
      title: "Supply Chain Verification",
      description: "Clients and supply chain stakeholders use a branded private app to verify our invisible anti-counterfeit latent image encoding."
    },
    {
      icon: Lock,
      title: "Customer Validation",
      description: "Customers scan secure, serialized QR codes for instantaneous authenticity confirmation and detection of gray market activity with no app needed"
    },
    {
      icon: Users,
      title: "Branded Experience",
      description: "Targeted, immersive content delivered while capturing zero-party data."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <SEOHead 
        title="About E9 Global - Leading Product Authentication & Engagement Solutions"
        description="Learn about E9 Global's innovative approach to brand protection and customer engagement through EncryptorSeal™ and BEEEP™ technologies. From trust to transformation."
        keywords={["about E9 Global", "brand protection company", "customer engagement platform", "anti-counterfeit technology", "EncryptorSeal", "BEEEP platform"]}
        canonical="https://www.e9global.com/about"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.e9global.com/" },
        { name: "About", url: "https://www.e9global.com/about" }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pb-24 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        
        <div className="container mx-auto text-center relative">
          <h1 className="font-playfair font-bold mb-6 text-center" style={{ lineHeight: '1.5' }}>
            <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor block mb-1 sm:mb-3 py-1 sm:py-2">
              About E9 Global
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 px-3 sm:px-8 lg:px-6 bg-background relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-8 gradient-text-investor">
                  Who We Are
                </h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    As data-centric MarTech innovators, our proprietary fusion of proven anti-counterfeit brand protection and emerging AI-driven customer engagement technologies give brands entirely new ways to authentically connect with their customers while opening up unprecedented revenue channels.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    We enable customer interaction through real-world touchpoints—product packaging, branded surfaces, and beyond—transforming them into gateways for customer acquisition, brand loyalty, and aggregated data intelligence based on unified audience engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
                
                <div className="grid grid-cols-2 gap-6 relative">
                  <div className="bg-card/80 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                    <div className="w-16 h-16 icon-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-lg leading-tight">Brand Protection</h3>
                  </div>
                  <div className="bg-card/80 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                    <div className="w-16 h-16 icon-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-lg leading-tight">Brand Strategy</h3>
                  </div>
                  <div className="bg-card/80 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                    <div className="w-16 h-16 icon-gradient-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-lg leading-tight">Customer Engagement</h3>
                  </div>
                  <div className="bg-card/80 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                    <div className="w-16 h-16 icon-gradient-quaternary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-lg leading-tight">Data Monetization</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-text-investor">
              What We Do
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-foreground/90 leading-relaxed">
                We empower brands to securely bridge the physical and digital worlds with our proprietary anti-counterfeit technology, EncryptorSeal™, and our Brand Experience, Engagement, Encryption Platform, BEEEP™.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whatWeDoFeatures.map((feature, index) => (
              <div key={index} className="group relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 icon-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center gradient-hover-text">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-24 px-3 sm:px-8 lg:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 gradient-text-investor">
              How We Do It
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {howWeDoItSteps.map((step, index) => (
                <div key={index} className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-l-4 border-l-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-start space-x-6 relative">
                    <div className="icon-gradient-primary p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 gradient-hover-text">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Hidden section - When clients scan... */}
          </div>
        </div>
      </section>

      {/* E9 Global's Vision Section */}
      <section className="py-24 px-3 sm:px-8 lg:px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/75c2c253-50a3-450a-b33d-1b29f5e20791.png" 
                alt="E9 Global's Vision - Connected Technology Platform for Product Authentication and Customer Engagement" 
                className="w-3/4 h-auto rounded-3xl shadow-2xl mx-auto"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 gradient-text-investor">
                  E9 Global's Vision
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground/80 mb-8">
                  From Trust To Transformation
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  At E9 Global, authenticity is our highest value - because we believe the quality of life itself depends on it. We bring this principle to every conversation and every partnership, empowering companies to build trust with their customers - not just through transparency, but by truly meeting individual needs. When brands lead with authenticity, everyone benefits.
                </p>
                
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  E9 Global isn't just protecting the supply chain — it's redefining how brands and consumers connect in the intelligent economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default About;
