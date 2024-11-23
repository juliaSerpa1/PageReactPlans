//src/contexts/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if(cart.length < 2 ){
      setCart((prevCart) => [...prevCart, product]);
    }else{
      alert("Not allowed to add more than 2 plans!")
    }
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); // Remove o item pelo índice
  };

  const getCartQuantity = () => {
    return cart.length;
  };

  const clearCart = () => {
    setCart([]);  // Limpa o carrinho
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};