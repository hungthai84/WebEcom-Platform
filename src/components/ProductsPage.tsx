import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { MOCK_PRODUCTS } from '../mockData';
import { Filter, ChevronDown, Search, X, SlidersHorizontal, Grid } from 'lucide-react';

interface ProductsPageProps {
  onQuickView: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onQuickView }) => {
  const [activeCategory, setActiveCategory] = useState<string>('tất cả');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(12);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  const categories = ['tất cả', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  // Reset page size when category, search, or sorting changes
  useEffect(() => {
    setPageSize(12);
  }, [activeCategory, searchTerm, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];
    
    // Filter by Category
    if (activeCategory !== 'tất cả') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search Term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, pageSize);
  }, [filteredProducts, pageSize]);

  const handleLoadMore = () => {
    setPageSize((prev) => Math.min(prev + 12, filteredProducts.length));
  };

  const getSortLabel = (key: string) => {
    switch (key) {
      case 'newest': return 'Mới Nhất';
      case 'price-asc': return 'Giá: Thấp đến Cao';
      case 'price-desc': return 'Giá: Cao đến Thấp';
      case 'name-asc': return 'Tên: A đến Z';
      default: return 'Mới Nhất';
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#fafafa]">
      {/* Editorial Header */}
      <section className="px-6 md:px-12 pt-24 pb-12 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-mono tracking-[0.4em] uppercase text-orange-500 mb-4"
            >
              Bộ Sưu Tập Trang Sức / 90 Sản Phẩm Độc Bản
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-black uppercase leading-[1.1] md:leading-[1]"
            >
              Danh Mục <br />
              <span className="text-gray-300 italic">Sản Phẩm</span>
            </motion.h1>
          </div>
          <div className="max-w-md text-sm text-gray-500 leading-relaxed font-sans pb-2">
            Khám phá 90 thiết kế cao cấp được sản xuất giới hạn và chia thành nhiều dòng sản phẩm chính hãng: từ những mẫu nhẫn cưới thiêng liêng đến những bộ quà tặng di sản tráng lệ.
          </div>
        </div>
      </section>

      {/* Control Bar (Modern Sticky Layout) */}
      <div className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-xl border-b border-gray-100 px-6 md:px-12 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Category Filters */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none pb-2 md:pb-0">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-gray-400 shrink-0">
              <Filter size={11} />
              <span>Dòng sản phẩm:</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSearchTerm(''); // clear search on category tab change
                  }}
                  className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all relative py-1 ${
                    activeCategory === cat ? 'text-black font-semibold' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="category-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
            
            {/* Search Input Box */}
            <div className="relative flex items-center bg-white border border-gray-200 rounded-full py-1.5 px-3 w-48 sm:w-64 focus-within:border-black transition-colors">
              <Search size={13} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-xs w-full text-black placeholder-gray-400 font-sans"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-gray-400 hover:text-black focus:outline-none"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 border border-gray-200 bg-white hover:border-black transition-colors rounded-full py-1.5 px-4 text-[10px] font-mono tracking-[0.1em] uppercase text-black"
              >
                <span>Xếp: {getSortLabel(sortBy)}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden py-1"
                    >
                      {[
                        { key: 'newest', label: 'Mới Nhất' },
                        { key: 'price-asc', label: 'Giá: Thấp đến Cao' },
                        { key: 'price-desc', label: 'Giá: Cao đến Thấp' },
                        { key: 'name-asc', label: 'Tên: A đến Z' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setSortBy(item.key);
                            setIsSortOpen(false);
                          }}
                          className={`w-full text-left px-5 py-2.5 text-xs font-mono tracking-wider uppercase transition-colors hover:bg-gray-50 block ${
                            sortBy === item.key ? 'text-black font-semibold' : 'text-gray-500'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Catalog Info & Grid */}
      <section className="px-6 md:px-12 py-8">
        
        {/* Results Counter */}
        <div className="mb-8 flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={12} />
            <span>Kết quả: {filteredProducts.length} sản phẩm</span>
          </div>
          <div className="flex items-center gap-2">
            <Grid size={12} />
            <span>Đang hiển thị: {Math.min(pageSize, filteredProducts.length)} / {filteredProducts.length}</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard 
                  product={product} 
                  onQuickView={onQuickView} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-gray-100 shadow-sm mx-auto max-w-lg mt-8 px-6">
            <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Không tìm thấy sản phẩm nào</p>
            <p className="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">Hãy thử tìm kiếm với từ khóa khác hoặc đặt lại bộ lọc sang chế độ tất cả.</p>
            <button 
              onClick={() => {
                setActiveCategory('tất cả');
                setSearchTerm('');
              }}
              className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-gray-900 transition-all shadow-md"
            >
              Đặt Lại Tìm Kiếm
            </button>
          </div>
        )}

        {/* Load More Trigger Button */}
        {filteredProducts.length > pageSize && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4">
            <button
              onClick={handleLoadMore}
              className="bg-black text-white rounded-full px-12 py-4 text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Xem Thêm Sản Phẩm
            </button>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Hiển thị {pageSize} của {filteredProducts.length} mặt hàng
            </span>
          </div>
        )}
      </section>
    </div>
  );
};
