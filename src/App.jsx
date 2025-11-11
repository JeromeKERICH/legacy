import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

// Layouts & UI
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

// Inactivity Handler



// Public Pages
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PropertyDetail from "./pages/PropertyDetails";

// Auth Pages
import Login from "./pages/admin/Login";
import Register from "./pages/admin/Register";

// Dashboard & CRUD
import DashboardLayout from "./pages/admin/crud/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import PropertyList from "./pages/admin/crud/PropertyList";
import PropertyForm from "./pages/admin/crud/PropertyForm";
import Inquiries from "./pages/admin/crud/Inquiries";
import InactivityHandler from "./pages/admin/InactivityHandler";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/admin/blog/BlogList";
import BlogEditor from "./pages/admin/blog/BlogEditor";
import Articles from "./pages/Articles";

// 🛡️ General Protected Route
function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role-based restriction (if roles prop exists)
  if (roles && !roles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Access Denied</h2>
          <p className="text-gray-700">
            You don’t have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return children;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <InactivityHandler timeout={5 * 60 * 1000} /> {/* 5 minutes */}
      <main className="flex-grow">
        <Routes>
          {/* 🌍 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/listings" element={<Listings />} />
          <Route path="/legacy" element={<Articles/>}/>
          <Route path="/property/:slug" element={<PropertyDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🔐 Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Default dashboard overview */}
            <Route index element={<Dashboard />} />

            {/* 🏠 Property Management (agents + admins) */}
            <Route path="properties" element={<PropertyList />} />
            <Route path="properties/new" element={<PropertyForm />} />
            <Route path="properties/edit/:id" element={<PropertyForm />} />

            {/* 📨 Inquiries (agents + admins) */}
            <Route path="inquiries" element={<Inquiries />} />

             {/* Blog CRUD */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/new" element={<BlogEditor />} />
            <Route path="blog/edit/:id" element={<BlogEditor />} />

            
          </Route>

          {/* 🧭 Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
