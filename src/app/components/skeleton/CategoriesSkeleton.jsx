import React from "react";
import CategoriesCardsSkeleton from "./CategoriesCardSkeleton";

const CategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-1 ">
      {Array.from({ length: 9 }).map((_, idx) => (
        <CategoriesCardsSkeleton key={idx} />
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
