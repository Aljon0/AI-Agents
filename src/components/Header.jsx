import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#e4ece4] backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-center">
            <a
              href="#problem"
              className="text-black hover:text-blue-600 transition-colors text-sm lg:text-base"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-black hover:text-blue-600 transition-colors text-sm lg:text-base"
            >
              Solution
            </a>
            <a
              href="#implementation"
              className="text-black hover:text-blue-600 transition-colors text-sm lg:text-base"
            >
              Implementation
            </a>
            <a
              href="#investment"
              className="text-black hover:text-blue-600 transition-colors text-sm lg:text-base"
            >
              Investment
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Human Co-Pilot Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-3">
            <a
              href="#problem"
              onClick={closeMenu}
              className="block text-black hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-100"
            >
              Problem
            </a>
            <a
              href="#solution"
              onClick={closeMenu}
              className="block text-black hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-100"
            >
              Solution
            </a>
            <a
              href="#implementation"
              onClick={closeMenu}
              className="block text-black hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-100"
            >
              Implementation
            </a>
            <a
              href="#investment"
              onClick={closeMenu}
              className="block text-black hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-100"
            >
              Investment
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
