import React from "react";
import Logo from "../assets/Logo.PNG";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#e4ece4] backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Empty div for spacing */}
          <div className="flex-1"></div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#problem"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Solution
            </a>
            <a
              href="#implementation"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Implementation
            </a>
            <a
              href="#investment"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Investment
            </a>
          </nav>

          {/* Logo on the right */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <img
              src={Logo}
              alt="Human Co-Pilot Logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
