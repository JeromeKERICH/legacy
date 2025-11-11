// src/components/PropertyListingGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PropertyListingGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Ruiru Prime Plots",
      type: "Residential",
      location: "Ruiru, Kiambu County",
      price: "KSh 1.2M",
      size: "50x100",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Ongata Rongai Gardens",
      type: "Commercial",
      location: "Ongata Rongai, Kajiado",
      price: "KSh 2.8M",
      size: "100x100",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Kitengela Serenity",
      type: "Agricultural",
      location: "Kitengela, Kajiado",
      price: "KSh 850K",
      size: "1 Acre",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Residential':
        return 'bg-blue-500';
      case 'Commercial':
        return 'bg-green-500';
      case 'Agricultural':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            FEATHURED PROPERTIES
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover our carefully curated selection of prime lands across Kenya
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Property Type */}
                <div className={`absolute top-4 right-4 ${getTypeColor(property.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {property.type}
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white">{property.price}</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <span className="text-sm">{property.size}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm">
                    View Details
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 hover:border-amber-500 text-gray-600 hover:text-amber-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Properties
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PropertyListingGrid;