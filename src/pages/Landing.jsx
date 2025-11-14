import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import AboutSection from '../components/About';
import CoursesSection from '../components/CourseSection';
import Course from '../components/Course';
import Testimonials from '../components/Testimoials';
import Footer from '../components/Footer';
import InstructorSection from '../components/InstructorSection';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <Course />
      <InstructorSection />
      <Testimonials />
      <Footer />
    
    </div>
  )
}

export default Landing