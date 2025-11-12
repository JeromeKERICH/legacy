// src/components/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
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
            <div className="space-y-6 text-gray-700">
              <p className="text-lg sm:text-xl leading-relaxed font-light" style={{ fontFamily: 'Cambria, serif' }}>
                At Legacy Estates Limited, we don't just sell land, we help Kenyans build generational wealth. We exist to make land ownership accessible, transparent, and secure for both local and diaspora buyers.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed font-light" style={{ fontFamily: 'Cambria, serif' }}>
                Every property we offer is beaconed, titled, and verified, giving you total peace of mind and a foundation for your dreams.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 group text-xl text-amber-300 hover:text-amber-200 transition-all duration-300 font-light"
                style={{ fontFamily: 'Cambria, serif' }}
              >
                <span className="border-b border-transparent hover:border-amber-300 transition-all duration-300 pb-1">
                  Explore more about us
                </span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/20">
              <img
                src="/assets/about.jpg"
                alt="Legacy Estates - Building Legacies"
                className="w-full md:h-[450px] h-[300px] object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
              />
              {/* Amber gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-amber-300/10 mix-blend-overlay"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-amber-300/10 rounded-full blur-sm"></div>
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-amber-300/5 rounded-full blur-sm"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-300"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-300"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;