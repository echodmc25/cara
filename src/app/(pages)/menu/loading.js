import CategoriesSkeleton from "@/app/components/skeleton/CategoriesSkeleton";
import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="pt-12   container">
        <div className="max-w-[660px] mx-auto mb-10 px-5">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Why should happiness come with a boarding pass?
          </h3>
          <h2 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Menu
          </h2>
          <p className="p text-center text-[#837C74] mt-5">
            Crafted with premium ingredients and designed for sharing, our
            desserts are made to bring delight to every bite.
          </p>
        </div>
      </div>
      <div className="container py-5 tablet:py-5 tablet:px-5">
        <CategoriesSkeleton />
      </div>
    </div>
  );
}
