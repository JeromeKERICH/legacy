// src/components/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Cambria, serif' }}>
                ABOUT US
              </h2>
              <div className="w-24 h-1.5 bg-amber-300"></div>
              <p className="text-2xl lg:text-3xl font-light text-amber-300 italic" style={{ fontFamily: 'Cambria, serif' }}>
                "Building Wealth, One Home at a Time"
              </p>
            </div>

            {/* Intro Paragraph */}
            <div className="space-y-3 text-gray-700">
              <p className="text-lg sm:text-xl leading-relaxed font-light" style={{ fontFamily: 'Cambria, serif' }}>
                At Legacy Estates Limited, we don't just sell land, we help Kenyans build generational wealth. We exist to make land ownership accessible, transparent, and secure for both local and diaspora buyers.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed font-light" style={{ fontFamily: 'Cambria, serif' }}>
                Every property we offer is beaconed, titled, and verified, giving you total peace of mind and a foundation for your dreams.
                <br/>
                <Link to="/about" 
                className='inline-flex items-center gap-3 underline text-gray-600 text-xl md:text-xl'
                style={{ fontFamily: 'Cambria, serif' }}
                >
                  <span className="pb-1">
                  Learn more
                </span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              </p>
              
            </div>


          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src="/assets/about.jpg"
                alt="Legacy Estates - Building Legacies"
                className="w-full md:h-[450px] h-[350px] object-cover hover:brightness-110"
              />
    
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-amber-300/10 rounded-full blur-sm"></div>
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-amber-300/5 rounded-full blur-sm"></div>
            
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;