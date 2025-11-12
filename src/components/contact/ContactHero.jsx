import React, { useEffect } from 'react';

const ContactHero = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <section 
      className="relative rounded-3xl p-8 border border-gray-700 hover:border-amber-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 overflow-hidden min-h-[300px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%), url('/assets/contact.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/30"></div>

      {/* Geometric accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-amber-400/10 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-amber-400/10 rounded-bl-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        
        {/* Minimal accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-0.5 bg-amber-500/60 rounded-full"></div>
        </div>

  

      </div>
      
      {/* Corner accents */}
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-amber-400/30"></div>
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-amber-400/30"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-amber-400/30"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-amber-400/30"></div>
    </section>
  );
};

export default ContactHero;