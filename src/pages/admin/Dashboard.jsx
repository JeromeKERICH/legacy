import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import {
  FaHome,
  FaEnvelope,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaEye,
} from 'react-icons/fa';
import dayjs from 'dayjs';

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/admin/stats');
        setStats(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  const { properties, inquiries, payments, agents, recentActivity } = stats || {};

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Admin Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Real-time overview of your platform performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Properties"
          value={properties}
          icon={<FaHome className="text-blue-600 text-2xl" />}
          bg="bg-blue-50"
        />
        <StatCard
          title="New Inquiries"
          value={inquiries}
          icon={<FaEnvelope className="text-green-600 text-2xl" />}
          bg="bg-green-50"
        />
        <StatCard
          title="Payments Processed"
          value={payments}
          icon={<FaCreditCard className="text-amber-600 text-2xl" />}
          bg="bg-amber-50"
        />
        <StatCard
          title="Active Agents"
          value={agents}
          icon={<FaUsers className="text-purple-600 text-2xl" />}
          bg="bg-purple-50"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">
            Refresh
          </button>
        </div>

        {!recentActivity?.length ? (
          <p className="text-gray-500 text-sm text-center py-8">No recent activity yet.</p>
        ) : (
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div
                  className={`p-2 rounded-full ${
                    activity.type === 'property'
                      ? 'bg-blue-100'
                      : activity.type === 'inquiry'
                      ? 'bg-green-100'
                      : activity.type === 'payment'
                      ? 'bg-amber-100'
                      : 'bg-purple-100'
                  }`}
                >
                  {activity.type === 'property' && <FaHome className="text-blue-600" />}
                  {activity.type === 'inquiry' && <FaEnvelope className="text-green-600" />}
                  {activity.type === 'payment' && <FaCreditCard className="text-amber-600" />}
                  {activity.type === 'user' && <FaUsers className="text-purple-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {dayjs(activity.time).format('MMM D, YYYY h:mm A')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start space-x-3">
          <FaEye className="text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-900">Protected Area</p>
            <p className="text-sm text-blue-700 mt-1">
              This dashboard contains sensitive company information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Card Component */
function StatCard({ title, value, icon, bg }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value ?? 0}</p>
        </div>
        <div className={`p-3 ${bg} rounded-xl`}>{icon}</div>
      </div>
    </div>
  );
}
