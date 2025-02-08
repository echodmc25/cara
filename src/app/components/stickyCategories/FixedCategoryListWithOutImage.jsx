"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const FixedCategoryListWithOutImage = ({ categories }) => {
  const pathname = usePathname(); // Get current path

  const categoryRefs = useRef({});
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(draggableRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX || e.touches[0].pageX;
    const distance = (x - startX) * 1.5;
    draggableRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const draggable = draggableRef.current;

    if (draggable) {
      draggable.addEventListener("mousedown", handleStart);
      draggable.addEventListener("mousemove", handleMove);
      draggable.addEventListener("mouseup", handleEnd);
      draggable.addEventListener("mouseleave", handleEnd);

      // Modify touch event handling
      draggable.addEventListener("touchstart", handleStart, { passive: true }); // Allow scrolling
      draggable.addEventListener("touchmove", handleMove, { passive: false }); // Prevent interference
      draggable.addEventListener("touchend", handleEnd);

      return () => {
        draggable.removeEventListener("mousedown", handleStart);
        draggable.removeEventListener("mousemove", handleMove);
        draggable.removeEventListener("mouseup", handleEnd);
        draggable.removeEventListener("mouseleave", handleEnd);

        draggable.removeEventListener("touchstart", handleStart);
        draggable.removeEventListener("touchmove", handleMove);
        draggable.removeEventListener("touchend", handleEnd);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="fixed bottom-0 left-0 pt-10 pb-10 mobile:pt-5 bg-black z-20 overflow-hidden w-full tablet:hidden mobile:block">
      <div className="relative container mx-auto">
        <div className="absolute right-0 h-full w-10 gradient-overlay-light-black"></div>

        <div
          className="inline-flex gap-5 mobile:gap-3 overflow-x-auto draggable cursor-grab w-full"
          ref={draggableRef}
        >
          {categories.map((category) => {
            const categorySlug = category.sub_catname
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase();
            return (
              <Link
                key={category.subcat_id}
                className={`py-3 px-6 mobile:px-4 mobile:py-2 mobile:text-sm rounded-3xl border border-accent text-accent
                font-ropa text-base min-w-fit`}
                href={`/categories#${categorySlug}`}
              >
                {category.sub_catname}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FixedCategoryListWithOutImage;
