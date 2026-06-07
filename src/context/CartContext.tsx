import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { db, auth } from '../lib/firebase';
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query,
  setDoc,
  getDocs,
  where
} from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }

    const cartRef = collection(db, 'users', user.uid, 'cart');
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CartItem[];
      setCart(items);
    });

    return () => unsubscribe();
  }, [user]);

  const addToCart = async (product: Product) => {
    if (!user) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
      return;
    }

    const cartRef = collection(db, 'users', user.uid, 'cart');
    const existingItem = cart.find(item => item.productId === product.id);

    if (existingItem) {
      const itemRef = doc(db, 'users', user.uid, 'cart', existingItem.id);
      await updateDoc(itemRef, {
        quantity: existingItem.quantity + 1
      });
    } else {
      await addDoc(cartRef, {
        productId: product.id,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'cart', itemId);
    await deleteDoc(itemRef);
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!user) return;
    if (quantity <= 0) {
      await removeFromCart(itemId);
      return;
    }
    const itemRef = doc(db, 'users', user.uid, 'cart', itemId);
    await updateDoc(itemRef, { quantity });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = 0; // We'd need products to calculate this properly

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      isCartOpen, 
      setIsCartOpen,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
