"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Pi1 from "@/app/assets/images/pp1.png";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { usePopup } from "@/app/context/PopContext";

const ProductCard = ({ product, servings = false }) => {
  const { setListOpen } = usePopup();

  const [listed, setListed] = useState(false);

  const addToListed = () => {
    setListed(!listed);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = product?.product_images || []; // Ensure product_images exists

  // Prevent automatic slide change when there's only one media
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const renderSlide = (slide, index) => {
    if (slide.type === "video") {
      return (
        <iframe
          key={index}
          src={slide.src}
          className="w-full h-full aspect-square object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`Slide ${index}`}
        ></iframe>
      );
    } else {
      return (
        <Image
          key={index}
          src={slide.src}
          width={1000}
          height={1000}
          className="w-full h-full object-cover aspect-square"
          alt={`Slide ${index}`}
        />
      );
    }
  };

  return (
    <div className="relative group z-0">
      {/* {listed ? (
        <FaHeart
          onClick={addToListed}
          className="absolute right-4 top-4 text-[25px] text-mahroon z-10 cursor-pointer"
        />
      ) : (
        <FaRegHeart
          onClick={addToListed}
          className="absolute right-4 top-4 text-[25px] z-10 cursor-pointer text-mahroon"
        />
      )} */}

      <button
        onClick={() => setListOpen(true)}
        className="bg-[#00000090] text-accent px-2 py-1 font-ropa font-medium text-lg flex gap-2 items-center absolute w-fit right-0 top-0 z-10"
      >
        <FaPlus className="text-accent text-lg" />
        Add On
      </button>

      <div>
        {/* <div className="relative w-full overflow-hidden aspect-[5/6]">
          {product.product_images.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              {renderSlide(slide, index)}
            </div>
          ))}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-mahroon" : "bg-accent"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div> */}
        <div className="relative w-full overflow-hidden aspect-[5/6]">
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0"
                    : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
              >
                {renderSlide(slide, index)}
              </div>
            ))
          ) : (
            <p className="text-center">No media available</p>
          )}

          {/* Show navigation dots only if multiple slides exist */}
          {slides.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentSlide ? "bg-mahroon" : "bg-accent"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="h4 text-accent mb-1 -mt-2">{product?.prod_name}</h3>
          {product?.prod_desc && (
            <p className="text-sm text-white font-ropa">
              {" "}
              {product?.prod_desc}
            </p>
          )}
          <p className="font-Raleway font-bold font-xl">
            Rs: {product?.prod_price}
          </p>
          {servings && (
            <div className="flex gap-2  items-center mobile:gap-2">
              <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                Servings:
              </h3>
              <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                {Array.from({ length: product?.prod_serving }, (_, i) => (
                  <FaUserAlt key={i} className="text-accent text-[10px] " />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
