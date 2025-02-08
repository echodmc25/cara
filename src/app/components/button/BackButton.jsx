"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="p-3 bg-[#00000050] rounded-full hover:bg-background duration-300"
      >
        <BsArrowLeft className="text-[30px] text-accent z-10 cursor-pointer" />
      </button>
    </div>
  );
};

export default BackButton;
