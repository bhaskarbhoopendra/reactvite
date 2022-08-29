import { createContext, ReactNode, useContext, useState } from "react";
type ShoopingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
};

type Cart = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoopingCartProviderProps) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((element) => element.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItems: any) => {
      //check if we don't have an item
      if (currentItems.find((item: any) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item: any) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
