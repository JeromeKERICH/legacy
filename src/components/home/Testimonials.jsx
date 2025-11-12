import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "As a first-time land buyer, I was nervous about the process—but Legacy Estates made everything smooth. From the site visit to receiving my title deed, the communication was excellent. I highly recommend Royal Gardens Kisaju for anyone looking to start their land investment journey.",
      name: "Martin K.",
      location: "Nairobi",
      role: "First-Time Land Buyer",
      rating: 5
    },
    {
      id: 2,
      quote: "Being based in Qatar, I was very cautious about land deals back home. But Legacy Estates gave me full confidence. They sent videos of the land, shared documents in real-time, and even allowed me to appoint a representative for the signing. My title deed was processed within weeks. Transparent and professional team!",
      name: "Agnes W.",
      location: "Doha",
      role: "Diaspora Investor",
      rating: 5
    },
    {
      id: 3,
      quote: "My husband and I were looking for a peaceful place to build our family home. When we visited the Evergreen Estate in Joska, we instantly fell in love with the clean layout and clear beacons. It felt like home. Plus, their flexible payment plan made it possible for us to secure our plot.",
      name: "Lucy & Brian M.",
      location: "Ruai",
      role: "Young Family",
      rating: 5
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p 
            className="text-gray-900 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Real stories from our satisfied clients who have built their legacies with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-amber-300 hover:border-amber-300/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-300/10"
            >
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              
              {/* Quote Icon */}
              <div className="text-amber-300 mb-4">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-300 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote 
                className="text-gray-900 leading-relaxed mb-6 text-lg"
                style={{ fontFamily: 'Cambria, serif' }}
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-amber-300 pt-4">
                <div 
                  className="font-semibold text-gray-900 mb-1"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {testimonial.name}
                </div>
                <div 
                  className="text-gray-800 text-sm mb-1"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {testimonial.location}
                </div>
                <div 
                  className="text-amber-300 text-xs font-medium"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-black rounded-2xl p-12 max-w-2xl mx-auto border border-amber-300/20 backdrop-blur-sm">
            <h3 
              className="text-xl md:text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Cambria, serif' }}
            >
              Ready to Start Your Story?
            </h3>
            <p 
              className="text-gray-300 mb-8 text-lg"
              style={{ fontFamily: 'Cambria, serif' }}
            >
              Join hundreds of satisfied landowners who have secured their future with Legacy Estates
            </p>
            <Link 
              to="/listings" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-black font-light px-10 py-2 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-amber-300/25 group"
            >
              <span style={{ fontFamily: 'Cambria, serif' }}>
                Find a Plot Today
              </span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;