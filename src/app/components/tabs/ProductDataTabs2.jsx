"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import C1 from "@/app/assets/images/c1.png";
import C2 from "@/app/assets/images/c2.png";
import C3 from "@/app/assets/images/c3.png";
import Geleto1 from "@/app/assets/images/geleto.png";
import BelgianChocolate from "@/app/assets/images/Belgian Chocolate.png";
import MaltBrownie from "@/app/assets/images/Malt Brownie.png";
import FrenchVanilla from "@/app/assets/images/French Vanilla.png";
import Coconut from "@/app/assets/images/Coconut.png";
import FerreroRocher from "@/app/assets/images/Ferrero Rocher.png";
import Snickers from "@/app/assets/images/Snickers.png";
import StrawberryYogurt from "@/app/assets/images/Strawberry Yogurt.png";
import CookiesAndCream from "@/app/assets/images/Cookies & Cream.png";
import Lotus from "@/app/assets/images/Lotus.png";
import SaltedCaramel from "@/app/assets/images/Salted caramel.png";
import WhiteChocolateRaspberry from "@/app/assets/images/White chocolate with raspberry.png";
import Berrylicious from "@/app/assets/images/Berrylicious.png";
import Tiramisu from "@/app/assets/images/Tiramisu.png";
import Pistachio from "@/app/assets/images/Pista.png";
import BubbleGum from "@/app/assets/images/Bubble gum.png";
import CottonCandy from "@/app/assets/images/Cotton Candy.png";

const ProductDataTabs2 = () => {
  const tabsData = [
    {
      title: "Gelatos",
      image: C3,
      content: [
        { name: "Belgian Chocolate", img: BelgianChocolate },
        { name: "Malt Brownie", img: MaltBrownie },
        { name: "French Vanilla", img: FrenchVanilla },
        { name: "Coconut", img: Coconut },
        { name: "Ferrero Rocher", img: FerreroRocher },
        { name: "Snickers", img: Snickers },
        { name: "Strawberry Yogurt", img: StrawberryYogurt },
        { name: "Cookies & Cream", img: CookiesAndCream },
        { name: "Lotus", img: Lotus },
        { name: "Salted Caramel", img: SaltedCaramel },
        {
          name: "White Chocolate with Raspberry",
          img: WhiteChocolateRaspberry,
        },
        { name: "Berrylicious", img: Berrylicious },
        { name: "Tiramisu", img: Tiramisu },
        { name: "Pistachio", img: Pistachio },
        { name: "Bubble Gum", img: BubbleGum },
        { name: "Cotton Candy", img: CottonCandy },
      ],
    },
    {
      title: "Toppings",
      image: C1,
      content: [
        { name: "Callebaut Chocolate Chip" },
        { name: "Callebaut White Chocolate Chip" },
        { name: "Sprinkles" },
        { name: "M&Ms" },
        { name: "Brownie" },
        { name: "Oreo Crumbs" },
        { name: "Roasted Pistachios" },
        { name: "Roasted Peanuts" },
        { name: "Ajwa Dates" },
        { name: "Coconut Shavings" },
      ],
    },
    {
      title: "Sauces",
      image: C2,
      content: [
        { name: "Hot Dark Lindt Chocolate" },
        { name: "Hot Milk Lindt Chocolate" },
        { name: "Hot White Lindt Chocolate" },
        { name: "Dark Lindt Chocolate" },
        { name: "Milk Lindt Chocolate" },
        { name: "White Lindt Chocolate" },
        { name: "Caramel" },
        { name: "Lotus" },
        { name: "Hot Fudge" },
        { name: "Nutella" },
        { name: "Strawberry" },
        { name: "Pistachio" },
      ],
    },
  ];

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
                className={`flex justify-start items-center gap-2 ${
                  index < tabsData[activeTab].content.length
                    ? "border-b"
                    : "border-none"
                } border-[#3f3f3f] py-4`}
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
