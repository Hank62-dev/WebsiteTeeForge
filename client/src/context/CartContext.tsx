import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    setItems(current => {
      const existingItemIndex = current.findIndex(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        const newItems = [...current];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...current, { 
        ...product, 
        cartItemId: `${product.id}-${size}-${color}`,
        quantity, 
        selectedSize: size, 
        selectedColor: color 
      }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(current => current.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(current =>
      current.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
