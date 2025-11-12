import React from 'react'

import HeroSection from '../components/home/Hero'
import AboutSection from '../components/home/About'
import PropertyListingGrid from '../components/home/Properties'
import WhyChooseUs from '../components/home/WhyUs'
import TestimonialsSection from '../components/home/Testimonials'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <PropertyListingGrid/>
      <WhyChooseUs/>
      <TestimonialsSection/>
      
    </div>
  )
}

export default Home
