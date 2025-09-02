
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="container mx-auto text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor" style={{ lineHeight: '1.2' }}>
            Ready to Grow Your Revenue While <br />Protecting Your Brand?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed max-w-5xl mx-auto">
            Connect with our team to discover how EncryptorSeal™ and BEEEP™ can transform your brand/product security, customer engagement, and data monetization strategies.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="mailto:info@e9global.com"
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
            >
              <Mail size={20} />
              <span>Contact Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
