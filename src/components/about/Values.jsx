import React from 'react';
import { FaStar, FaRocket, FaUserShield, FaLightbulb, FaLock, FaHandshake } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: FaLock,
      value: "Integrity",
      description: "We uphold transparency and honesty in every transaction."
    },
    {
      icon: FaStar,
      value: "Excellence",
      description: "We deliver value, not just land, through service, process, and communication."
    },
    {
      icon: FaRocket,
      value: "Empowerment",
      description: "We believe ownership is power, and every Kenyan deserves access to it."
    },
    {
      icon: FaHandshake,
      value: "Accountability",
      description: "We stand by our word, from promise to title deed."
    },
    {
      icon: FaLightbulb,
      value: "Innovation",
      description: "We simplify real estate with technology and customer-first solutions."
    }, 
    {
      icon: FaUserShield,
      value: "Customer Focus",
      description: "Our clients' needs and dreams drive everything we do."
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The guiding principles that shape our mission to transform land ownership in Kenya
          </p>
        </div>

        {/* Values Grid - Hexagon Design */}
        <div className="relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
            {values.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="relative z-10 mb-6">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-500/25">
                      <item.icon className="text-white text-xl" />
                    </div>
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-amber-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {item.value}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Signature */}
        <div className="text-center mt-16 pt-12 border-t border-gray-800">
          <div className="inline-flex items-center gap-4 text-amber-400">
            <div className="w-12 h-px bg-amber-400/50"></div>
            <span className="text-sm font-semibold uppercase tracking-widest">Our Promise</span>
            <div className="w-12 h-px bg-amber-400/50"></div>
          </div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            These values are the foundation of every property we offer and every client relationship we build
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;