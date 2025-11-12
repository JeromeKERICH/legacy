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
      src: '/assets/22.PNG'
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
      {/* Enhanced Media Background with Multi-layer Gradients */}
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
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70"></div>
            {/* Animated light effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content Container - Premium Design */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32">
        <div className={`text-center text-white w-full transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          

          {/* Premium Headline with Enhanced Typography */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent animate-gradient">
                Own a Land,
              </span>
              <br />
              <span className="text-white/90 drop-shadow-2xl">
                Build Legacy
              </span>
            </h1>
            
            {/* Animated Price Tag */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-amber-400/50"></div>
              <span className="text-amber-300 text-lg sm:text-xl font-light tracking-widest">
                FROM ANYWHERE IN THE WORLD
              </span>
              <div className="w-12 h-px bg-amber-400/50"></div>
            </div>
          </div>

          {/* Enhanced Subheadline */}
          <div className="max-w-3xl mx-auto mb-10">
            
            <div className="inline-flex items-center gap-2 text-amber-200/80 text-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span>100% Verified & Legally Compliant</span>
            </div>
          </div>

          {/* Premium Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Feature Card Background */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl backdrop-blur-sm border border-amber-500/20 group-hover:border-amber-400/40 group-hover:bg-black/60 transition-all duration-500"></div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-400/30 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <feature.icon className="text-2xl md:text-3xl text-amber-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm md:text-base font-semibold text-white group-hover:text-amber-200 transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link 
              to="/listings" 
              className="group relative bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900 font-bold px-12 py-4 text-lg flex items-center gap-3 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative">Explore Properties</span>
              <FaArrowRight className="relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/contact" 
              className="group relative border-2 border-amber-300/60 text-amber-100 font-light px-10 py-4 rounded-full text-lg backdrop-blur-sm transform hover:scale-105 hover:border-amber-300 hover:bg-amber-400/10 transition-all duration-300 flex items-center gap-3"
            >
              <FaPhone className="group-hover:scale-110 transition-transform duration-300" />
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;