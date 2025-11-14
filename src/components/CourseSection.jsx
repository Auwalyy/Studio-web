import React from "react";

const CoursesSection = () => {
  // Dummy data for 6 modules
  const modules = [
    { id: 1, title: "Module 1" },
    { id: 2, title: "Module 2" },
    { id: 3, title: "Module 3" },
    { id: 4, title: "Module 4" },
    { id: 5, title: "Module 5" },
    { id: 6, title: "Module 6" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#336699CC] mt-2">
          Modules
        </h2>
        <p className="text-black text-[35px] font-bold mt-4">
          Course Sections
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-[#336699CC] rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <h4 className="font-semibold text-white text-xl mb-2">
                {module.title}
              </h4>
              <p className="text-white text-sm">Tap to view content</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
