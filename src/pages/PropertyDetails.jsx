import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import InquiryModal from '../components/property/InquiryCard';
import { 
  FaMapMarkerAlt, 
  FaRulerCombined, 
  FaBed, 
  FaBath, 
  FaPhone, 
  FaEnvelope,
  FaWhatsapp,
  FaShare,
  FaHeart,
  FaArrowLeft,
  FaCalendarAlt,
  FaLock,
  FaFileContract
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import RichTextDisplay from './admin/crud/RichtextDisplay';


export default function PropertyDetail(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await api.get(`/properties/${slug}`);
        setProperty(res.data);
      } catch (err) { 
        console.error(err); 
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const shareProperty = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <button 
            onClick={() => navigate('/listings')}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <FaArrowLeft />
            Back to Listings
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="relative">
                <img 
                  src={property.images?.[activeImageIndex]?.url || '/placeholder.png'} 
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Image Navigation */}
                {property.images && property.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === activeImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {property.images && property.images.length > 1 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === activeImageIndex 
                            ? 'border-amber-500' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img 
                          src={image.url} 
                          alt={`${property.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
              
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{property.location?.county}, {property.location?.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRulerCombined className="text-blue-500" />
                  <span>{property.size}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                {property.bedrooms && (
                  <div className="text-center">
                    <FaBed className="text-2xl text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center">
                    <FaBath className="text-2xl text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                )}
                <div className="text-center">
                  <FaFileContract className="text-2xl text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Titled</div>
                  <div className="text-sm text-gray-600">Deed</div>
                </div>
                <div className="text-center">
                  <FaLock className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Verified</div>
                  <div className="text-sm text-gray-600">Plot</div>
                </div>
              </div>

              {/* Description */}
              <div className="description-section mt-6">
                <h3 className="text-xl font-cambria font-bold text-black mb-4">Property Description</h3>
                <RichTextDisplay content={property.description} />
              </div>

              {/* Categories */}
              {property.categories && property.categories.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Actions Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {formatPrice(property.price)}
              </div>
              <div className="text-gray-600 mb-6">Full ownership with clean title deed</div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <FaCalendarAlt />
                  Book a Site Visit
                </button>
                
                <a 
                  href={`https://wa.me/254717112222?text=Hi, I'm interested in ${property.title} (${window.location.href})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>

                <div className="flex gap-2">
                  <button 
                    onClick={shareProperty}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShare />
                    Share
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <FaHeart />
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-semibold text-lg">
                    {(property.agent?.name || 'LE').charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {property.agent?.name || 'Legacy Estates Team'}
                  </div>
                  <div className="text-gray-600 text-sm">Certified Real Estate Agent</div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="tel:+254717112222"
                  className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <FaPhone className="text-gray-400" />
                  +254 717 112 222
                </a>
                <a 
                  href="mailto:info@legacyestates.co.ke"
                  className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <FaEnvelope className="text-gray-400" />
                  info@legacyestates.co.ke
                </a>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Verified</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <FaLock className="text-green-500" />
                  Fully beaconed and surveyed
                </li>
                <li className="flex items-center gap-2">
                  <FaFileContract className="text-green-500" />
                  Clean title deed available
                </li>
                <li className="flex items-center gap-2">
                  <FaLock className="text-green-500" />
                  No legal disputes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showModal && (
        <InquiryModal 
          property={property} 
          onClose={() => setShowModal(false)} 
          onSuccess={() => {
            alert('Site visit request sent successfully! We will contact you shortly.');
            setShowModal(false);
          }} 
        />
      )}
    </div>
  );
}