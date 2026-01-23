import React from 'react';
import type { Product } from '../type/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col items-center p-0 hover:scale-[1.03]">
      <div className="w-full flex justify-center -mt-10 z-10">
        <div className="rounded-full bg-white shadow-lg p-2 mt-10 mb-2 overflow-hidden border-4 border-blue-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-32 w-32 object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(product.title)}`;
            }}
          />
        </div>
      </div>
      <div className="w-full px-6 pt-2 pb-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-extrabold text-gray-900 truncate flex-1 mr-2 group-hover:text-blue-700 transition-colors">
            {product.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 text-xs font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5em]">
          {product.description}
        </p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5em]">
         Rating : {product.rating.rate}
        </p>
        {/* Rating removed for cleaner look */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-extrabold text-blue-700 drop-shadow-sm">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <span className="inline-block align-middle mr-1">🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;