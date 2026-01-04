import React, { useState } from 'react';

/**
 * Navbar component built with React and Tailwind CSS.
 * Supports mobile menu toggling and glassmorphism effect.
 */
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Tools', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact us', href: '#' },
  ];

  return (
    <nav className="w-full bg-white/30 backdrop-blur-md sticky top-0 z-50 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-black cursor-pointer">
              logo
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-medium text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95">
              Upgrade
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-black/5 focus:outline-none"
            >
              <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-black/5 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <button className="w-full bg-black text-white px-6 py-3 rounded-xl font-bold">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;

