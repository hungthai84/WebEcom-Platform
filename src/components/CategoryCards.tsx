import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    title: "TOPS",
    desc: "Engineered layers for every condition.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "BOTTOMS",
    desc: "Technical silhouettes and performance fabrics.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "ACCESSORIES",
    desc: "Modular systems for the modern nomad.",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
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
              <span className="text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">Category</span>
              <h3 className="text-3xl font-sans font-bold text-white tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm text-white/70 max-w-[200px] mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {card.desc}
              </p>
              
              <div className="flex items-center gap-2 text-white text-[10px] font-mono tracking-widest uppercase mt-auto">
                 <span>Explore</span>
                 <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
