import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

export const FeaturedProductsSlider: React.FC = () => {
  const { products } = useProducts();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-12 bg-white w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-400 mb-4 block">Gợi Ý Cho Bạn</span>
            <h2 className="text-4xl font-display font-bold tracking-tight text-black uppercase">
              Sản Phẩm <span className="text-gray-300 italic">Nổi Bật</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-start group relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="bg-white/80 backdrop-blur text-black p-3 rounded-full shadow-lg">
                      <ArrowUpRight size={16} />
                   </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">{product.category}</div>
                <h3 className="text-lg font-medium tracking-tight text-black flex justify-between items-start">
                  <span>{product.name}</span>
                  <span className="font-mono text-sm">${product.price}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
