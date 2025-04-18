import MenuSkeletonGrid from "@/app/components/skeleton/MenuSkeletonGrid";
import React from "react";

export default function Loading() {
  return (
    <div className="container py-12 tablet:py-5 tablet:px-5">
      <MenuSkeletonGrid />
    </div>
  );
}
