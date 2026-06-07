import { ShoppingBag, Sparkles, User as UserIcon } from "lucide-react";
import { useCart } from "../context/CartContext";
import { signInWithGoogle, auth } from "../lib/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { ViewState } from "../types";

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onAppointmentClick: () => void;
}

export function Header({ currentView, setView, onAppointmentClick }: HeaderProps) {
  const { setIsCartOpen, totalItems } = useCart();
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const menuItems: { label: string; view: ViewState }[] = [
    { label: "Home", view: "home" },
    { label: "About", view: "events" },
    { label: "Service", view: "products" },
    { label: "Pricing", view: "gifts" },
  ];

  return (
    <div className="absolute top-6 left-0 right-0 z-50 px-6 sm:px-10 max-w-[1400px] mx-auto w-full">
      <header className="w-full bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[24px] px-6 py-4 flex items-center justify-between shadow-lg relative">
        
        {/* Skinova Logo with customized petal ornament */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => {
            setView('home');
            document.querySelector('.overflow-y-auto')?.scrollTo(0, 0);
          }}
        >
          {/* Aesthetic Petal Icon */}
          <div className="w-7 h-7 relative flex items-center justify-center text-white">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full fill-current drop-shadow-md text-white/90 group-hover:rotate-45 transition-transform duration-700 ease-out"
            >
              {/* Modern elegant geometric double-clover/flower */}
              <path d="M 50,50 C 35,35 15,35 15,50 C 15,65 35,65 50,50 Z" />
              <path d="M 50,50 C 65,35 85,35 85,50 C 85,65 65,65 50,50 Z" />
              <path d="M 50,50 C 35,15 35,35 50,15 C 65,35 65,15 50,50 Z" />
              <path d="M 50,50 C 35,85 35,65 50,85 C 65,65 65,85 50,50 Z" />
              {/* Small center core */}
              <circle cx="50" cy="50" r="5" className="fill-white" />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-serif tracking-[0.1em] font-medium text-white uppercase select-none">
            SKINOVA
          </span>
        </div>

        {/* Center menu */}
        <nav className="hidden md:flex items-center gap-8 md:gap-10">
          {menuItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setView(item.view);
                document.querySelector('.overflow-y-auto')?.scrollTo(0, 0);
              }}
              className={`text-sm tracking-wide font-sans cursor-pointer transition-all ${
                currentView === item.view 
                  ? "text-white font-medium drop-shadow-md" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right tools and APPOINTMENT */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Cart Bag Icon with Glass styling */}
          <button 
            id="cart-button"
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer hover:scale-105 active:scale-95 transition-all p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/10"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-mono border border-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* User Signin / User Info with Glass styling */}
          {user ? (
            <div className="flex items-center gap-2 cursor-pointer p-1 pr-3 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30">
                 <img src={user.photoURL || ''} alt="User Avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-white hidden sm:inline">{user.displayName?.split(' ')[0]}</span>
            </div>
          ) : (
            <button 
              id="login-button"
              onClick={signInWithGoogle}
              className="text-[10px] uppercase font-mono tracking-widest text-white hover:text-white/80 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/10"
              title="Đăng nhập"
            >
              <UserIcon className="w-4 h-4" />
            </button>
          )}

          {/* Majestic Appointment Button */}
          <button
            onClick={onAppointmentClick}
            className="bg-white hover:bg-white/95 text-black hover:scale-103 active:scale-97 transition-all rounded-[10px] py-2 md:py-2.5 px-4 md:px-5 text-xs font-sans tracking-wide font-medium shadow-md uppercase shrink-0 cursor-pointer"
          >
            APPOINTMENT
          </button>
        </div>
      </header>
    </div>
  );
}
