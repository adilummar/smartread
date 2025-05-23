import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CorePrograms from "../components/CorePrograms";
import SmartLearningFeatures from "../components/SmartLearningFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import ComingSoon from "../components/ComingSoon";
import EnrollmentSection from "../components/EnrollmentSection";
import ContactLocation from "../components/ContactLocation";
import Footer from "../components/Footer";
import { FaWhatsappSquare } from "react-icons/fa";
import About from "../components/About";
import Gallery from "../components/Gallery";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About/>
      <CorePrograms />
      <SmartLearningFeatures />
      <WhyChooseUs />
      <ComingSoon />
      <Gallery/>
      {/* <EnrollmentSection /> */}
      <ContactLocation />
      <Footer />
      <a href="https://wa.me/+971545496922" target="_blank" rel="noopener noreferrer">
        <FaWhatsappSquare className="text-green-500 sticky text-5xl bottom-10 left-4 z-50 rounded-lg" />
      </a>
    </>
  );
}

export default Home;
