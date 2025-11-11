// src/components/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-6">
            {/* Section Title */}
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                ABOUT US
              </h2>
              <div className="w-20 h-1 bg-amber-500"></div>
              <p className="text-xl  lg:text-2xl font-light text-amber-600 italic">
                "Building Legacies, One Plot at a Time"
              </p>
            </div>

            {/* Intro Paragraph */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg sm:text-xl leading-relaxed font-light ">
                At Legacy Estates Limited, we don't just sell land, we help Kenyans build generational wealth. We exist to make land ownership accessible, transparent, and secure for both local and diaspora buyers.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed font-light ">
                Every property we offer is beaconed, titled, and verified, giving you total peace of mind and a foundation for your dreams.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-lg md:text-xl text-amber-500 underline font-light"
              >
                Explore more about us
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/15.jpg"
                alt="Legacy Estates - Building Legacies"
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500/5 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;