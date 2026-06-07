export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
  isGift: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product?: Product;
  quantity: number;
  addedAt: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: string;
}

export type ViewState = 'home' | 'products' | 'gifts' | 'events' | 'admin';
