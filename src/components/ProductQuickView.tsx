import React from 'react';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Product Details</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-xl"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Rating */}
            <div>
              <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                {product.brand}
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">• Editor's Pick</span>
              </div>
            </div>

            {/* Product Name */}
            <h4 className="text-2xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h4>

            {/* Review Snippet */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 italic">"{product.reviewSnippet}"</p>
            </div>

            {/* Benefits */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Key Benefits</h5>
              <div className="grid grid-cols-1 gap-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Ingredients */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Key Ingredients</h5>
              <div className="flex flex-wrap gap-2">
                {product.keyIngredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Special Features */}
            {(product.spf || product.finish || product.shadeRange) && (
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Product Details</h5>
                <div className="space-y-2 text-sm text-gray-700">
                  {product.spf && (
                    <p><span className="font-medium">SPF:</span> {product.spf}</p>
                  )}
                  {product.finish && (
                    <p><span className="font-medium">Finish:</span> {product.finish}</p>
                  )}
                  {product.shadeRange && (
                    <p><span className="font-medium">Shade Range:</span> {product.shadeRange.join(', ')}</p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Now</span>
              </button>
              <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;