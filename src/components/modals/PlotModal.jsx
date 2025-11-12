import React, { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const PlotModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onClose();
      setForm({ name: '', email: '', phone: '' });
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-sm w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-gray-900">
            Find Your Plot
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="tel"
                placeholder="Phone number"
                required
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 text-sm"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <FaPaperPlane className="text-xs" />
            )}
            {loading ? 'Processing...' : 'Get Started'}
          </button>
        </form>

        {/* Footer */}
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-500 text-center">
            We'll contact you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlotModal;