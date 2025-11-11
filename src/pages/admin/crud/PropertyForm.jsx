import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import { 
  FaUpload, 
  FaTimes, 
  FaSave, 
  FaArrowLeft,
  FaMapMarkerAlt,
  FaTag,
  FaTextHeight,
  FaMoneyBillWave,
  FaHome
} from "react-icons/fa";
import RichTextEditor from "./RichTextEditor";

export default function PropertyForm() {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    county: "",
    address: "",
    categories: "",
    status: "available",
    size: "",
    bedrooms: "",
    bathrooms: ""
  });
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) loadProperty();
  }, [id]);

  async function loadProperty() {
    try {
      const res = await api.get(`/properties/${id}`);
      const p = res.data;
      setForm({
        title: p.title,
        description: p.description,
        price: p.price,
        county: p.location?.county || "",
        address: p.location?.address || "",
        categories: p.categories?.join(", ") || "",
        status: p.status,
        size: p.size || "",
        bedrooms: p.bedrooms || "",
        bathrooms: p.bathrooms || ""
      });
      setImages(p.images || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load property");
    }
  }

  async function handleFileChange(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;
  
    setUploading(true);
    const uploaded = [];
    
    for (let file of files) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files');
        continue;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should be less than 5MB');
        continue;
      }

      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await api.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        uploaded.push(res.data);
      } catch (err) {
        console.error('Upload error:', err);
        alert('Upload failed for: ' + file.name);
      }
    }
    setImages((prev) => [...prev, ...uploaded]);
    setUploading(false);
  }

  function removeImage(index) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        title: form.title,
        description: form.description,
        price: Number(form.price),
        categories: form.categories.split(",").map((s) => s.trim()),
        location: { 
          county: form.county, 
          address: form.address 
        },
        status: form.status,
        size: form.size,
        bedrooms: form.bedrooms ? Number(form.bedrooms) : undefined,
        bathrooms: form.bathrooms ? Number(form.bathrooms) : undefined,
        images: images
      };
      
      if (id) {
        await api.put(`/properties/${id}`, payload);
      } else {
        await api.post("/properties", payload);
      }
      
      alert("Property saved successfully!");
      navigate("/dashboard/properties");
    } catch (err) {
      console.error(err);
      alert("Save failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/dashboard/properties")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {id ? "Edit Property" : "Add New Property"}
              </h1>
              <p className="text-gray-600 mt-1">
                {id ? "Update property details" : "Create a new property listing"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FaHome className="text-amber-500" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="e.g., Modern 3-Bedroom Apartment in Nairobi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-500" />
                  Price (Ksh) *
                </label>
                <input
                  type="number"
                  required
                  value={form.price}
                  onChange={(e) => handleChange('price', e.target.value)}
                  placeholder="e.g., 5000000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size *
                </label>
                <input
                  type="text"
                  required
                  value={form.size}
                  onChange={(e) => handleChange('size', e.target.value)}
                  placeholder="e.g., 50x100 ft or 1/8 Acre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Bedrooms & Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <input
                  type="number"
                  value={form.bedrooms}
                  onChange={(e) => handleChange('bedrooms', e.target.value)}
                  placeholder="Number of bedrooms"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bathrooms
                </label>
                <input
                  type="number"
                  value={form.bathrooms}
                  onChange={(e) => handleChange('bathrooms', e.target.value)}
                  placeholder="Number of bathrooms"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Location Information Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              Location Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  County *
                </label>
                <input
                  type="text"
                  required
                  value={form.county}
                  onChange={(e) => handleChange('county', e.target.value)}
                  placeholder="e.g., Nairobi, Kiambu, Mombasa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="e.g., 123 Main Street, Westlands"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Description & Categories Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FaTextHeight className="text-blue-500" />
              Description & Categories
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>

                <RichTextEditor
                    value={form.description}
                    onChange={(val) => handleChange('description', val)}
                  />

                
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaTag className="text-purple-500" />
                  Categories (comma separated) *
                </label>
                <input
                  type="text"
                  required
                  value={form.categories}
                  onChange={(e) => handleChange('categories', e.target.value)}
                  placeholder="e.g., Residential, Commercial, Land, Apartment, Villa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={form.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="available">Available</option>
                  <option value="reserved">Reserved</option>
                  <option value="sold">Sold</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </div>

          {/* Image Upload Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FaUpload className="text-green-500" />
              Property Images
            </h2>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-3"
                >
                  <FaUpload className="text-3xl text-gray-400" />
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      Click to upload images
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG, JPEG up to 5MB each
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                    Choose Files
                  </span>
                </label>
              </div>

              {uploading && (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
                  <p className="text-gray-600 mt-2">Uploading images...</p>
                </div>
              )}

              {images.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Uploaded Images ({images.length})
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {images.map((img, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={img.url}
                          alt={`Property ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard/properties")}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || uploading}
              className="flex items-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              <FaSave />
              {loading ? "Saving..." : (id ? "Update Property" : "Create Property")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}