import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ClosingCTA = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text-investor mb-6 py-2"
            style={{ lineHeight: "1.3" }}
          >
            Packaging Was Silent for 100 Years.
            <br />
            Let&apos;s Give It a Voice.
          </h2>

          <p className="text-xl text-secondary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join E9 Global in creating a world where authenticity is the default—and every product tells its story.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/book-demo"
              className="group inline-flex items-center space-x-3
                         bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                         hover:from-blue-600 hover:via-purple-700 hover:to-pink-600
                         text-white px-8 py-4 rounded-2xl
                         font-semibold text-lg shadow-2xl hover:shadow-3xl
                         transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>Book a Demo</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-white/3 rounded-3xl transform rotate-45" />
    </section>
  );
};

export default ClosingCTA;
