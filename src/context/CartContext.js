"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const clearCart = () => setCartItems([]);

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
        prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);