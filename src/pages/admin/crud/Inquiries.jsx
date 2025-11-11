import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import { 
  FaEnvelope, 
  FaPhone, 
  FaHome, 
  FaFilter,
  FaSync,
  FaCircle,
  FaEye,
  FaEdit,
  FaCalendarAlt
} from "react-icons/fa";

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  async function fetchInquiries() {
    setLoading(true);
    try {
      const res = await api.get("/inquiries");
      let items = res.data;
      if (filter) items = items.filter((i) => i.status === filter);
      setInquiries(items);
    } catch (err) {
      console.error(err);
      alert("Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      await api.put(`/inquiries/${id}`, { status });
      fetchInquiries();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  }

  useEffect(() => {
    fetchInquiries();
  }, [filter]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'booked': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new': return 'text-blue-500';
      case 'contacted': return 'text-yellow-500';
      case 'booked': return 'text-green-500';
      case 'closed': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FaEnvelope className="text-amber-500" />
              Inquiries Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and track customer inquiries
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none bg-white"
              >
                <option value="">All Inquiries</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="booked">Booked</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Refresh Button */}
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors font-medium"
            >
              <FaSync className={loading ? "animate-spin" : ""} />
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Inquiries Grid/Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {inquiries.map((inquiry) => (
                <tr key={inquiry._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-semibold text-sm">
                          {inquiry.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {inquiry.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-900">
                        <FaEnvelope className="text-gray-400 mr-2 flex-shrink-0" />
                        {inquiry.email}
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center text-sm text-gray-500">
                          <FaPhone className="text-gray-400 mr-2 flex-shrink-0" />
                          {inquiry.phone}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <FaHome className="text-gray-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-2">
                        {inquiry.property ? inquiry.property.title : "—"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="text-gray-400 mr-2 flex-shrink-0" />
                      {formatDate(inquiry.createdAt || inquiry.date)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={inquiry.status}
                      onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                      className={`text-xs font-medium py-1 px-3 rounded-full border-0 focus:ring-2 focus:ring-amber-500 transition-colors ${getStatusColor(inquiry.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="booked">Booked</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        className="text-blue-600 hover:text-blue-900 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-amber-600 hover:text-amber-900 transition-colors p-2 hover:bg-amber-50 rounded-lg"
                        title="Edit Inquiry"
                      >
                        <FaEdit />
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
            {inquiries.map((inquiry) => (
              <div key={inquiry._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-semibold text-sm">
                        {inquiry.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {inquiry.name}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <FaEnvelope className="mr-1" />
                        {inquiry.email}
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center text-xs text-gray-500">
                          <FaPhone className="mr-1" />
                          {inquiry.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <select
                      value={inquiry.status}
                      onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                      className={`text-xs font-medium py-1 px-2 rounded-full border-0 focus:ring-1 focus:ring-amber-500 ${getStatusColor(inquiry.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="booked">Booked</option>
                      <option value="closed">Closed</option>
                    </select>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <FaCalendarAlt className="mr-1" />
                      {formatDate(inquiry.createdAt || inquiry.date)}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <FaHome className="text-gray-400 mr-2 flex-shrink-0" />
                    <span className="line-clamp-2">
                      {inquiry.property ? inquiry.property.title : "No property specified"}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <FaEye className="text-sm" />
                      </button>
                      <button
                        className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                        title="Edit Inquiry"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {inquiries.length === 0 && !loading && (
          <div className="text-center py-12">
            <FaEnvelope className="mx-auto text-4xl text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No inquiries found</h3>
            <p className="text-gray-500">
              {filter ? "No inquiries match your current filter" : "No inquiries have been submitted yet"}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading inquiries...</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      {inquiries.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Showing {inquiries.length} inquiry{inquiries.length !== 1 ? 'ies' : ''}
          {filter && ` (filtered by ${filter})`}
        </div>
      )}
    </div>
  );
}