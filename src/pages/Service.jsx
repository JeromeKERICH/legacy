import React, { useEffect } from 'react'
import ServiceHero from '../components/services/ServiceHero'
import ServicesSection from '../components/services/ServiceContent';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <ServiceHero/>
      <ServicesSection/>
    </div>
  )
}

export default Service
