"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const ProductDataTab = ({ tabsData }) => {
  const [listedItems, setListedItems] = useState({});

  const addToListed = (itemName) => {
    setListedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  // const tabsData = [
  //   {
  //     title: "Toppings",
  //     icon: "🍯",
  //     content: [
  //       { name: "Snicker", price: 200 },
  //       { name: "Ferrero", price: 200 },
  //       { name: "Kitkat", price: 200 },
  //       { name: "Kinder", price: 200 },
  //       { name: "Lotus", price: 200 },
  //       { name: "Oreo", price: 200 },
  //       { name: "Raffaelo", price: 200 },
  //       { name: "Bounty", price: 200 },
  //     ],
  //   },
  //   {
  //     title: "Sauces",
  //     icon: "🍫",
  //     content: [
  //       { name: "Dark Lindt Milk", price: 200 },
  //       { name: "Lindt White", price: 200 },
  //       { name: "Lindt", price: 200 },
  //       { name: "TwixMars", price: 200 },
  //       { name: "Toblerone", price: 200 },
  //     ],
  //   },
  //   {
  //     title: "Chocolates",
  //     icon: "🍬",
  //     content: [
  //       { name: "Choco Bar", price: 200 },
  //       { name: "Galaxy", price: 200 },
  //     ],
  //   },
  //   {
  //     title: "Gelatos",
  //     icon: "🍨",
  //     content: [
  //       { name: "Vanilla", price: 200 },
  //       { name: "Chocolate", price: 200 },
  //       { name: "Strawberry", price: 200 },
  //     ],
  //   },
  //   {
  //     title: "Dips",
  //     icon: "🍶",
  //     content: [
  //       { name: "Cheese Dip", price: 200 },
  //       { name: "Garlic Dip", price: 200 },
  //       { name: "Spicy Dip", price: 200 },
  //     ],
  //   },
  // ];

  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

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
    <div className="max-w-screen-lg mx-auto">
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
            className={`flex-shrink-0 flex justify-center items-center  min-w-[25%] px-4 py-4 border-b-4 h4 font-medium text-accent text-center ${
              activeTab === index
                ? "border-mahroon bg-black "
                : "border-background bg-[#131313]"
            } focus:outline-none hover:text-red-500`}
          >
            <Image
              src={tab.top_img}
              height={30}
              width={30}
              className="mr-2"
              alt={tab.topping_cat}
            />

            {tab.topping_cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex gap-10 p-8 bg-black mobile:flex-col mobile:gap-0 mobile:p-5">
        {/* Left Box */}
        <div className="flex-1 ">
          {tabsData[activeTab].items
            .slice(0, Math.ceil(tabsData[activeTab].items.length / 2))
            .map((item, index) => (
              <button
                onClick={() => addToListed(item.topping_name)}
                key={index}
                className="flex w-full justify-between py-3 border-b border-gray-200"
              >
                <span className="font-ropa text-xl">{item.topping_name}</span>
                <div className="flex gap-2 justify-center items-center">
                  <span className="font-ropa text-xl">
                    Rs. {item.topping_price}
                  </span>
                  {listedItems[item.topping_name] ? (
                    <FaMinus className="text-mahroon text-base" />
                  ) : (
                    <FaPlus className="text-white text-base" />
                  )}
                </div>
              </button>
            ))}
        </div>

        {/* Right Box */}
        <div className="flex-1 ">
          {tabsData[activeTab].items
            .slice(Math.ceil(tabsData[activeTab].items.length / 2))
            .map((item, index) => (
              <button
                onClick={() => addToListed(item.topping_name)}
                key={index}
                className="flex w-full justify-between py-3 border-b border-gray-200"
              >
                <span className="font-ropa text-xl">{item.topping_name}</span>
                <div className="flex gap-2 justify-center items-center">
                  <span className="font-ropa text-xl">
                    Rs. {item.topping_price}
                  </span>
                  {listedItems[item.topping_name] ? (
                    <FaMinus className="text-mahroon text-base" />
                  ) : (
                    <FaPlus className="text-white text-base" />
                  )}
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDataTab;
