import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Leadership = () => {
  const leaders = [
    {
      name: "Morris Njagi",
      title: "Chief Executive Officer",
      description: "A visionary in real estate development and project delivery, Morris drives Legacy Estates' mission to make verified land ownership accessible and seamless for every Kenyan.",
      image: "/assets/ceo.jpg",
      social: {
        linkedin: "#",
        email: "moris@legacyestates.co.ke"
      }
    },
    {
      name: "Princess Caroline",
      title: "Founder & Managing Director",
      description: "An expert in legal, investment, and trade facilitation, she leads with passion for empowering communities through sustainable property ownership and wealth building.",
      image: "/assets/princ.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/princess-c-mutisya/",
        email: "princess@legacyestates.co.ke"
      }
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet the Leadership
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionary leaders driving our mission to transform land ownership in Kenya
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative">
                  <div className="aspect-square md:aspect-auto md:h-full">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-black/20 md:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  {/* Name and Title */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-sm sm:text-base">
                      {leader.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {leader.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={leader.social.linkedin}
                      className="text-gray-400 hover:text-amber-600 transition-colors duration-300 p-2 hover:bg-amber-50 rounded-lg"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    
                    <a
                      href={leader.social.email}
                      className="text-gray-400 hover:text-amber-600 transition-colors duration-300 p-2 hover:bg-amber-50 rounded-lg"
                      aria-label="Email"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Accent Border */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-500 delay-200"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Ready to start your land ownership journey with our expert team?
          </p>
          <div className='mt-6'>
          <Link to="/contact" className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Leadership;