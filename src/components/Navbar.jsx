import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Control dropdown mount/unmount for animation
  useEffect(() => {
    if (isOpen) {
      setShowDropdown(true);
    } else {
      // Delay unmount to allow animation
      const timeout = setTimeout(() => setShowDropdown(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="container containers mx-auto px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logoSmart.png"
            alt="Smart Read Academy"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
            <a href="#programs" className="hover:text-[#4f46e5] transition">
              Programs
            </a>
            <a href="#about" className="hover:text-[#4f46e5] transition">
              About Us
            </a>
            <a href="#admission" className="hover:text-[#4f46e5] transition">
              Admission
            </a>
            <a href="#contact" className="hover:text-[#4f46e5] transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <button className="bg-[#4f46e5] text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      {(isOpen || showDropdown) && (
        <div
          className={`md:hidden px-4 pb-4 origin-top transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}
          `}
          style={{ transitionProperty: "opacity, max-height" }}
        >
          <nav className="space-y-2 text-sm text-gray-700 font-medium">
            <a href="#programs" className="block">
              Programs
            </a>
            <a href="#about" className="block">
              About Us
            </a>
            <a href="#admission" className="block">
              Admission
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
            <a href="#lang" className="block">
              English
            </a>
            <button className="w-full mt-2 bg-[#4f46e5] text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
              INQUIRE NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
