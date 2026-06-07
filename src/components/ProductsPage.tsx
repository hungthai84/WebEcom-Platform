import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { useProducts } from '../context/ProductContext';
import { Filter, ChevronDown } from 'lucide-react';

interface ProductsPageProps {
  onQuickView: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onQuickView }) => {
  const { products, loading } = useProducts();
  const [activeCategory, setActiveCategory] = useState<string>('tất cả');
  const [sortBy, setSortBy] = useState<string>('newest');

  const categories = useMemo(() => ['tất cả', ...Array.from(new Set(products.map(p => p.category)))], [products]);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'tất cả') {
      result = result.filter(p => p.category === activeCategory);
    }
    return result;
  }, [activeCategory, products]);

  return (
    <div className="w-full min-h-screen bg-[#fafafa]">
      {/* Editorial Header */}
      <section className="px-12 pt-24 pb-12 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-mono tracking-[0.4em] uppercase text-gray-400 mb-4"
            >
              Bộ Sưu Tập / 2024
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-black uppercase leading-[1]"
            >
              Danh Mục <br />
              <span className="text-gray-300 italic">Sản Phẩm</span>
            </motion.h1>
          </div>
          <div className="max-w-xs text-sm text-gray-500 leading-relaxed font-sans pb-2">
            Khám phá những thiết kế được chế tác tỉ mỉ của chúng tôi. Mỗi tác phẩm là một minh chứng cho sự chính xác kỹ thuật và thẩm mỹ đương đại.
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-xl border-b border-gray-100 px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-gray-400">
            <Filter size={12} />
            <span>Lọc Theo:</span>
          </div>
          <div className="flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all relative py-1 ${
                  activeCategory === cat ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="category-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Sắp Xếp:</span>
          <button className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-black hover:opacity-60 transition-opacity">
            Mới Nhất <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <section className="px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard 
                  product={product} 
                  onQuickView={onQuickView} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em]">Không tìm thấy sản phẩm nào trong danh mục này</p>
            <button 
              onClick={() => setActiveCategory('tất cả')}
              className="mt-4 text-black underline text-xs font-mono tracking-widest uppercase"
            >
              Đặt Lại Bộ Lọc
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
