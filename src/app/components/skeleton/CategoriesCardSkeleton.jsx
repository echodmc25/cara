import React from "react";

const CategoriesCardsSkeleton = () => {
  return (
    <div className="relative w-full py-3 px-5 aspect-video animate-pulse overflow-hidden shadow-md bg-gradient-to-tr from-white/5 to-white/10">
      {/* Background shimmer block */}
      <div className="absolute top-0 left-0 w-full h-full bg-black " />

      {/* Frosted overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-3xl bg-black/20" />

      {/* Simulated title */}
      <div className="absolute bottom-4 left-5 right-5 z-20">
        <div className="h-6 bg-accent rounded w-3/5" />
      </div>
    </div>
  );
};

export default CategoriesCardsSkeleton;
