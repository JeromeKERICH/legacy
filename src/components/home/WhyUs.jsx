import React from 'react';
import { 
  FaFileContract, 
  FaCreditCard, 
  FaGlobe, 
  FaHandshake,
  FaArrowRight,
  FaHome,
  FaCheckCircle,
  FaUser
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaFileContract,
      title: "Clean Title Deeds",
      description: "Every property is fully verified, beaconed, and ready for transfer.",
      gradient: "from-amber-300 to-amber-400",
      bgGradient: "from-amber-300/10 to-amber-400/10",
      stat: "100% Verified"
    },
    {
      icon: FaCreditCard,
      title: "Flexible Payment Plans",
      description: "Own land at your pace with affordable, transparent payment options.",
      gradient: "from-amber-300 to-amber-400",
      bgGradient: "from-amber-300/10 to-amber-400/10",
      stat: "0% Hidden Fees"
    },
    {
      icon: FaGlobe,
      title: "Diaspora Support",
      description: "Invest safely from anywhere in the world with end-to-end guidance.",
      gradient: "from-amber-300 to-amber-400",
      bgGradient: "from-amber-300/10 to-amber-400/10",
      stat: "Global Reach"
    },
    {
      icon: FaHandshake,
      title: "Trusted Service",
      description: "We walk with you from site visit to title deed, no shortcuts, no hidden fees.",
      gradient: "from-amber-300 to-amber-400",
      bgGradient: "from-amber-300/10 to-amber-400/10",
      stat: "10+ Years"
    }
  ];

  return (
    <section className="relative py-6 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/30 rounded-full animate-float"
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
        
        {/* Header with Premium Badge */}
        <div className="text-center mb-5">
          <h2 
            className="text-2xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Why Choose Legacy Estates
          </h2>
          
          <div className="w-32 h-1 bg-amber-300 mx-auto mb-8 rounded-full"></div>
          
          <p 
            className="md:text-xl text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Because you deserve land that's <span className="text-amber-300 font-semibold">real, verified, and ready</span> for your legacy.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-amber-300/30 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-300/10"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    
                    <div>
                      <h3 
                        className="md:text-2xl text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Cambria, serif' }}
                      >
                        {feature.title}
                      </h3>
                      <span 
                        className="inline-flex items-center gap-1 px-3 py-1 bg-amber-300/10 rounded-full text-sm text-amber-300 border border-amber-300/30"
                        style={{ fontFamily: 'Cambria, serif' }}
                      >
                        <FaCheckCircle className="text-xs" />
                        {feature.stat}
                      </span>
                    </div>
                  </div>
                </div>

                <p 
                  className="text-gray-300 text-lg leading-relaxed"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center">
                    <FaArrowRight className="text-white text-sm" />
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
            </div>
          ))}
        </div>

        {/* Premium Trust Bar */}
        <div className="bg-gray-100 rounded-2xl p-8 backdrop-blur-sm mb-12">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-amber-300/30">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <div 
                  className="text-xl font-bold text-gray-700 mb-1"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  500+
                </div>
                <div 
                  className="text-gray-600  font-light md:text-lg text-xs"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  Happy Clients
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-amber-300/30">
                <FaHome className="text-white text-xl" />
              </div>
              <div>
                <div 
                  className="text-xl font-bold text-gray-700 mb-1"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  250+
                </div>
                <div 
                  className="text-gray-600 font-light md:text-lg text-xs"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  Properties Sold
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-amber-300/30">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <div>
                <div 
                  className="text-xl font-bold text-gray-700 mb-1"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  5+
                </div>
                <div 
                  className="text-gray-600 font-light md:text-lg text-xs"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center">
          <button className="group relative bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-lg px-12 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-amber-300/25 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span 
              className="relative flex items-center gap-3"
              style={{ fontFamily: 'Cambria, serif' }}
            >
              View Available Plots
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;