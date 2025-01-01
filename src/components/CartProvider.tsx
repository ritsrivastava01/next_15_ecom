'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

export type CartItem = {
  id: number;
  title?: string;
  price?: number;
  quantity?: number;
};

export type CartItemProps = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItems: (id: number) => void;
};

const CartContext = createContext<CartItemProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = useCallback((item: CartItem) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((i) => i.id === item.id);

      if (itemIndex > -1) {
        // Item exists: Update quantity immutably
        return prevCartItems.map((i, index) =>
          index === itemIndex ? { ...i, quantity: (i.quantity ?? 0) + 1 } : i
        );
      } else {
        // Item doesn't exist: Add new item
        return [...prevCartItems, item];
      }
    });
  }, []);

  const contextValue = useMemo(() => {
    return {
      cartItems,
      addItem: addItemToCart,
      removeItems: (id: number) => {
        console.log('removing item', id);
      }
    };
  }, [cartItems, addItemToCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = (): CartItemProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
