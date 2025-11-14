import React from "react";
import girlImage from "../assets/student.png";
import groupImage from "../assets/group.jpg";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#346699] w-full flex justify-center items-center py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl lg:max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Best Platform Improve <br /> Your Learning Skills.
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            Edufit offers comprehensive courses, interactive quizzes, and peer
            reviewed assignments to enhance learning skills across various.
          </p>

          <button className="bg-white text-[#346699] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full flex justify-center lg:justify-end mb-12 lg:mb-0">
          {/* Girl Image */}
          <img
            src={girlImage}
            alt="student"
            className="w-[680px] md:w-[740px] lg:w-[800px] xl:w-[860px] h-auto object-contain"
          />

          {/* Floating Online Classes Card */}
          <div className="absolute top-[30%] right-[5%] bg-white rounded-xl shadow-lg px-6 py-5 flex items-center gap-3">
            <div className="bg-[#E3EEFF] p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#346699]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422A12.083 12.083 0 016.84 10.578L12 14z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Online Classes</h3>
              <p className="text-sm text-gray-500">Flexible online classes</p>
            </div>
          </div>

         {/* Floating Group Image (bottom-left of the girl image) */}
{/* Floating Group Image (bottom-left of the girl image) */}
<div className="absolute bottom-[-12%] right-[-40%] left-[-40%] md:left-[-10%] lg:left-[-15%] rounded-xl overflow-hidden shadow-xl w-50 md:w-72 lg:w-[300px]">
  <img
    src={groupImage}
    alt="group"
    className="w-[500px] h-full object-cover"
  />
</div>



        </div>
      </div>
    </section>
  );
};

export default HeroSection;
