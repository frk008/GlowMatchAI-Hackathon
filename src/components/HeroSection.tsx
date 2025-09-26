import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Main content */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beauty portrait"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            
            {/* Overlay content */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                CELEBRITIES • SEP 03, 2025
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
                Kaia Gerber's Teeny Tiny Micro-French Manicure Is the Chicest Fall Nail Inspo
              </h2>
              <p className="text-gray-700 italic">Parfaite!</p>
            </div>
          </div>

          {/* Side content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                THE MUSE ISSUE
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                HANNAH JEFERNER & PAIGE DESORBO
              </h3>
              <img
                src="https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fashion models"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-black text-white text-center py-3 px-6 text-lg font-bold tracking-wider">
                BYRDIE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;