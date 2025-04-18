import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const MenuSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-3 ">
      {Array.from({ length: 8 }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default MenuSkeletonGrid;
