
import { Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="pt-1 sm:pt-2 pb-12 sm:pb-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-playfair font-bold gradient-text-investor pb-4" style={{ lineHeight: '1.4' }}>
              A Dual-Layer of <span className="gradient-text-blue">Authentication & Engagement</span>
            </h2>
            <p className="text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              EncryptorSeal™ + BEEEP™ transform every product and branded surface into a secure, data-rich channel - protecting brands, engaging customers, <br/>powering trust and driving revenue.
            </p>
          </div>
          
          <div className="relative group">
            <div className="rounded-3xl shadow-2xl overflow-hidden aspect-video bg-white transform transition-all duration-500 group-hover:shadow-3xl">
              <iframe 
                src="https://player.vimeo.com/video/1113735874?app_id=122963"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="EncryptorSeal™ Product Demo - See How E9 Global Transforms Product Authentication"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            {/* Floating decorative elements - different shapes */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl transform rotate-45"></div>
            <div className="absolute -top-8 -left-8 w-20 h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="group flex items-start space-x-6 p-6 card-professional card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">Invisible Protection</h3>
                <p className="text-foreground/80 leading-relaxed">Our <b>invisible</b>, battle-tested, copy-proof encryption-grade authentication technology is verified by supply chain stakeholders using our app</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-6 card-professional card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Smartphone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">Customer Verification</h3>
                <p className="text-foreground/80 leading-relaxed">Customers instantly verify authenticity by scanning our secure, <b>visible</b> QR codes and also while activating BEEEP's™ AI-Powered engagement and data analytic tools. BEEEP™ stands for <b>B</b>rand <b>E</b>xperience, <b>E</b>ngagement & <b>E</b>ncryption <b>P</b>latform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:block space-y-12">
          {/* Centered Heading and Subheading */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text-investor pb-4" style={{ lineHeight: '1.4' }}>
              A Dual-Layer of <span className="gradient-text-blue">Authentication & Engagement</span>
            </h2>
            <p className="text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              EncryptorSeal™ + BEEEP™ transform every product and branded surface into a secure, data-rich channel - protecting brands, engaging customers, <br/>powering trust and driving revenue.
            </p>
          </div>
          
          {/* Video and Features Grid - Perfectly aligned */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Video */}
            <div className="relative group">
              <div className="rounded-3xl shadow-2xl overflow-hidden aspect-video bg-white transform transition-all duration-500 group-hover:shadow-3xl">
                <iframe 
                  src="https://player.vimeo.com/video/1113735874?app_id=122963"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="EncryptorSeal™ Product Demo - See How E9 Global Transforms Product Authentication"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Floating decorative elements - different shapes */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl transform rotate-45"></div>
              <div className="absolute -top-8 -left-8 w-20 h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
            </div>

            {/* Right Column - Features aligned with video */}
            <div className="space-y-6">
              <div className="group flex items-start space-x-6 p-6 card-professional card-hover">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Invisible Protection</h3>
                  <p className="text-foreground/80 leading-relaxed">Our <b>invisible</b>, battle-tested, copy-proof encryption-grade authentication technology is verified by supply chain stakeholders using our app</p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 card-professional card-hover">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Customer Verification</h3>
                  <p className="text-foreground/80 leading-relaxed">Customers instantly verify authenticity by scanning our secure, <b>visible</b> QR codes and also while activating BEEEP's™ AI-Powered engagement and data analytic tools. BEEEP™ stands for <b>B</b>rand <b>E</b>xperience, <b>E</b>ngagement & <b>E</b>ncryption <b>P</b>latform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
