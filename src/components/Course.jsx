import React from 'react';
import cardImage from '../assets/Frame 12.png'

const Course = () => {
  const courses = [
    {
      level: "Advanced",
      price: "$23.00",
      title: "Master Native English Enhance Your Speaking Skills & Hand Writing",
      students: 32,
      lessons: 12,
      rating: 4.5,
      instructor: "Mustapha Hussein",
      image: cardImage
    },
    {
      level: "Intermediate",
      price: "$18.00",
      title: "Business Communication Skills for Professional Success",
      students: 28,
      lessons: 10,
      rating: 4.7,
      instructor: "Sarah Johnson",
      image: cardImage
    },
    {
      level: "Beginner",
      price: "$15.00",
      title: "English Grammar Fundamentals for Everyday Use",
      students: 45,
      lessons: 8,
      rating: 4.3,
      instructor: "David Chen",
      image: cardImage
    },
    {
      level: "Advanced",
      price: "$25.00",
      title: "Academic Writing and Research Paper Skills",
      students: 22,
      lessons: 14,
      rating: 4.8,
      instructor: "Dr. Emily Roberts",
      image: cardImage
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[30px] font-bold text-[#336699CC] mb-4">Courses</h2>
          <p className="text-[40px]  text-black max-w-2xl mx-auto">
            Explore Other <span className="text-[#336699CC] font-bold">Courses</span>
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Course Image */}
              <div className="h-48 w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Level and Price - Below the image */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  {course.level}
                </span>
                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {course.title}
                </h3>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      {course.students} students
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      {course.lessons} Lessons
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="ml-1 text-sm font-semibold text-gray-900">{course.rating}</span>
                  </div>
                </div>

                {/* Instructor with Arrow */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900">{course.instructor}</span>
                  </div>
                  {/* Arrow */}
                  <button className="w-10 h-10 bg-[#346699] hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;