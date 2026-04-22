import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="container mx-auto text-center">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text-investor"
            style={{ lineHeight: "1.2" }}
          >
            Let's Talk
          </h2>

          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed max-w-5xl mx-auto">
            Integrity Verification ‚Äî Contact us directly. Talk with our team about the E9 Engagement Platform,
            connecting physical and digital interaction at scale.
          </p>

          <div className="flex justify-center">
            <Link
              to="/book-demo"
              className="group inline-flex items-center space-x-2
                         bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                         hover:from-blue-600 hover:via-purple-700 hover:to-pink-600
                         text-white px-8 py-4 rounded-lg font-semibold text-lg
                         shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>Book a Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

