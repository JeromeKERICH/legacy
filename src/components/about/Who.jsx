import React from 'react';
import { FaMapMarkerAlt, FaHandshake, FaFileContract, FaLock } from 'react-icons/fa';

const WhoWeAre = () => {
  const specialties = [
    {
      icon: FaMapMarkerAlt,
      title: "Prime Locations",
      description: "Affordable plots and prime estates across Kenya",
      background: "/assets/13.jpg"
    },
    {
      icon: FaHandshake,
      title: "Flexible Payments",
      description: "Flexible payment plans that make ownership achievable",
      background: "/assets/support.jpg"
    },
    {
      icon: FaLock,
      title: "Secure Ownership",
      description: "Fully beaconed and titled land for guaranteed security",
      background: "/assets/lock.jpg"
    },
    {
      icon: FaFileContract,
      title: "End-to-End Support",
      description: "Guidance from first site visit to title deed delivery",
      background: "/assets/end.jpg"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Legacy Estates Limited</strong> is a Kenyan real estate company specializing in creating accessible pathways to land ownership.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With deep roots in Kenya's property sector, our team blends professional expertise with a human touch, guiding clients every step of the way, from the first site visit to title deed delivery.
              We are committed to transparency, security, and building generational wealth for Kenyans both at home and abroad.
            </p>

            <p className="text-gray-600 leading-relaxed">
                Our mission is to make land ownership simple, secure, and attainable through flexible payment plans and fully verified properties. 
                At Legacy Estates, we don't just sell land; we help build legacies, one plot at a time for a brighter future and lasting impact.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.background})` }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[200px]">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/90 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-amber-200 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-amber-100 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;