import React from "react";
import girl from "../assets/about.png";
import group from "../assets/group.jpg";
import profile from "../assets/Tutor.png"; 
import { Laptop } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-18 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={girl}
            alt="About"
            className="rounded-2xl bottom-10 w-full h-[480px] object-cover"
          />
          {/* Group image on the right of main image */}
            <div className="absolute -top-4 -right-5 w-54 h-15 p-2 bg-[#f4f8ff] rounded-lg shadow-lg flex items-center justify-center">
              <img
            src={group}
            alt="Group"
            className="absolute  w-full h-auto rounded-lg shadow-lg"
          />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-[#346699] font-semibold text-lg uppercase tracking-wide">
            About Us
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Welcome to our Online <br /> <span className="  text-[#336699CC]">Learning</span> Hub
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Experience personalized courses and resources at our Online Learning
            Hub Lab designed to enhance your skills and drive growth.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-4  p-4 rounded-xl shadow-sm">
              <div className="bg-[#346699] text-white p-3 rounded-lg">
                <Laptop size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Online Classes</h4>
                <p className="text-gray-500 text-sm">Flexible online learning</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl shadow-sm">
              <div className="bg-[#346699] text-white p-3 rounded-lg">
                <Laptop size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Expert Tutors</h4>
                <p className="text-gray-500 text-sm">Learn from the best</p>
              </div>
            </div>
          </div>

          {/* Button + Profile Card */}
          <div className="flex items-center gap-12 mt-6">
            <button className="bg-[#346699] text-white px-8 py-5 rounded-md font-medium hover:bg-[#28527a] transition">
              Learn More
            </button>

            {/* Profile Card */}
            <div className="flex items-center gap-6 bg-[#f4f8ff] p-2 rounded-xl shadow-sm">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-14 rounded-full object-cover"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
