import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaSearch, 
  FaFilter,
  FaHome,
  FaSync,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTag,
  FaEllipsisV
} from "react-icons/fa";

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  async function fetchProperties() {
    setLoading(true);
    try {
      const res = await api.get("/properties");
      setProperties(res.data.items || res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load properties");
    } finally {
      setLoading(false);
    }
  }

  async function deleteProperty(id, title) {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) return;
    try {
      await api.delete(`/properties/${id}`);
      fetchProperties();
    } catch (err) {
      console.error(err);
      alert("Failed to delete property");
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  // Filter properties based on search and status
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location?.county?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'reserved': return 'bg-yellow-100 text-yellow-800';
      case 'sold': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FaHome className="text-amber-500" />
              Properties Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your property listings and inventory
            </p>
          </div>
          
          <Link
            to="/dashboard/properties/new"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
          >
            <FaPlus className="text-sm" />
            Add New Property
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="reserved">Reserved</option>
              <option value="sold">Sold</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Refresh Button */}
          <button
            onClick={fetchProperties}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors font-medium"
          >
            <FaSync className={loading ? "animate-spin" : ""} />
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* Properties Grid/Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProperties.map((property) => (
                <tr key={property._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg overflow-hidden">
                        {property.images?.[0] ? (
                          <img
                            src={property.images[0].url}
                            alt={property.title}
                            className="h-12 w-12 object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 bg-gray-300 flex items-center justify-center">
                            <FaHome className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 line-clamp-1">
                          {property.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.categories?.[0] || "Uncategorized"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <FaMapMarkerAlt className="text-red-400 mr-2 flex-shrink-0" />
                      {property.location?.county || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm font-semibold text-gray-900">
                      <FaMoneyBillWave className="text-green-500 mr-2 flex-shrink-0" />
                      {formatPrice(property.price)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status?.charAt(0).toUpperCase() + property.status?.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <Link
                        to={`/property/${property._id}`}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-900 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                        title="View Property"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={`/dashboard/properties/edit/${property._id}`}
                        className="text-amber-600 hover:text-amber-900 transition-colors p-2 hover:bg-amber-50 rounded-lg"
                        title="Edit Property"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => deleteProperty(property._id, property.title)}
                        className="text-red-600 hover:text-red-900 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        title="Delete Property"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden">
          <div className="p-4 space-y-4">
            {filteredProperties.map((property) => (
              <div key={property._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 h-16 w-16 bg-gray-200 rounded-lg overflow-hidden">
                      {property.images?.[0] ? (
                        <img
                          src={property.images[0].url}
                          alt={property.title}
                          className="h-16 w-16 object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 bg-gray-300 rounded-lg flex items-center justify-center">
                          <FaHome className="text-gray-400 text-xl" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <FaMapMarkerAlt className="text-red-400 mr-1" />
                        {property.location?.county || "N/A"}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-gray-900">
                        <FaMoneyBillWave className="text-green-500 mr-1" />
                        {formatPrice(property.price)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status?.charAt(0).toUpperCase() + property.status?.slice(1)}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/property/${property._id}`}
                      target="_blank"
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Property"
                    >
                      <FaEye className="text-sm" />
                    </Link>
                    <Link
                      to={`/dashboard/properties/edit/${property._id}`}
                      className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                      title="Edit Property"
                    >
                      <FaEdit className="text-sm" />
                    </Link>
                    <button
                      onClick={() => deleteProperty(property._id, property.title)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Property"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && !loading && (
          <div className="text-center py-12">
            <FaHome className="mx-auto text-4xl text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filter criteria" 
                : "Get started by adding your first property"
              }
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Link
                to="/dashboard/properties/new"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FaPlus />
                Add Your First Property
              </Link>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading properties...</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      {filteredProperties.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>
      )}
    </div>
  );
}