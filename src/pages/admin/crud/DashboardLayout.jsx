import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  FaHome, 
  FaBuilding, 
  FaPlus, 
  FaUsers, 
  FaEnvelope, 
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSignOutAlt,
  FaUserCircle,
  FaBlog
} from "react-icons/fa";
import { clearToken, getUserFromToken } from "../../../utils/auth";


export default function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUserFromToken();
    if (userData) setUser(userData);
    else navigate('/login');
  }, [navigate]);
  

  const linkClass = (path) =>
    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 font-medium ${
      pathname === path 
        ? "bg-amber-500 text-white shadow-lg" 
        : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
    }`;

  const navItems = [
    { path: "/dashboard", icon: FaHome, label: "Overview" },
    { path: "/dashboard/properties", icon: FaBuilding, label: "Properties" },
    { path: "/dashboard/properties/new", icon: FaPlus, label: "Add Property", highlight: true },
    { path: "/dashboard/inquiries", icon: FaEnvelope, label: "Inquiries" },
    { path: "/dashboard/blogs", icon: FaBlog, label: "Articles"}
    
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleLogout = () => {
    clearToken();
    navigate('/login');
  };
  

  const getUserInitials = () => {
    if (!user?.name) return 'U';
    return user.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserDisplayName = () => {
    if (!user?.name) return 'User';
    return user.name.split(' ')[0]; // Return first name only
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes className="text-gray-600" /> : <FaBars className="text-gray-600" />}
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-500">Welcome back, {getUserDisplayName()}</p>
            </div>
          </div>
          
          {/* Mobile User Menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
            >
              <span className="text-white font-semibold text-sm">
                {getUserInitials()}
              </span>
            </button>
            
            {/* User Dropdown Menu - Mobile */}
            {isUserMenuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email || 'user@email.com'}</p>
                </div>
                <Link
                  to="/dashboard/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <FaCog className="mr-3 text-gray-400" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500 mt-1">Legacy Estates</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${linkClass(item.path)} ${
                  item.highlight ? "bg-amber-500 text-white hover:bg-amber-600" : ""
                }`}
              >
                <item.icon className={`text-lg ${item.highlight ? "text-white" : "text-gray-400"}`} />
                <span>{item.label}</span>
                {item.highlight && (
                  <span className="ml-auto bg-white text-amber-500 text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
              >
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {getUserInitials()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name || 'Loading...'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || 'Loading...'}
                  </p>
                </div>
                <FaChevronDown className={`text-gray-400 text-sm transition-transform ${
                  isUserMenuOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* User Dropdown Menu - Desktop */}
              {isUserMenuOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <Link
                    to="/dashboard/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <FaCog className="mr-3 text-gray-400" />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FaSignOutAlt className="mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleMobileMenu}
            ></div>
            
            {/* Sidebar */}
            <div className="relative bg-white w-80 max-w-full h-full overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                    <p className="text-sm text-gray-500 mt-1">Legacy Estates</p>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FaTimes className="text-gray-600" />
                  </button>
                </div>
                
                {/* User Info in Mobile Sidebar */}
                <div className="mt-4 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {getUserInitials()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user?.name || 'Loading...'}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email || 'Loading...'}
                    </p>
                  </div>
                </div>
              </div>

              <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMobileMenu}
                    className={`${linkClass(item.path)} ${
                      item.highlight ? "bg-amber-500 text-white hover:bg-amber-600" : ""
                    }`}
                  >
                    <item.icon className={`text-lg ${item.highlight ? "text-white" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                    {item.highlight && (
                      <span className="ml-auto bg-white text-amber-500 text-xs px-2 py-1 rounded-full font-bold">
                        NEW
                      </span>
                    )}
                  </Link>
                ))}
                
                {/* Logout in Mobile Sidebar */}
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                  className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Breadcrumb - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Link to="/dashboard" className="hover:text-amber-600 transition-colors">
                  Dashboard
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium capitalize">
                  {pathname.split('/').pop()?.replace('-', ' ') || 'Overview'}
                </span>
              </div>
              
              {/* Welcome Message */}
              <div className="hidden md:block text-sm text-gray-600">
                Welcome back, <span className="font-semibold text-amber-600">{getUserDisplayName()}</span>!
              </div>
            </div>

            {/* Page Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[calc(100vh-200px)]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}