// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if(cart.length < 3 ){
      setCart((prevCart) => [...prevCart, product]);
    }else{
      alert("Não pode adicionasr mais de 3 planos!")
    }
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); // Remove o item pelo índice
  };

  const getCartQuantity = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};