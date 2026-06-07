import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  title?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView, title }) => {
  return (
    <section className="py-20 px-12">
      {title && (
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-gray-400 block mb-3">Bộ Sưu Tập</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-black uppercase leading-none">{title}</h2>
          </div>
          <button className="text-[10px] uppercase font-mono tracking-[0.2em] border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
            Xem Tất Cả
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onQuickView={onQuickView} 
          />
        ))}
      </div>
    </section>
  );
};
