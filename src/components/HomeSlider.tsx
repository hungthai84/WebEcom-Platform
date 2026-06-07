import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: "Bộ Sưu Tập Di Sản",
    title: "TINH HOA\nÁNH KIM",
    description: "Những thiết kế vàng 18k nguyên khối mang tính kiến trúc dành cho những người theo đuổi phong cách tối giản hiện đại.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    color: "bg-black",
    accent: "text-amber-500"
  },
  {
    id: 2,
    subtitle: "Sản Phẩm Mới",
    title: "NGỌC TRAI\nRỰC RỠ",
    description: "Ngọc trai biển Nam Hải được khai thác bền vững tích hợp với hệ thống vàng hồng mô-đun tinh tế.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
    color: "bg-gray-900",
    accent: "text-rose-400"
  },
  {
    id: 3,
    subtitle: "Phiên Bản Giới Hạn",
    title: "KIM CƯƠNG\nTHIÊN ĐƯỜNG",
    description: "Kim cương cắt giác rực rỡ đặt trong khung bạch kim được chế tác chính xác để tối ưu hóa khả năng hấp thụ ánh sáng.",
    image: "https://images.unsplash.com/photo-1535633302713-102a4175359b?q=80&w=1000&auto=format&fit=crop",
    color: "bg-black",
    accent: "text-blue-400"
  },
  {
    id: 4,
    subtitle: "Bạch Kim Sang Trọng",
    title: "ÁNH SÁNG\nTINH KHIẾT",
    description: "Vẻ đẹp thuần khiết của bạch kim kết hợp với những đường nét tinh xảo, tạo nên đẳng cấp khác biệt.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    color: "bg-slate-900",
    accent: "text-cyan-300"
  },
  {
    id: 5,
    subtitle: "Bộ Sưu Tập Cưới",
    title: "VĨNH CỬU\nTÌNH YÊU",
    description: "Cùng lưu dấu những khoảnh khắc trọng đại với những thiết kế nhẫn cưới được chế tác tỉ mỉ và tâm huyết.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    color: "bg-stone-900",
    accent: "text-pink-300"
  }
];

export const HomeSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col md:flex-row items-center px-12 pt-16"
        >
          {/* Background Text */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-[0.03] select-none">
            <h1 className="text-[30vw] font-black tracking-tighter leading-none">STRIPO</h1>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 z-10 flex flex-col gap-12 relative">
            <div className="space-y-2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[11px] font-mono tracking-[0.4em] uppercase text-gray-400"
              >
                {slide.subtitle}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display font-bold text-6xl md:text-[7vw] leading-[0.95] tracking-[-0.05em] text-black uppercase whitespace-pre-line"
              >
                {slide.title.split('\n')[0]} <br />
                <span className={`${slide.accent} italic`}>{slide.title.split('\n')[1]}</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 max-w-sm text-base md:text-lg leading-relaxed font-sans"
            >
              {slide.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-gray-900 transition-all shadow-xl"
              >
                Khám Phá Bộ Sưu Tập
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                     <img src={`https://i.pravatar.cc/100?u=${i + (current * 3)}`} alt="" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="relative w-full md:w-1/2 h-full flex justify-center items-center mt-12 md:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotateY: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-[85%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group preserve-3d"
              >
                <img 
                  src={slide.image} 
                  alt="Trang Sức" 
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 w-32 h-32 bg-orange-500/10 backdrop-blur-3xl rounded-full border border-orange-500/20 z-0"
            />
            <motion.div 
              animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-4 w-24 h-24 bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/20 z-0"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-12 flex gap-4 z-40">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm bg-white/50 backdrop-blur"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm bg-white/50 backdrop-blur"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-12 flex gap-2 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              current === i ? 'w-12 bg-black' : 'w-4 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
