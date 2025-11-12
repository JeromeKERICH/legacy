// src/components/ResponsiveHero.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPhone, FaGlobe, FaFulcrum } from 'react-icons/fa';
import { MdOutlineVerified, MdPayment } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Optimized media assets for all screen sizes
  const mediaAssets = [
    {
      src: '/assets/14.jpg'
    },
    {
      src: '/assets/13.jpg'
    },
    {
      src: '/assets/16.jpg'
    }
  ];

  // Features list with correct icons
  const features = [
    { icon: MdOutlineVerified, text: 'Verified Plots' },
    { icon: MdPayment, text: 'Flexible Payments' },
    { icon: FaFulcrum, text: 'Secure Ownership' },
    { icon: FaArrowRight, text: 'Instant Transfers' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === mediaAssets.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, mediaAssets.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Media Background with Black Gradient */}
      <div className="absolute inset-0">
        {mediaAssets.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={media.src}
              alt={`Luxury property ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Enhanced Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/50 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
            {/* Additional diagonal gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Content Container - Optimized for all screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className={`text-center text-white w-full transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Premium Badge - Always visible but properly sized */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-amber-600 px-3 py-1 sm:px-3 sm:py-2.5 md:px-3 md:py-2 rounded-full mb-6 sm:mb-7 md:mb-8 backdrop-blur-sm border border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/20">
            <FaGlobe className="text-white text-sm sm:text-base" />
            <span className="font-light text-xs sm:text-sm md:text-base uppercase tracking-wider">
              Own, Invest, Prosper
            </span>
          </div>

          {/* Optimized Headline for all screens */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FFD700] via-amber-300 to-[#FFD700] bg-clip-text text-transparent">
              Own Land, <br/> <span className='text-white/80'>or Property</span>
            </span>
            <span className="text-white"> In Kenya</span> <br />
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-5">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FFD700] font-light whitespace-nowrap">
                From
              </span>
              <span className="bg-gradient-to-r from-[#FFD700] via-white to-amber-100 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                Anywhere
              </span>
            </div>
          </h1>

          {/* Optimized Subheadline */}
          <div className="max-w-4xl mx-auto mb-6">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-5 text-gray-200 leading-relaxed font-light px-2 sm:px-4">
              Whether you're in <span className="text-[#FFD700] font-semibold">Nairobi</span> or{' '}
              <span className="text-[#FFD700] font-semibold">New York</span>, Legacy Estates makes land ownership simple, secure, and transparent.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-amber-100/80 leading-relaxed px-2 sm:px-4">
              Invest in verified plots with flexible payments and instant title transfers.
            </p>
          </div>

          {/* Optimized Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-500 group hover:scale-105 hover:bg-black/30 backdrop-blur-sm"
              >
                <feature.icon className="text-sm md:text-2xl text-[#FFD700] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm md:text-sm font-medium text-gray-200 group-hover:text-white leading-tight">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mb-6 px-2">
            <Link 
              to="/listings" 
              className="group relative bg-amber-300 text-gray-900 font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
            >
              <div className="absolute inset-0 "></div>
              <span className="whitespace-nowrap relative">Explore Properties</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 relative" />
            </Link>
            
            <Link 
              to="/contact" 
              className="group border-2 border-[#FFD700]/50 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-amber-100 hover:text-white font-semibold px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
            >
              <FaPhone className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              <span className="whitespace-nowrap">Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;