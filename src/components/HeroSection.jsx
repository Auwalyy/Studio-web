import React from "react";
import girlImage from "../assets/student.png";
import groupImage from "../assets/group.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#346699] w-full flex justify-center items-center py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* LEFT CONTENT (now first on mobile) */}
        <div className="order-1 lg:order-none text-white max-w-xl lg:max-w-lg mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight mb-4">
            Best Platform Improve <br /> Your Learning Skills.
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-6">
            Edufit offers comprehensive courses, interactive quizzes, and 
            peer-reviewed assignments to enhance learning across various fields.
          </p>

          <button className="bg-white text-[#346699] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full flex justify-center lg:justify-end order-none lg:order-1 mt-10 lg:mt-0">
          
          {/* Girl Image — increased width on mobile */}
          <img
            src={girlImage}
            alt="student"
            className="
              w-full  /* Changed to full width on mobile */
              max-w-[500px] /* Limit maximum width on mobile */
              sm:w-[80%] 
              md:w-[70%] 
              lg:w-[720px]
              xl:w-[760px]
              2xl:w-[820px]
              h-auto 
              object-contain
            "
          />

          {/* Floating Online Classes Card — reduced size on mobile */}
          <div
            className="
              absolute 
              top-[60%] 
              sm:top-[50%] 
              lg:top-[48%] 
              right-[5%] /* Adjusted right position for mobile */
              sm:right-[8%] 
              bg-white 
              rounded-xl 
              shadow-lg 
              px-3 /* Reduced padding on mobile */
              sm:px-4 
              py-2 /* Reduced padding on mobile */
              sm:py-3 
              flex 
              items-center 
              gap-2
              w-[140px] /* Smaller on mobile */
              sm:w-[160px]
              lg:w-[170px]
            "
          >
            <div className="bg-[#E3EEFF] p-1 sm:p-2 rounded-lg"> {/* Smaller icon container on mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-5 text-[#346699]"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">Online Classes</h3> {/* Smaller text on mobile */}
              <p className="text-[10px] sm:text-xs text-gray-500">Flexible online classes</p> {/* Smaller text on mobile */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;