import { ChevronDown, ShoppingBag, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { signInWithGoogle, auth } from "../lib/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { ViewState } from "../types";

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

import { ChevronDown, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { signInWithGoogle, auth } from "../lib/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { ViewState } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export function Header({ currentView, setView }: HeaderProps) {
  const { setIsCartOpen, totalItems } = useCart();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const navItems: { label: string; view: ViewState }[] = [
    { label: "Trang Chủ", view: "home" },
    { label: "Sản Phẩm", view: "products" },
    { label: "Quà Tặng", view: "gifts" },
    { label: "Sự Kiện", view: "events" },
    { label: "Quản Lý", view: "admin" },
  ];

  return (
    <>
      <header className="flex justify-between items-center py-6 px-12 top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-50 sticky">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold relative overflow-hidden">
            <span className="text-xl tracking-tighter">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight uppercase">stripo</span>
        </div>

        {/* Central Nav Removed as per request to move to sidebar top */}
        <div className="hidden lg:block"></div>

        {/* Right Menu */}
        <div className="flex items-center gap-6">
          <button 
            id="cart-button"
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer hover:scale-110 transition-transform p-1"
          >
            <ShoppingBag className="w-5 h-5 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-mono">
                {totalItems}
              </span>
            )}
          </button>
          
          <div className="h-4 w-px bg-gray-200"></div>
          
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-2 right-2 bottom-2 w-full max-w-sm bg-white rounded-2xl z-[101] shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="p-8 flex justify-between items-center border-b border-gray-50">
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Danh Mục</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 p-8 space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.view}
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      setView(item.view);
                      setIsSidebarOpen(false);
                      document.querySelector('.overflow-y-auto')?.scrollTo(0, 0);
                    }}
                    className={`block text-4xl font-display font-bold uppercase tracking-tighter w-full text-left transition-colors ${
                      currentView === item.view ? "text-black" : "text-gray-200 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <div className="pt-8 space-y-4">
                   <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-4">Tài Khoản</div>
                   {user ? (
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden ring-2 ring-gray-50">
                           <img src={user.photoURL || ''} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-sm font-medium">{user.displayName}</span>
                           <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Xem Hồ Sơ</span>
                        </div>
                     </div>
                   ) : (
                     <button 
                        onClick={() => {
                          signInWithGoogle();
                          setIsSidebarOpen(false);
                        }}
                        className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:underline"
                     >
                        <User size={16} />
                        Đăng Nhập
                     </button>
                   )}
                </div>
              </nav>

              <div className="p-8 border-t border-gray-50 bg-gray-50/50">
                <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-4">Theo Dõi Chúng Tôi</div>
                <div className="flex gap-6 mt-4">
                  <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-black transition-colors">Facebook</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
