import React from "react";
import instructor from "../assets/instructor.png";
import groupImage from '../assets/group.jpg'

const InstructorSection = () => {
  return (
    <section className="bg-[#336699] py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Heading */}
        <h3 className="text-white text-lg font-medium mb-2">Instructor</h3>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          Meet Our Expert Instructor
        </h2>

        {/* Instructor Card */}
        <div className="bg-white rounded-3xl p-2 shadow-lg overflow-hidden w-full max-w-sm mx-auto">
          <div className="relative">
            <img
              src={instructor}
              alt="Instructor"
              className="w-full h-[400px] object-cover"
            />           
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection; 