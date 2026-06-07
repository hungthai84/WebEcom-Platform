import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="px-12 pt-16 flex flex-col md:flex-row items-center justify-between relative min-h-[85vh] overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[30vw] font-black tracking-tighter leading-none">STRIPO</h1>
      </div>

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 z-10 flex flex-col gap-12 relative"
      >
        <div className="space-y-2">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] font-mono tracking-[0.4em] uppercase text-gray-400"
          >
            Spring Summer 2024
          </motion.span>
          <h1 className="font-display font-bold text-6xl md:text-[7vw] leading-[0.95] tracking-[-0.05em] text-black uppercase">
            DISTINCT <br />
            <span className="text-gray-300 italic">APPAREL</span>
          </h1>
        </div>

        <p className="text-gray-500 max-w-sm text-base md:text-lg leading-relaxed font-sans">
          Technical ripstop and organic cotton silhouettes engineered for the modern nomad.
        </p>

        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-gray-900 transition-all shadow-xl"
          >
            Explore Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <div className="flex -space-x-3">
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                 <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" className="w-full h-full object-cover" />
               </div>
             ))}
             <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] font-bold">
               +2K
             </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full md:w-1/2 h-full flex justify-center items-center mt-12 md:mt-0"
      >
        <div className="relative w-[80%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
            alt="Hero Fashion" 
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
          />
          {/* Glass Card */}
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="text-[9px] font-mono tracking-widest uppercase mb-1">Featured</div>
             <div className="text-lg font-sans font-medium mb-4">Tactical Shell Jacket</div>
             <div className="flex justify-between items-end">
               <div className="text-lg font-mono">$185.00</div>
               <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                 <span className="text-[10px] font-mono uppercase tracking-widest">Detail</span>
                 <ArrowUpRight size={14} />
               </div>
             </div>
          </div>
        </div>

        {/* Floating Element */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-4 w-32 h-32 bg-orange-500/10 backdrop-blur-3xl rounded-full border border-orange-500/20 z-0"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 -left-4 w-24 h-24 bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/20 z-0"
        />
      </motion.div>
    </section>
  );
}
