import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center space-x-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleQuickView}
            className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Quick View"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full transition-colors ${isFavorited ? 'bg-red-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
            title="Add to Favorites"
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-900">${product.price}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
            {product.brand}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h4>

        {/* Benefits */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <span
                key={index}
                className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
            {product.benefits.length > 2 && (
              <span className="text-xs text-gray-500">
                +{product.benefits.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Review Snippet */}
        <p className="text-xs text-gray-600 italic mb-3 line-clamp-2">
          {product.reviewSnippet}
        </p>

        {/* Key Ingredients */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Key Ingredients:</p>
          <p className="text-xs text-gray-700 font-medium">
            {product.keyIngredients.slice(0, 2).join(', ')}
            {product.keyIngredients.length > 2 && '...'}
          </p>
        </div>

        {/* Shop Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
          <ShoppingBag className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;