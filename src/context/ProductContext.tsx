import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { db } from '../lib/firebase';
import { 
  collection, 
  onSnapshot, 
  query,
  orderBy
} from 'firebase/firestore';

interface ProductContextType {
  products: Product[];
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('name', 'asc'));

    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const p = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(p);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
