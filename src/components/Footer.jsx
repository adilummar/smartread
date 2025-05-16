import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  // FaXTwitter,
  FaCcVisa,
  FaPaypal,
  FaCcMastercard,
} from "react-icons/fa";
import { useOnScreen } from "./useOnScreen"; // import the hook here

const Footer = () => {
  // Create refs and visibility states for each major section
  const [logoRef, logoVisible] = useOnScreen();
  const [programsRef, programsVisible] = useOnScreen();
  const [linksRef, linksVisible] = useOnScreen();
  const [newsletterRef, newsletterVisible] = useOnScreen();
  const [bottomRef, bottomVisible] = useOnScreen();

  return (
    <footer className="bg-[#0d1117] text-gray-300 px-6 md:px-16 py-10">
      <div className="containers mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div
          ref={logoRef}
          className={`transition-all animate-fade-up ${logoVisible ? "active" : ""}`}
        >
          <h2 className="text-white text-xl font-bold mb-3 flex items-center gap-2">
            <span className="text-3xl font-signature">logo</span>
            SMART READ
          </h2>
          <p className="text-sm">
            Where Smart Learning Meets Strong Values. Sharjah's first smart
            madrassa + general academy.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-[#1e293b] text-white p-2 rounded-full hover:bg-[#3b82f6] transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-[#1e293b] text-white p-2 rounded-full hover:bg-pink-500 transition-colors"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Programs */}
        <div
          ref={programsRef}
          className={`transition-all animate-fade-up delay-100 ${programsVisible ? "active" : ""}`}
        >
          <h3 className="text-white font-semibold mb-3">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>Arabic & Islamic Studies</li>
            <li>Academic Support Plus</li>
            <li>Skill Development</li>
            <li>Youth Development</li>
            <li>Coming Soon Programs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div
          ref={linksRef}
          className={`transition-all animate-fade-up delay-200 ${linksVisible ? "active" : ""}`}
        >
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Admissions</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div
          ref={newsletterRef}
          className={`transition-all animate-fade-up delay-300 ${newsletterVisible ? "active" : ""}`}
        >
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to receive updates about new programs and events.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-[#1e293b] text-white px-3 py-2 rounded-l-md text-sm outline-none w-full"
            />
            <button className="bg-[#6366f1] text-white px-4 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs mt-2">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={`mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 transition-all animate-fade-up delay-400 ${
          bottomVisible ? "active" : ""
        }`}
      >
        <p>© 2025 Smart Read Academy. All rights reserved.</p>
        <div className="flex space-x-4 text-white">
          <FaCcVisa size={24} />
          <FaCcMastercard size={24} />
          <FaPaypal size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
