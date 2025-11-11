import React, { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/contact/ContactSection';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div>
      <ContactHero/>
      <ContactSection/>
    </div>
  )
}

export default Contact
