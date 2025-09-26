import React from 'react';
import { Instagram, MessageCircle, Users, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black tracking-wider mb-4">BYRDIE</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Beauty advice, product reviews, and the latest trends to help you look and feel your best every day.
            </p>
            <div className="flex items-center space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <MessageCircle className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Users className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Skin Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Makeup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hair Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Byrdie. All rights reserved. | Confidence, Community, and Joy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;