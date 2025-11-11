import React, { useState } from 'react';
import api from '../../api/api';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function InquiryModal({ property, onClose, onSuccess }) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '' 
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await api.post('/inquiries', {
        propertyId: property?._id,
        ...form
      });
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Book a Visit
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Property Info */}
        {property && (
          <div className="px-6 py-4 bg-gray-50">
            <p className="text-sm text-gray-600">
              Interested in <span className="font-medium text-gray-900">{property.title}</span>
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              required
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors"
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone number"
              required
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-colors"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="text-sm" />
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}