import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import PropertyCard from '../property/PropertyCard';

export default function FeaturedProperties({ limit = 3 }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get('/properties', {
          params: { featured: true, limit, sort: 'publishedAt:desc' }
        });
        if (!cancelled) setItems(res.data.items || res.data);
      } catch (err) {
        if (!cancelled) setError('Failed to load featured properties');
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [limit]);

  if (loading) return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="font-cambria text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-56 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
                <div className="flex gap-4 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (error) return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
          <h3 className="font-cambria text-xl font-bold text-red-800 mb-2">
            Unable to Load Properties
          </h3>
          <p className="font-cambria text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="font-cambria bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );

  if (!items.length) return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-12 max-w-2xl mx-auto">
          <h3 className="font-cambria text-2xl font-bold text-amber-800 mb-4">
            No Featured Properties Available
          </h3>
          <p className="font-cambria text-amber-700 text-lg mb-6">
            We're currently updating our featured properties collection. Please check back soon for new listings.
          </p>
          <a 
            href="/listings" 
            className="inline-block font-cambria bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Browse All Listings
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cambria text-4xl font-bold text-black mb-4">
            Featured Properties
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="font-cambria text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties with exceptional value and potential
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a 
            href="/listings" 
            className="inline-flex items-center font-cambria bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group"
          >
            View All Listings
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}