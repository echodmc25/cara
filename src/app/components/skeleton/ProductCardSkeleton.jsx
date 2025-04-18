"use client";

import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse relative group z-0">
      <div className="absolute w-fit right-0 top-0 z-10 bg-[#00000090] text-accent px-2 py-1 font-ropa text-lg flex gap-2 items-center">
        <div className="w-4 h-4 bg-accent rounded-full" />
        <div className="w-16 h-4 bg-accent rounded" />
      </div>

      <div className="relative w-full overflow-hidden aspect-[5/6] bg-white/10 rounded-md"></div>

      <div className="mt-5 space-y-2">
        <div className="h-5 bg-white/20 w-3/4 rounded" />
        <div className="h-4 bg-white/10 w-full rounded" />
        <div className="h-5 bg-white/20 w-1/2 rounded" />
        <div className="flex gap-2 items-center">
          <div className="h-4 w-16 bg-white/10 rounded" />
          <div className="h-5 w-10 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
