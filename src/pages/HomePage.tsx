import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Additional content sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Skincare routine"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">SKINCARE</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">The 7-Step Korean Skincare Routine That Changed Everything</h3>
                <p className="text-gray-600 text-sm">Discover the secrets behind glass skin with this comprehensive guide to K-beauty.</p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Makeup trends"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">MAKEUP</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fall 2025's Biggest Beauty Trends to Try Now</h3>
                <p className="text-gray-600 text-sm">From bold eyeliner to nude lips, here's what's trending this season.</p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hair care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">HAIR</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">The Best Hair Masks for Every Hair Type</h3>
                <p className="text-gray-600 text-sm">Expert-approved treatments for healthy, lustrous locks all year long.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;