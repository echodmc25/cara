"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const StckyCategoriesList = ({ categories, activeCategory }) => {
  const pathname = usePathname();
  const categoryRefs = useRef({});
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // 🔥 Intersection Observer to Track Active Category
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility triggers update
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActive = entry.target.id;
          setActiveHash(newActive);
          window.history.replaceState(null, "", `#${newActive}`);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

      draggable.addEventListener("touchstart", handleStart, { passive: true });
      draggable.addEventListener("touchmove", handleMove, { passive: false });
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

  const handleScrollToCategory = (sub_catname) => {
    const targetElement = document.getElementById(sub_catname);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "auto",
      });
      window.history.replaceState(null, "", `#${sub_catname}`);
      setActiveHash(sub_catname);
    }
  };
  return (
    <div className="sticky top-0 pt-10 pb-5 mobile:pt-5 bg-background z-30 overflow-hidden tablet:hidden ">
      <div className="relative">
        <div className="absolute right-0 h-full w-10 gradient-overlay"></div>

        <div
          className="inline-flex gap-5 mobile:gap-3 overflow-x-auto draggable cursor-grab w-full"
          ref={draggableRef}
        >
          {categories.map((category) => {
            const isActive =
              activeHash ===
              category.sub_catname
                .trim()
                .replace(/[^\w\s-]/g, "") // Remove special characters
                .replace(/\s+/g, "-") // Replace spaces with hyphens
                .toLowerCase();

            return (
              <button
                key={category.subcat_id}
                className={`py-3 px-6 mobile:px-4 mobile:py-2 mobile:text-sm rounded-3xl border ${
                  category.sub_catname
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .toLowerCase() == activeCategory
                    ? "border-mahroon bg-mahroon text-white"
                    : "border-accent text-accent"
                } font-ropa text-base min-w-fit`}
                onClick={(e) => {
                  e.preventDefault();
                  if (category?.sub_catname) {
                    const formattedCategory = category.sub_catname
                      .trim()
                      .replace(/[^\w\s-]/g, "") // Remove special characters
                      .replace(/\s+/g, "-") // Replace spaces with hyphens
                      .toLowerCase();
                    handleScrollToCategory(formattedCategory);
                  }
                }}
              >
                {category.sub_catname}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StckyCategoriesList;
