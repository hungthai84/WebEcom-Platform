import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    title: "NHẪN",
    desc: "Những tuyệt tác tinh xảo trên ngón tay bạn.",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "VÒNG CỔ",
    desc: "Điểm nhấn sang trọng cho mọi trang phục.",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "PHỤ KIỆN",
    desc: "Hoàn thiện phong cách cá nhân của bạn.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
];

export function CategoryCards() {
  return (
    <section className="px-12 py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-96 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer"
          >
            <img 
              src={card.img} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100" 
              alt={card.title} 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute inset-x-8 bottom-8 flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">Danh Mục</span>
              <h3 className="text-3xl font-sans font-bold text-white tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm text-white/70 max-w-[200px] mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {card.desc}
              </p>
              
              <div className="flex items-center gap-2 text-white text-[10px] font-mono tracking-widest uppercase mt-auto">
                 <span>Khám Phá</span>
                 <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
