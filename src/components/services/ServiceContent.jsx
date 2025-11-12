import React from 'react';
import { 
  FaHome, 
  FaBuilding, 
  FaBalanceScale, 
  FaGlobe, 
  FaChartLine, 
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaFileContract,
  FaHandshake
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaBuilding,
      title: "Property Development & Construction",
      description: "Turn your purchased plots into dream homes or rental properties with our end-to-end construction services.",
      features: [
        "Architectural design & approvals",
        "Construction project management",
        "Bill of quantities (BQ) estimates",
        "Turnkey 'Build for Me' packages",
        "Gated community partnerships"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Start Your Project",
      badge: "Construction"
    },
    {
      icon: FaHome,
      title: "Property Management",
      description: "Comprehensive management solutions for diaspora investors and local landlords.",
      features: [
        "Rent collection & tenant management",
        "Maintenance coordination",
        "Property inspection & reporting",
        "Tenant screening & onboarding",
        "Regular performance reports"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Manage Property",
      badge: "Management"
    },
    {
      icon: FaShieldAlt,
      title: "Land Due Diligence & Legal Services",
      description: "Ensure your investment is secure with our comprehensive verification and legal support.",
      features: [
        "Title verification & registry search",
        "Land ownership transfer support",
        "Succession & power of attorney",
        "Legal consultation partners",
        "Document authentication"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Verify Property",
      badge: "Legal"
    },
    {
      icon: FaGlobe,
      title: "Diaspora Investment Support",
      description: "Specialized services for international investors looking to build wealth back home.",
      features: [
        "Dedicated diaspora agent team",
        "Virtual property tours",
        "Secure online payments",
        "Title deed courier services",
        "Group investment options"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Invest from Abroad",
      badge: "Diaspora"
    },
    {
      icon: FaChartLine,
      title: "Real Estate Consultancy",
      description: "Data-driven insights and expert guidance for strategic property investments.",
      features: [
        "Area growth analysis",
        "ROI forecasting",
        "Custom land scouting",
        "Market intelligence reports",
        "Portfolio strategy"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Get Consultation",
      badge: "Consulting"
    },
    {
      icon: FaGraduationCap,
      title: "Legacy Academy",
      description: "Empower your investment decisions with our comprehensive real estate education.",
      features: [
        "Land buying safety guide",
        "Title deeds & registration",
        "Investment strategies",
        "Building permits & zoning",
        "Portfolio development"
      ],
      gradient: "from-amber-300 to-amber-400",
      cta: "Start Learning",
      badge: "Education"
    }
  ];

  return (
    <section className="relative py-5 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Beyond Land Sales
          </h2>
          
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-4 rounded-full"></div>
          
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Your complete real estate partner offering end-to-end services from purchase to development and management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-amber-300 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-300/20"
            >
              

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-amber-300/20">
                  <service.icon className="text-2xl text-amber-300" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheckCircle className="text-amber-300 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: 'Cambria, serif' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </div>
          ))}
        </div>

        {/* Unified CTA Section */}
        <div className="text-center">
          <div className="bg-black  p-12 border border-amber-300/20">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Cambria, serif' }}
            >
              Ready to Build Your Legacy?
            </h3>
            <p 
              className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Cambria, serif' }}
            >
              Whether you're buying land, building a home, or managing investments, we're here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a href='https://calendly.com/legacyestatesafrica/30min' className="group border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-white font-light px-8 py-4 transition-all duration-500 transform hover:scale-105">
                <span style={{ fontFamily: 'Cambria, serif' }}>
                  Talk to an Expert
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;