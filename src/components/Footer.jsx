import React from "react";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full pt-12 md:pt-20 pb-8 md:pb-10 px-6 md:px-16 lg:px-24 relative overflow-hidden">

      {/* ===== TOP SECTION (3 columns) ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        {/* LEFT — Logo + Text */}
        <div className="text-center md:text-left">
          {/* Logo */}
          <img
            src={logo}
            alt="Sultansoft"
            className="w-40 md:w-48 mx-auto md:mx-0 mb-4 md:mb-6"
          />

          <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-md mx-auto md:mx-0">
            Edufit offers interactive modules, live sessions,
            and certifications, empowering learners with
            personalized content for professional and personal
            growth.
          </p>
        </div>

        {/* MIDDLE — Quick Links */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Quick Link</h3>

          <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
            <li className="cursor-pointer hover:text-gray-300 transition-colors">About us</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors">Modules</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors">Courses</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors">Testimonials</li>
          </ul>
        </div>

        {/* RIGHT — Subscribe */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Subscribe Course</h3>

          <p className="text-base md:text-lg text-gray-300 mb-6">
            Subscribe our newsletter to get<br />
            more updates
          </p>

          {/* Email Input */}
          <div className="bg-[#E5E5E5] rounded-lg flex items-center px-4 py-3 w-full max-w-md mx-auto md:mx-0 mb-6">
            {/* Mail Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-gray-500 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M4 4l8 8 8-8" />
            </svg>

            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full outline-none text-black placeholder-gray-600 text-sm md:text-base"
            />
          </div>

          {/* Subscribe Button */}
          <button className="bg-[#346699] text-white px-8 md:px-10 py-3 rounded-lg text-base md:text-lg font-medium flex items-center gap-2 justify-center md:justify-start hover:bg-[#2a5480] transition-colors w-full md:w-auto">
            Subscribe
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== FLOATING ICONS ===== */}

      {/* Left Book Icon - Hidden on mobile, visible on medium+ */}
      <div className="hidden md:block absolute left-10 bottom-[140px] opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 md:w-28 h-20 md:h-28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          color="#346699"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      {/* Center Lightbulb Icon - Smaller on mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[100px] hidden md:bottom-[120px] opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-20 md:w-24 md:h-30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          color="#346699"
        >
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>

      {/* Right Smiley Icon - Hidden on mobile, visible on medium+ */}
      <div className="hidden md:block absolute right-10 top-20 opacity-90">
        <svg width="100" height="100" viewBox="0 0 200 200" stroke="#346699" strokeWidth="6" fill="none">
          <circle cx="100" cy="100" r="80" />
          <circle cx="70" cy="80" r="10" />
          <circle cx="130" cy="80" r="10" />
          <path d="M60 120 Q100 150 140 120" />
        </svg>
      </div>

      {/* ===== BOTTOM COPYRIGHT ===== */}
      <div className="w-full border-t border-gray-700 mt-12 md:mt-20 pt-6 text-center text-sm md:text-lg text-gray-300">
        © 2025 All rights reserved by Sultansoft.
      </div>
    </footer>
  );
};

export default Footer;