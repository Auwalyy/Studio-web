import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-25 h-10 object-contain" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex text-[#336699CC] items-center gap-10">
          <li>
            <a
              href="#home"
              className="hover:text-[#346699] font-medium transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="hover:text-[#346699] font-medium transition"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#346699] font-medium transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#346699] font-medium transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-[#346699] transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-[#346699] font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-gray-700 hover:text-[#346699] font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#346699] font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#346699] font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
