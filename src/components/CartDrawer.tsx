import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { MOCK_PRODUCTS } from '../mockData';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, totalItems } = useCart();

  // Helper to find product details from mock data
  const getProduct = (productId: string) => MOCK_PRODUCTS.find(p => p.id === productId);

  const subtotal = cart.reduce((acc, item) => {
    const product = getProduct(item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[110]">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            id="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-black" />
                <h2 className="text-xl font-sans font-bold tracking-tight">Giỏ Hàng Của Bạn</h2>
                <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded-full">{totalItems}</span>
              </div>
              <button 
                id="close-cart"
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-sans">Giỏ hàng của bạn hiện đang trống.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-black underline font-medium"
                  >
                    Tiếp Tục Mua Sắm
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;
                  return (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-32 bg-[#f5f5f7] rounded-lg overflow-hidden flex-shrink-0">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-sans font-medium text-sm text-gray-900">{product.name}</h3>
                            <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-widest">{product.category}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div className="flex-1 flex items-end justify-between mt-4">
                          <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-50 text-gray-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 font-mono text-sm border-x border-gray-50">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-50 text-gray-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="font-mono text-sm">${(product.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-[#fafafa]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] font-mono">Tổng Cộng</span>
                  <span className="text-2xl font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  id="checkout-button"
                  className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98]"
                >
                  Thanh Toán
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-tighter">
                  Thuế và phí vận chuyển được tính khi thanh toán
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
