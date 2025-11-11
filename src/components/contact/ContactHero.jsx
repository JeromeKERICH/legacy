import React, { useEffect } from 'react';

const ContactHero = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 py-20 sm:py-25">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-600 mb-4">
          Contact us
        </h1>
        <p className="text-lg sm:text-l text-amber-100 leading-relaxed max-w-2xl mx-auto">
            Let’s help you secure your piece of Kenya, safely and confidently.
        </p>
       
      </div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/5"></div>
    </section>
  );
};

export default ContactHero;