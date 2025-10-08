
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-4">
        <div className="flex items-center justify-between md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e50861dc-1942-4901-8bfb-2c5fa0c6d7f7.png" 
              alt="E9 Global Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">How It Works</Link>
            <Link to="/beeep" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">BEEEP<span className="trademark-small">™</span></Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">About</Link>
            <Link to="/the-team" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">The Team</Link>
            <Link to="/book-demo" className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">Contact</Link>
            <Link to="/book-demo" className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-4 lg:px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base">
              Book Demo
            </Link>
          </nav>

          {/* Mobile Menu Button - Aligned to right */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 sm:mt-4 pb-6 sm:pb-4 border-t border-border pt-6 sm:pt-4 absolute left-0 right-0 mx-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg z-50">
            <div className="flex flex-col space-y-6 sm:space-y-4 items-center">
              <Link 
                to="/" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/how-it-works" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/beeep" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                BEEEP<span className="trademark-small">™</span>
              </Link>
              <Link 
                to="/about" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/the-team" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                The Team
              </Link>
              <Link 
                to="/book-demo" 
                className=className="text-white hover:text-primary transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/book-demo" 
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
