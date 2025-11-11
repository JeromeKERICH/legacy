import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaRulerCombined, 
  FaBed, 
  FaBath, 
  FaHeart, 
  FaShare,
  FaWhatsapp,
  FaFileContract,
  FaLock
} from 'react-icons/fa';

export default function PropertyCard({ property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `KSh ${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `KSh ${(price / 1000).toFixed(0)}K`;
    }
    return `KSh ${price?.toLocaleString()}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'reserved': return 'bg-yellow-500';
      case 'sold': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const shareProperty = async () => {
    const shareData = {
      title: property.title,
      text: property.description,
      url: `${window.location.origin}/property/${property.slug}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      // You can add a toast notification here
      alert('Property link copied to clipboard!');
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col">
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {/* Image */}
        <img 
          src={property.images?.[0]?.url || '/placeholder.png'} 
          alt={property.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {/* Status Badge */}
          <span className={`${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-xs font-semibold capitalize shadow-lg`}>
            {property.status}
          </span>
          
          {/* Featured Badge */}
          {property.featured && (
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Featured
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:bg-white'
            }`}
          >
            <FaHeart className={isLiked ? 'fill-current' : ''} />
          </button>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              shareProperty();
            }}
            className="w-10 h-10 rounded-full bg-white/90 text-gray-600 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-colors duration-300"
          >
            <FaShare />
          </button>
        </div>

        {/* Quick Action Bar */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex gap-2">
            <a
              href={`https://wa.me/254717112222?text=Hi, I'm interested in ${property.title}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <Link
              to={`/property/${property.slug}`}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Location */}
        <div className="mb-3">
          <h3 className="font-bold text-xl text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300 mb-2">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <FaMapMarkerAlt className="text-red-400 mr-2 flex-shrink-0" />
            <span className="line-clamp-1">
              {property.location?.county || property.location?.address}
            </span>
          </div>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {property.size && (
            <div className="flex items-center gap-1">
              <FaRulerCombined className="text-blue-500" />
              <span>{property.size}</span>
            </div>
          )}
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <FaBed className="text-purple-500" />
              <span>{property.bedrooms} bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <FaBath className="text-cyan-500" />
              <span>{property.bathrooms} bath</span>
            </div>
          )}
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            <FaLock className="text-xs" />
            Verified
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            <FaFileContract className="text-xs" />
            Titled
          </span>
          {property.categories?.slice(0, 1).map((category, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-2xl font-light text-amber-600">
              {formatPrice(property.price)}
            </div>
            {property.paymentPlan && (
              <div className="text-xs text-gray-500 mt-1">
                {property.paymentPlan}
              </div>
            )}
          </div>
          
          <Link
            to={`/property/${property.slug}`}
            className="bg-gray-900 hover:bg-amber-600 text-white font-light py-3 px-6 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            View Plot
          </Link>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}