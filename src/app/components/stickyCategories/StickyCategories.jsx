"use client";

import React, { useEffect, useRef, useState } from "react";
import P1 from "@/app/assets/images/P1.png";
import P2 from "@/app/assets/images/p2.png";
import P3 from "@/app/assets/images/P3.png";
import P4 from "@/app/assets/images/P4.png";
import P5 from "@/app/assets/images/P5.png";
import P6 from "@/app/assets/images/P6.png";
import Image from "next/image";

const StickyCategories = ({ setActiveCategory }) => {
  const categories = [
    { id: 1, heading: "Cold Drinks", image: P1 },
    { id: 2, heading: "Cold Drinks", image: P2 },
    { id: 3, heading: "Cold Drinks", image: P3 },
    { id: 4, heading: "Cold Drinks", image: P4 },
    { id: 5, heading: "Cold Drinks", image: P5 },
    { id: 6, heading: "Cold Drinks", image: P6 },
    { id: 7, heading: "Cold Drinks", image: P1 },
  ];

  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX); // Store initial position
    setScrollLeft(draggableRef.current.scrollLeft); // Store current scroll position
    e.preventDefault(); // Prevent accidental page scroll
  };

  const handleMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX || e.touches[0].pageX; // Current position
    const distance = (x - startX) * 1.5; // Adjust sensitivity
    draggableRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const draggable = draggableRef.current;

    if (draggable) {
      // Add mouse and touch events
      draggable.addEventListener("mousedown", handleStart);
      draggable.addEventListener("mousemove", handleMove);
      draggable.addEventListener("mouseup", handleEnd);
      draggable.addEventListener("mouseleave", handleEnd);

      draggable.addEventListener("touchstart", handleStart, { passive: false });
      draggable.addEventListener("touchmove", handleMove, { passive: false });
      draggable.addEventListener("touchend", handleEnd);

      return () => {
        // Remove events on cleanup
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
    <div className="fixed bottom-0 w-full pt-10 pb-5 bg-background z-10 overflow-hidden hidden tablet:block">
      <div className="relative container">
        <div className="absolute right-0 h-full w-10 gradient-overlay"></div>

        <div
          className="inline-flex overflow-x-auto cursor-grab min-w-fit no-scrollbar"
          ref={draggableRef}
          style={{
            whiteSpace: "nowrap",
            touchAction: "pan-x", // Allows smooth horizontal touch scrolling
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="grid gap-3 justify-between items-center w-[30%] mr-5"
            >
              <Image
                src={category.image}
                alt={category.heading}
                className="w-[120px] h-[120px] tablet:w-[100px] tablet:h-[100px] object-cover object-center rounded-full border-[2px] border-mahroon"
              />
              <h2 className="font-ropa text-base text-center">
                {category.heading}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyCategories;
