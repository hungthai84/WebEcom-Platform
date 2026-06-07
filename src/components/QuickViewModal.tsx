import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            id="quick-view-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              id="close-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-black hover:bg-black hover:text-white z-10 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-[#f5f5f7]">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <div className="flex-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-2 block">
                  {product.category}
                </span>
                <h2 className="text-3xl font-sans font-bold tracking-tight text-gray-900 mb-4">
                  {product.name}
                </h2>
                <div className="text-2xl font-mono text-gray-900 mb-6">
                  ${product.price.toFixed(2)}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500">Mô Tả</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-mono text-gray-500">TRẠNG THÁI:</span>
                     <span className="text-xs font-mono text-green-600">CÒN HÀNG ({product.stock})</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <motion.button
                  id="add-to-cart-modal"
                  onClick={() => { addToCart(product); onClose(); }}
                  className="w-full py-4 bg-black text-white rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-opacity-90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={20} />
                  Thêm Vào Giỏ Hàng
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
