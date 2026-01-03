import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/90 border-t border-gray-200 py-8 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-gray-700 text-sm">
            © 2026 E9 Global, INC. All rights reserved.
          </div>

          {/* Footer Navigation */}
          <nav className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-cobalt-blue transition-colors text-sm"
            >
              Home
            </Link>

            <Link
              to="/beeep"
              className="text-gray-700 hover:text-cobalt-blue transition-colors text-sm"
            >
              BEEEP<span className="trademark-small">™</span> Platform
            </Link>

            <Link
              to="/security-tech"
              className="text-gray-700 hover:text-cobalt-blue transition-colors text-sm"
            >
              Security Tech
            </Link>

            <Link
              to="/the-team"
              className="text-gray-700 hover:text-cobalt-blue transition-colors text-sm"
            >
              The Team
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
