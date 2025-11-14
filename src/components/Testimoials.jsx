import React from 'react';
import arrow from '../assets/arrow.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mustapha Hussein",
      role: "Instructor",
      rating: 4.5,
      text: "We value your input and are committed to continuously improving educational offerings. Please share your thoughts, experiences and suggestions with us. Your feedback helps us enhance our programs and better serve our learning community."
    },
    {
      name: "Sarah Johnson",
      role: "Student",
      rating: 4.8,
      text: "The courses have been incredibly helpful in improving my skills. The instructors are knowledgeable and the content is well-structured. I highly recommend this platform to anyone looking to enhance their learning journey."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] text-[#336699CC] font-bold  mb-4">Testimonials</h2>
          <p className="text-[30px] font-bold text-black max-w-2xl mx-auto">
            What Our <span className='text-[#336699CC]'>Learners</span> Say
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Card Header with Name, Role and Rating */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                </div>
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(testimonial.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-gray-900">{testimonial.rating}</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4">
          {/* Left Arrow */}
          <img src={arrow} className="w-[240px] h-[60px] cursor-pointer" />
         
        </div>
      </div>
    </section>
  );
};

export default Testimonials;