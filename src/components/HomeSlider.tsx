import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, MapPin, ChevronRight, Award, Flame, Heart } from 'lucide-react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../mockData';

interface HomeSliderProps {
  onAppointmentClick: () => void;
  onQuickView: (product: Product) => void;
  setView: (view: 'home' | 'products' | 'gifts' | 'events') => void;
}

export const HomeSlider: React.FC<HomeSliderProps> = ({ onAppointmentClick, onQuickView, setView }) => {
  
  // Highlighting 4 luxury featured items from the 90 products
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  // Elite jewelry lines
  const categoriesList = [
    { name: 'nhẫn', title: 'Nhẫn Kim Cương & Vàng 18K', desc: 'Thiết kế tinh xảo từ vàng nguyên bản và kim cương tự nhiên.', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop' },
    { name: 'vòng cổ', title: 'Vòng Cổ Di Sản Đại Dương', desc: 'Chuỗi xích thượng hạng nạm bọc ngọc trai biển khơi và Hồng Ngọc.', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop' },
    { name: 'vòng tay', title: 'Vòng & Lắc Tay Solaris', desc: 'Vệt chạm rèn tay thủ công tôn vinh nét mảnh mai quyến rũ.', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' },
    { name: 'bông tai', title: 'Hoops & Đinh Tán Quý Tộc', desc: 'Đính kết chùm Chandelier pha lê lộng lẫy thu trọn ánh sáng cực đỉnh.', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-black">
      
      {/* 1. HERO BANNER SECTION (Identical to your provided design) */}
      <section className="relative min-h-screen pt-40 pb-20 px-6 sm:px-10 lg:px-12 flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#ec97d1] via-[#987ff2] to-[#7ce1ed]">
        
        {/* Glowing Ambient Orbs for the ethereal light effect in the screenshot */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 blur-[80px] opacity-40 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 blur-[100px] opacity-50 mix-blend-screen pointer-events-none" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-pink-300 blur-[90px] opacity-30 mix-blend-screen pointer-events-none" />

        {/* The Beautiful Transparent Silhouette of the draped high-fashion woman model */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-85 mix-blend-normal pointer-events-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop" 
            alt="Skinova Muse" 
            className="w-full h-full object-cover scale-105 select-none object-center"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
            }}
          />
          {/* Subtle light overlay to blend the graphic with background gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#FAFAFA]/10" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col justify-between flex-1 gap-16">
          
          {/* Top Metadata Headers */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white text-[11px] font-mono tracking-[0.25em] uppercase font-light">
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-white/80 animate-pulse" />
                <span>Skin Analysis</span>
              </div>
              <div>Acne & Skin Health</div>
              <div className="sm:text-right">2K+ Global Trusted Customers</div>
            </div>
            
            {/* The Horizontal dotted separator line stretching across */}
            <div className="w-full border-t border-dashed border-white/20 mt-4" />
          </div>

          {/* Majestic Typography: SKINOVA BEAUTY */}
          <div className="w-full flex-1 flex flex-col justify-end min-h-[30vh]">
            <div className="grid grid-cols-1 md:grid-cols-12 items-end">
              
              {/* SKINOVA on the left */}
              <div className="md:col-span-8">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 0.95, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-serif font-light text-[13vw] sm:text-[11vw] lg:text-[11vw] tracking-normal text-white uppercase leading-none drop-shadow-sm select-none"
                >
                  SKINOVA
                </motion.h2>
              </div>

              {/* BEAUTY on the right */}
              <div className="md:col-span-4 md:text-right mt-2 md:mt-0">
                <motion.h2 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="font-serif font-light text-[15vw] sm:text-[13vw] lg:text-[13vw] italic text-white leading-none drop-shadow-sm select-none"
                >
                  BEAUTY
                </motion.h2>
              </div>

            </div>
          </div>

          {/* Bottom Card Row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 items-end gap-8 mt-4">
            
            {/* Left Description Box */}
            <div className="md:col-span-7">
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 text-sm sm:text-base md:text-lg font-sans max-w-lg leading-relaxed font-light drop-shadow-sm"
              >
                Chúng tôi kiến tạo các dòng sản phẩm tối giản, công nghệ trị liệu da hiện đại & trải nghiệm trang sức cao cấp mang tính nghệ thuật và tinh khiết.
              </motion.p>
            </div>

            {/* Right Side Glassmorphic Card */}
            <div className="md:col-span-5 flex justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-xl border border-white/20 rounded-[24px] p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-between group"
              >
                <div className="space-y-3 font-sans">
                  <h4 className="text-black font-serif text-lg sm:text-xl font-medium tracking-normal">
                    Trị liệu Da & Trang sức cá nhân
                  </h4>
                  <div className="flex items-center gap-4 flex-wrap text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                      📅 12 Tuần
                    </span>
                    <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                      ✦ Trị liệu mụn & Đánh bóng
                    </span>
                  </div>
                </div>

                {/* Sparkling Icon Arrow button */}
                <button
                  onClick={onAppointmentClick}
                  className="w-12 h-12 rounded-full cursor-pointer bg-[#b48cee] hover:bg-purple-600 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-lg transition-all shrink-0 ml-4"
                  title="Đặt lịch hẹn ngay"
                >
                  <ArrowUpRight size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>

          </div>

        </div>

      </section>

      {/* 2. CHOOSE BY DÒNG SẢN PHẨM/CATEGORIES (Keeping all information and products) */}
      <section className="py-24 px-6 sm:px-10 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-purple-600 font-bold block mb-3">
              Elite Collections / Danh các dòng sản phẩm
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-black uppercase tracking-tight">
              Dòng Sản Phẩm <span className="font-serif italic font-light text-gray-400">Kiệt Tác</span>
            </h3>
          </div>
          <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
            Hệ sinh thái sản phẩm cao cấp của Skinova được tuyển chọn kỹ lưỡng gồm 90 sản phẩm kết hợp giữa công nghệ chăm sóc tế bào da và trang sức vàng, ngọc thiên nhiên.
          </p>
        </div>

        {/* Carousel Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -6 }}
              onClick={() => {
                setView('products');
                // Optional: set current active filter to this product line
              }}
              className="bg-white rounded-[24px] border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden cursor-pointer group flex flex-col h-full"
            >
              {/* Product Category Thumbnail Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full px-3 py-1 text-[9px] font-mono tracking-widest text-black uppercase font-bold">
                  SKINOVA DESIGN
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h4 className="text-black font-serif text-lg font-medium group-hover:text-purple-600 transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 font-sans leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-purple-600 pt-2 border-t border-gray-50">
                  <span>Khám phá ngay</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FEAUTURED DIAMONDS & PEARLS LISTING GRID */}
      <section className="bg-white py-24 border-t border-gray-100/50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-purple-600 font-bold block mb-3">
                Masterpieces / Bản giới hạn
              </span>
              <h3 className="text-3xl md:text-5xl font-display font-medium text-black uppercase tracking-tight">
                Tuyển Chọn <span className="font-serif italic font-light text-gray-400">Tinh Tuyển</span>
              </h3>
            </div>
            
            <button 
              onClick={() => setView('products')}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-black border-b border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors"
            >
              Xem Toàn Bộ 90 Sản Phẩm
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Best-sellers List items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group cursor-pointer flex flex-col rounded-3xl overflow-hidden bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  {/* Category Ribbon */}
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-[8.5px] font-mono tracking-widest text-white uppercase font-semibold">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="text-xs text-gray-400 font-mono uppercase tracking-widest">Mã số: #00{product.id}</h4>
                    <h3 className="text-black font-serif text-sm font-medium tracking-tight h-10 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-black font-semibold text-sm font-mono">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 font-semibold group-hover:underline">
                      Chi tiết ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLINICAL SKIN ANALYSIS INTEGRATED ADVERTISEMENT */}
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-[#FAFAFA] py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] bg-purple-100 text-purple-700 font-mono tracking-[0.25em] uppercase font-bold py-1.5 px-4 rounded-full border border-purple-200">
                Lớp học chuyên sâu SKINOVA
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif text-black font-medium leading-none">
                Chẩn đoán da khoa học cùng <br />
                Đồng hành trang sức phong thủy
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl font-sans">
                Tại Skinova, chúng tôi tin rằng vẻ đẹp rạng rỡ của làn da tế bào là lớp nền trang sức quý giá nhất của mỗi người. Khi quý khách tham gia liệu trình phân tích và phục hồi cấu trúc da, chúng tôi đồng thời cung cấp dịch vụ thiết kế các kiệt tác trang sức hộ mệnh cá nhân tương ứng với từng sắc tố khí chất ban sơ.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                <Award size={24} className="text-purple-600 mx-auto mb-2" />
                <h5 className="text-xs text-black font-bold uppercase font-sans">100% Khách Hàng</h5>
                <p className="text-[10px] text-gray-400 mt-1">Đạt chứng nhận hài lòng về kết quả sau trị liệu da mặt.</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                <Flame size={24} className="text-purple-600 mx-auto mb-2" />
                <h5 className="text-xs text-black font-bold uppercase font-sans">90 Kiệt Tác</h5>
                <p className="text-[10px] text-gray-400 mt-1">Sản phẩm thủ công độc bản cho mọi nhu cầu.</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                <Heart size={24} className="text-purple-600 mx-auto mb-2" />
                <h5 className="text-xs text-black font-bold uppercase font-sans">Trọn đời</h5>
                <p className="text-[10px] text-gray-400 mt-1">Bảo hành kim cương thiên nhiên trọn đời.</p>
              </div>
            </div>

            {/* Book Now trigger */}
            <button
              onClick={onAppointmentClick}
              className="bg-black hover:bg-gray-900 text-white font-mono text-[10px] tracking-[0.2em] font-semibold uppercase rounded-full px-10 py-4 shadow-xl transition-all hover:scale-103 active:scale-97 cursor-pointer"
            >
              Liên Hệ Đặt Lịch Tư Vấn ↗
            </button>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Visual stacked card */}
            <div className="relative w-[85%] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=700&auto=format&fit=crop" 
                alt="Personalized Beauty Design" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                <div className="text-[9px] font-mono tracking-widest text-purple-200 uppercase mb-1">Mùa Đã Sẵn Giọng</div>
                <h4 className="text-lg font-serif font-medium mb-1">Thiết kế Nhẫn Aurum Eternal</h4>
                <p className="text-xs text-white/80 leading-normal font-sans font-light">Thử trực tiếp và lấy số đo khuôn tay tại Spa Skinova.</p>
              </div>
            </div>

            {/* Miniature float circle */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-xl border border-gray-50 flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-mono font-bold tracking-widest">
                SKINOVA
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
