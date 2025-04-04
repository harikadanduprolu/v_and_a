import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll smoothly to a section if it's a hash link
  const scrollToSection = (path) => {
    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '#');
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/#story' },
    { name: 'Details', path: '/details' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl sm:text-2xl font-medium text-rose-700 hover:text-rose-600 transition-colors"
        >
          V & A
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => scrollToSection(link.path)}
              className={`text-sm font-medium transition-all duration-300 hover:text-rose-600 hover:scale-105 ${
                location.pathname === link.path || (link.path.includes('#') && location.pathname === '/')
                  ? 'text-gray-700'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 animate-slide-down">
          <nav className="flex flex-col items-center space-y-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  scrollToSection(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-all duration-300 hover:text-rose-600 ${
                  location.pathname === link.path || (link.path.includes('#') && location.pathname === '/')
                    ? 'text-gray-700'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
