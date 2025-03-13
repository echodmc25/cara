"use client"

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ProductDataTabs2 = ({ flavorCategories }) => {
  if (!flavorCategories || flavorCategories.length === 0) return null;

  const tabsData = flavorCategories.map((category) => ({
    title: category.category_name,
    image: category.category_image,
    content: category.flavors.map((flavor) => ({
      name: flavor.flavor_name,
      img: flavor.flavor_image || null,
    })),
  }));

  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(2);
      } else if (width < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = tabsData[activeTab].content;
  const lastRowStart = Math.floor((items.length - 1) / columns) * columns;

  const handleMouseDown = (e) => {
    const container = tabsRef.current;
    if (!container) return;

    container.style.cursor = "grabbing";
    container.style.userSelect = "none";

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const onMouseMove = (event) => {
      const x = event.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-1">
      {/* Tabs */}
      <div
        ref={tabsRef}
        onMouseDown={handleMouseDown}
        className="flex gap-1 overflow-x-auto whitespace-nowrap no-scrollbar cursor-grab"
      >
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-shrink-0 flex justify-center gap-2 items-center min-w-[33.33%] px-4 py-4 border-b-4 font-medium text-accent text-center ${
              activeTab === index
                ? "border-mahroon bg-black"
                : "border-background bg-[#131313]"
            } focus:outline-none hover:text-red-500`}
          >
            <Image
              src={tab.image}
              alt={tab.title}
              width={40}
              height={40}
              className="mb-2"
            />
            <span className="h4">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="flex gap-10 px-8 py-4 bg-black mobile:flex-col mobile:gap-0 mobile:p-5">
        <div className="flex-1">
          <div className="grid grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-x-5">
            {tabsData[activeTab].content.map((item, index) => (
              <div
                key={index}
                className={`flex justify-start items-center gap-2 py-4 border-b border-[#3f3f3f] ${
                  index >= lastRowStart ? "border-b-0" : ""
                }`}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.name}
                    height={40}
                    width={40}
                    className="w-8 h-8 object-contain object-center mobile:h-6 mobile:w-6"
                  />
                )}
                <h3 className="font-ropa text-base text-accent capitalize mobile:text-sm">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataTabs2;