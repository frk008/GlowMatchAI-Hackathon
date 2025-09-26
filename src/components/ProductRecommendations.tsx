import React, { useState } from 'react';
import { Filter, Heart, Share2, Star } from 'lucide-react';
import { ProductCategory, Product } from '../types/product';
import ProductCard from './ProductCard';
import ProductQuickView from './ProductQuickView';

interface ProductRecommendationsProps {
  categories: ProductCategory[];
  skinType: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ 
  categories, 
  skinType 
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleCloseQuickView = () => {
    setShowQuickView(false);
    setSelectedProduct(null);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Personalized Beauty Recommendations',
        text: `Check out my personalized skincare recommendations for ${skinType} skin!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const filterOptions = [
    { id: 'all', label: 'All Products' },
    { id: 'serums', label: 'Serums' },
    { id: 'moisturizers', label: 'Moisturizers' },
    { id: 'sunscreen', label: 'Sunscreen' },
    { id: 'foundations', label: 'Foundations' },
    { id: 'treatments', label: 'Treatments' }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-25', label: 'Under $25' },
    { id: '25-50', label: '$25 - $50' },
    { id: '50-100', label: '$50 - $100' },
    { id: 'over-100', label: 'Over $100' }
  ];

  const filteredCategories = categories.filter(category => 
    activeFilter === 'all' || category.id === activeFilter
  ).map(category => ({
    ...category,
    products: category.products.filter(product => {
      if (priceRange === 'all') return true;
      if (priceRange === 'under-25') return product.price < 25;
      if (priceRange === '25-50') return product.price >= 25 && product.price <= 50;
      if (priceRange === '50-100') return product.price >= 50 && product.price <= 100;
      if (priceRange === 'over-100') return product.price > 100;
      return true;
    })
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">
              Curated Just For You
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Your Personalized Beauty Match
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Curated picks from Byrdie's top-rated products, tailored to your unique {skinType.toLowerCase()} skin
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <Share2 className="h-4 w-4" />
              <span>Share Results</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
              <Heart className="h-4 w-4" />
              <span>Save Favorites</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter Products</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {filterOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  {category.subtitle}
                </p>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>

              {/* Category CTA */}
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  View All {category.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Quote Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <img
              src="https://images.pexels.com/photos/3762011/pexels-photo-3762011.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Beauty Expert"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "The key to great skin is using products that work with your unique skin type, not against it. 
              These personalized recommendations take the guesswork out of building an effective routine."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">
              Dr. Sarah Johnson, Dermatologist & Byrdie Beauty Expert
            </cite>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          isOpen={showQuickView}
          onClose={handleCloseQuickView}
        />
      )}
    </section>
  );
};

export default ProductRecommendations;