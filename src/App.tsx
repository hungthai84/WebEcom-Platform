/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { HomeSlider } from "./components/HomeSlider";
import { ProductGrid } from "./components/ProductGrid";
import { ProductsPage } from "./components/ProductsPage";
import { QuickViewModal } from "./components/QuickViewModal";
import { CartDrawer } from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { ProductProvider, useProducts } from "./context/ProductContext";
import { Product, ViewState } from "./types";
import { AdminDashboard } from "./components/AdminDashboard";

import { FeaturedProductsSlider } from "./components/FeaturedProductsSlider";
import { CategoryCards } from "./components/CategoryCards";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ProductProvider>
  );
}

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<ViewState>('home');
  const { products, loading } = useProducts();

  return (
    <div className="h-[100dvh] w-full bg-black p-[5px] overflow-hidden">
      <div className="w-full h-full bg-[#fafafa] rounded-[10px] shadow-lg font-sans overflow-y-auto relative flex flex-col group scroll-smooth">
        <Header currentView={view} setView={setView} />
        
        <main className="flex-1 w-full relative flex flex-col pb-20">
          {view === 'home' && (
            <div className="max-w-[1600px] mx-auto w-full">
              <HomeSlider />
              <FeaturedProductsSlider />
              <CategoryCards />
            </div>
          )}

          {view === 'products' && (
            <ProductsPage onQuickView={setSelectedProduct} />
          )}

          {view === 'gifts' && (
            <div className="max-w-[1600px] mx-auto w-full pt-12">
              <ProductGrid 
                title="Bộ Sưu Tập Quà Tặng" 
                products={products.filter(p => p.isGift)} 
                onQuickView={setSelectedProduct} 
              />
            </div>
          )}

          {view === 'events' && (
            <div className="max-w-[1600px] mx-auto w-full pt-24 px-12">
              <div className="mb-16">
                <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-orange-500 mb-4 block">Sự Kiện Có Hạn</span>
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-black uppercase mb-6 leading-none">
                  Mùa <br />
                  <span className="text-gray-300 italic">Hè Rực Rỡ</span>
                </h1>
                <p className="text-gray-500 max-md text-base leading-relaxed">
                  Quyền truy cập độc quyền vào những sản phẩm mới nhất và các phiên bản giới hạn của chúng tôi. Được chế tác cho mùa sắp tới.
                </p>
              </div>
              
              <ProductGrid 
                title="Sản Phẩm Mới Tại Sự Kiện" 
                products={products.slice(0, 4)} 
                onQuickView={setSelectedProduct} 
              />
            </div>
          )}

          {view === 'admin' && (
            <AdminDashboard />
          )}
          
          {/* Footer */}
          <footer className="mt-auto py-12 px-12 border-t border-gray-100 flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-400 uppercase bg-white">
            <div>© 2024 STRIPO TOÀN CẦU</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">Instagram</a>
              <a href="#" className="hover:text-black transition-colors">Twitter</a>
              <a href="#" className="hover:text-black transition-colors">Chăm Sóc Khách Hàng</a>
            </div>
          </footer>
        </main>

        <CartDrawer />
        <QuickViewModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      </div>
    </div>
  );
}
