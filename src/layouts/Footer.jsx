import { 
    MapPin, 
    Phone, 
    Mail, 
    Globe, 
    Facebook, 
    Instagram, 
    Linkedin, 
    Twitter 
  } from 'lucide-react';
  import { Link } from 'react-router-dom';

  
  const Footer = () => {
    return (
      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: About Legacy Estates */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-yellow-500 mb-4">
                About Legacy Estates
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Legacy Estates Limited helps Kenyans locally and abroad own verified, titled, and affordable land — with flexible payment options and free site visits.
              </p>
              <p className="text-gold-400 font-medium text-sm">
                Your dream. Your land. Your legacy.
              </p>
            </div>
  
            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-yellow-500 mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Home',
                 
                  'Properties',
                  'Legacy Digest',
                  'Realtors',
                  
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
  
            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-yellow-500 mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    New Garden Estate Road, 2nd Mugumoini Drive,<br />
                    House No.11, Nairobi, Kenya
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+254 717 112 222</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">info@legacyestates.co.ke</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">www.legacyestates.co.ke</p>
                </div>
              </div>
            </div>
  
            {/* Column 4: Follow Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-yellow-500 mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Facebook, name: 'Facebook' },
                  { icon: Instagram, name: 'Instagram' },
                  { icon: Linkedin, name: 'LinkedIn' },
                  { icon: Twitter, name: 'X (Twitter)' }
                ].map(({ icon: Icon, name }) => (
                  <a
                    key={name}
                    href="https://www.facebook.com/profile.php?id=100093141535386&sk=about"
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors duration-200 text-sm border border-gray-700 hover:border-gold-500 rounded-md px-3 py-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-300 text-sm italic">
                "Join our online community and learn how to invest in land with confidence."
              </p>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  © Legacy Estates Limited — All Rights Reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gold-400 text-sm font-medium">
                  Empowering Kenyans to build wealth through land ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;