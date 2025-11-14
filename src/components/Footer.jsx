import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-20 px-8 overflow-hidden">
      {/* --- Decorative Icons --- */}
      {/* Book Icon (bottom left) */}
      <div className="absolute bottom-33 left-16 text-[#336699] opacity-80 rotate-[-15deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      {/* Bulb Icon (bottom center) */}
      <div className="absolute bottom-33 left-1/2 transform -translate-x-1/2 text-[#336699] opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>

      {/* Smiley Icon (top right of Subscribe column) */}
      <div className="absolute top-12 right-28 text-[#336699] opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2" />
          <circle cx="9" cy="9" r="1" />
          <circle cx="15" cy="9" r="1" />
        </svg>
      </div>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Column 1 - Logo and Description */}
        <div>
          <img src={logo} alt="Sultansoft Logo" className="w-40 mb-5" />
          <p className="text-gray-300 leading-relaxed text-[15px]">
            Edufit offers interactive modules, live sessions, and certifications,
            empowering learners with personalized content for professional and
            personal growth.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-3 text-gray-200 font-medium">
            <li className="hover:text-white cursor-pointer transition">About us</li>
            <li className="hover:text-white cursor-pointer transition">Modules</li>
            <li className="hover:text-white cursor-pointer transition">Courses</li>
            <li className="hover:text-white cursor-pointer transition">Testimonials</li>
          </ul>
        </div>

        {/* Column 3 - Subscribe Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe Course</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe our newsletter to get more updates
          </p>
          <div className="bg-[#f1f1f1] flex items-center rounded-md overflow-hidden mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 ml-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M4 4l8 8 8-8" />
            </svg>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-3 text-black focus:outline-none placeholder-gray-600"
            />
          </div>
          <button className="bg-[#336699] hover:bg-[#29527a] text-white font-semibold px-6 py-3 rounded-md w-full flex items-center justify-center gap-2 transition-all duration-200">
            Subscribe
            <span className="text-xl">››</span>
          </button>
        </div>
      </div>

      {/* --- Bottom Copyright --- */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-300 text-xl">
        © 2025 All rights reserved by <span className="font-semibold">Sultansoft</span>.
      </div>
    </footer>
  );
};

export default Footer;
