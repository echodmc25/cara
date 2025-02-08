"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AddToCartButton = () => {
  const [listed, setListed] = useState(false);
  const addToListed = () => {
    setListed(!listed);
  };
  return (
    <button onClick={addToListed} className="p-3 bg-mahroon rounded-full ">
      {listed ? (
        <FaHeart className="text-[30px] text-accent z-10 cursor-pointer" />
      ) : (
        <FaRegHeart className="text-[30px] z-10 cursor-pointer text-accent" />
      )}
    </button>
  );
};

export default AddToCartButton;
