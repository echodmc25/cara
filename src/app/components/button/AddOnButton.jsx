"use client";
import { usePopup } from "@/app/context/PopContext";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddOnButton = ({productId}) => {
  const { setListOpen, setProductId } = usePopup();
  const productToppings = (id) => {
    setProductId(id)
    setListOpen(true)
  }

  return (
    <button
    onClick={()=>productToppings(productId)}
      className="flex items-center gap-2 font-ropa text-mahroon"
    >
      <FaPlus className="text-mahroon text-lg" />
      Extra Add Ons
    </button>
  );
};

export default AddOnButton;
