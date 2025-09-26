import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Instagram, MessageCircle, Users, Mail, Camera } from 'lucide-react';

const Navigation: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  const navItems = [
    'SKIN',
    'MAKEUP', 
    'HAIR',
    'NAILS',
    'STYLE',
    'NEWS',
    'WHAT TO BUY',
    'HEALTH AND WELLNESS',
    'ABOUT US'
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with tagline and social */}
        <div className="flex justify-between items-center py-3 text-xs uppercase tracking-wider border-b border-gray-100">
          <div className="text-gray-700 font-medium">
            CONFIDENCE, COMMUNITY, AND JOY
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <Instagram className="h-4 w-4" />
              <span>582K</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>694K</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>195K</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>101K</span>
            </div>
            <button className="flex items-center space-x-1 bg-black text-white px-3 py-1 text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors">
              <Mail className="h-3 w-3" />
              <span>SUBSCRIBE</span>
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-4xl font-black tracking-wider">BYRDIE</h1>
          </Link>

          {/* Navigation menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'ABOUT US' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
            
            {/* GlowMatch AI with tooltip */}
            <div className="relative">
              <Link
                to="/glowmatch-ai"
                className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors uppercase tracking-wide flex items-center space-x-1 bg-purple-50 px-3 py-2 rounded-lg border border-purple-200"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <Camera className="h-4 w-4" />
                <span>GLOWMATCH AI</span>
              </Link>
              
              {showTooltip && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
                  Ask AI for your beauty products
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Search icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Mobile menu - simplified for demo */}
        <div className="lg:hidden pb-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'ABOUT US' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide py-2"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/glowmatch-ai"
              className="text-purple-600 hover:text-purple-800 transition-colors uppercase tracking-wide py-2 flex items-center space-x-1"
            >
              <Camera className="h-4 w-4" />
              <span>GLOWMATCH AI</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;