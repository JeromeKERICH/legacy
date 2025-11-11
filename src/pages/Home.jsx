import React from 'react'

import HeroSection from '../components/home/Hero'
import AboutSection from '../components/home/About'
import PropertyListingGrid from '../components/home/Properties'
import WhyChooseUs from '../components/home/WhyUs'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <PropertyListingGrid/>
      <WhyChooseUs/>
      
    </div>
  )
}

export default Home
