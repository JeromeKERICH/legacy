import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlotModal from '../components/modals/PlotModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPlotModal, setShowPlotModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/listings' },
    { name: 'Legacy Digest', path: '/legacy' },
    { name: 'Contact', path: '/contact' }
  ];

  const handlePlotClick = () => {
    setShowPlotModal(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg backdrop-blur-sm bg-black/95' 
          : 'bg-black shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-8 w-auto md:h-10 lg:h-12" 
                src="/assets/log2.png" 
                alt="Legacy Properties Logo"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="ml-8 flex items-baseline space-x-6 xl:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={handlePlotClick}
                className="bg-amber-300 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              >
                Own a Plot Today
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile CTA Button */}
              <div className="hidden sm:block">
                <button 
                  onClick={handlePlotClick}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Own a Plot
                </button>
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-button text-white hover:text-amber-600 focus:outline-none transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden mobile-menu absolute left-0 right-0 bg-white shadow-xl border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'top-16 md:top-20 opacity-100 visible' 
              : 'top-0 opacity-0 invisible'
          }`}>
            <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg border-b border-gray-100 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handlePlotClick}
                  className="w-full bg-amber-300  text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Own a Plot Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Plot Modal */}
      <PlotModal 
        isOpen={showPlotModal} 
        onClose={() => setShowPlotModal(false)} 
      />
    </>
  );
};

export default Navbar;