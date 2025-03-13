"use client";
import { createContext, useState, useContext } from "react";

// Create Context
const PopupContext = createContext();

// Context Provider
export const PopupProvider = ({ children }) => {

  const [productId, setProductId] = useState("")
  const [listOpen, setListOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ listOpen, setListOpen, productId, setProductId }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom Hook to Use Context
export const usePopup = () => useContext(PopupContext);
