"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add product to cart
  const addToCart = (product, selectedToppings = []) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.prod_id === product.prod_id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.prod_id === product.prod_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, toppings: selectedToppings },
        ];
      }
    });
  };

  // Function to update quantity
  const updateQuantity = (prod_id, quantity) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.prod_id === prod_id ? { ...item, quantity: quantity } : item
          )
          .filter((item) => item.quantity > 0) // Remove if quantity is 0
    );
  };

  // Function to remove item
  const removeFromCart = (prod_id) => {
    setCart((prevCart) => prevCart.filter((item) => item.prod_id !== prod_id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
