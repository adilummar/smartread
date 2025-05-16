import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CorePrograms from '../components/CorePrograms'
import SmartLearningFeatures from '../components/SmartLearningFeatures'
import WhyChooseUs from '../components/WhyChooseUs'
import ComingSoon from '../components/ComingSoon'
import EnrollmentSection from '../components/EnrollmentSection'
import ContactLocation from '../components/ContactLocation'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CorePrograms/>
      <SmartLearningFeatures/>
      <WhyChooseUs/>
      <ComingSoon/>
      <EnrollmentSection/>
      <ContactLocation/>
      <Footer/>
    </>
  )
}

export default Home
