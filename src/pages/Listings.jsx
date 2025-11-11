import React, { useState, useEffect } from 'react';
import api from '../api/api';
import PropertyCard from '../components/property/PropertyCard';
import { 
  FaSearch, 
  FaFilter, 
  FaMapMarkerAlt, 
  FaHome,
  FaSync,
  FaTimes
} from 'react-icons/fa';

export default function Listings(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [properties, setProperties] = useState([]);
  const [q, setQ] = useState('');
  const [county, setCounty] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const counties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Machakos", 
    "Kajiado", "Kiambu", "Murang'a", "Nyandarua", "Nyeri",
    "Kirinyaga", "Meru", "Tharaka-Nithi", "Embu", "Kitui",
    "Makueni", "Marsabit", "Isiolo", "Garissa", "Wajir",
    "Mandera", "Tana River", "Lamu", "Kilifi", "Kwale",
    "Taita-Taveta", "Busia", "Siaya", "Kakamega", "Bungoma",
    "Vihiga", "Bomet", "Kericho", "Narok", "Kajiado",
    "Samburu", "Turkana", "West Pokot", "Trans Nzoia", "Uasin Gishu"
  ];

  const categories = [
    "Residential", "Commercial", "Agricultural", "Industrial", "Mixed Use"
  ];

  const priceRanges = [
    { label: "Any Price", value: "" },
    { label: "Under KSh 500K", value: "0-500000" },
    { label: "KSh 500K - 1M", value: "500000-1000000" },
    { label: "KSh 1M - 2M", value: "1000000-2000000" },
    { label: "KSh 2M - 5M", value: "2000000-5000000" },
    { label: "Over KSh 5M", value: "5000000-10000000" }
  ];

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    setLoading(true);
    try {
      const params = { q, county };
      if (category) params.category = category;
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        params.minPrice = min;
        params.maxPrice = max;
      }
      
      const res = await api.get('/properties', { params });
      setProperties(res.data.items || res.data);
    } catch (err) {
      console.error(err);
    } finally { 
      setLoading(false);
      setShowFilters(false);
    }
  }

  const clearFilters = () => {
    setQ('');
    setCounty('');
    setCategory('');
    setPriceRange('');
  };

  const hasActiveFilters = q || county || category || priceRange;

  return (
    <div className="min-h-screen">
      {/* Hero Search Section */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 md:py-30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-600 mb-4">
              Find Your Perfect Plot
            </h1>
            <p className="md:text-xl text-lg text-amber-100 max-w-2xl mx-auto">
              Discover verified, titled properties across Kenya's prime locations
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    placeholder="Search by property name, location, or features..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 border-0 rounded-xl focus:ring-2 focus:ring-amber-500 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && fetchProperties()}
                  />
                </div>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 font-light text-lg"
                >
                  <FaFilter />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  )}
                </button>

                <button
                  onClick={fetchProperties}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaSearch />
                  Search
                </button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-4 p-6 border-t border-gray-200 bg-gray-50 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaMapMarkerAlt className="inline mr-2 text-amber-500" />
                        County
                      </label>
                      <select
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">All Counties</option>
                        {counties.map((countyOption) => (
                          <option key={countyOption} value={countyOption}>
                            {countyOption}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaHome className="inline mr-2 text-amber-500" />
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price Range
                      </label>
                      <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        {priceRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Filter Actions */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={clearFilters}
                      className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-2"
                    >
                      <FaTimes />
                      Clear All Filters
                    </button>
                    
                    <button
                      onClick={fetchProperties}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Available Properties
            </h2>
            <p className="text-gray-600 mt-1">
              {properties.length} property{properties.length !== 1 ? 'ies' : ''} found
              {hasActiveFilters && ' (filtered)'}
            </p>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              <FaTimes />
              Clear filters
            </button>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading properties...</p>
          </div>
        ) : (
          <>
            {/* Properties Grid */}
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {properties.map(p => (
                  <PropertyCard key={p._id} property={p} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
                <FaHome className="mx-auto text-6xl text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No properties found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  {hasActiveFilters 
                    ? "Try adjusting your search criteria or clear filters to see more properties."
                    : "We're constantly adding new properties. Check back soon or contact us for exclusive listings."
                  }
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}

            {/* Load More (if paginated) */}
            {properties.length > 0 && (
              <div className="text-center mt-12">
                <button
                  onClick={fetchProperties}
                  disabled={loading}
                  className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                >
                  <FaSync className={loading ? "animate-spin" : ""} />
                  Load More Properties
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}