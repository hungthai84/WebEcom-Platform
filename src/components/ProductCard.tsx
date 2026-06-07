import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Maximize2, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      id={`product-${product.id}`}
      className="group relative bg-[#f5f5f7] rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Overlay Actions */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
        <motion.button
          id={`quick-view-${product.id}`}
          onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
          className="p-3 bg-white rounded-full text-black hover:bg-black hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Maximize2 size={20} />
        </motion.button>
        <motion.button
          id={`add-to-cart-${product.id}`}
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="p-3 bg-white rounded-full text-black hover:bg-black hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingCart size={20} />
        </motion.button>
      </div>

      {/* Ribbon/Category */}
      <div className="absolute top-4 left-4">
        <span className="px-2 py-1 text-[9px] font-mono tracking-[0.2em] uppercase bg-black text-white rounded-sm">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-sans font-medium text-[13px] tracking-tight text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="font-mono text-[11px] text-gray-500 mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};
