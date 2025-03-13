"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={`absolute w-14 h-14 flex justify-center items-center rounded-full shadow-lg 
       
      top-1/2 transform -translate-y-1/2 
      hover:bg-mahroon text-accent p-2 text-4xl duration-300 z-10 ${
        direction === "next" ? "right-5" : "left-5"
      }`}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        minWidth: "56px",
        minHeight: "56px",
      }}
    >
      {direction === "next" ? (
        <HiOutlineArrowLongRight />
      ) : (
        <HiOutlineArrowLongLeft />
      )}
    </button>
  );
};

const CategoriesSlider = ({ categorySlides }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    const checkScreenSize2 = () => setIsTablet(window.innerWidth < 1024);
    checkScreenSize();
    checkScreenSize2();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("resize", checkScreenSize2);
    return () =>
      window.removeEventListener("resize", checkScreenSize && checkScreenSize2);
  }, []);

  const categorySettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: isMobile ? 1 : isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: !isMobile, // Ensures the middle slides are prominent
    centerPadding: isTablet ? "25%" : "14%", // Adjusts visibility of side slides
    autoplaySpeed: 5000,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    appendDots: (dots) =>
      isMobile ? (
        <div className="absolute bottom-5 w-full flex justify-center">
          <ul className="flex">{dots}</ul>
        </div>
      ) : (
        <div></div>
      ),
    customPaging: () => <button className="w-1 h-1 rounded-full "></button>,
  };

  return (
    <Slider {...categorySettings}>
      {categorySlides.map((slide) => (
        <Link
          href={`/categories/#${slide.sub_catname
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          className="group"
          key={slide.subcat_id}
        >
          <div className="relative overflow-hidden transition-opacity duration-300 px-[10px] ">
            <div className="group">
              <Image
                src={slide.sub_catimg}
                alt={slide.sub_catname}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 cat-img"
                height={1024}
                width={1024}
              />
              <div className="-mt-6 relative z-10 mx-auto max-w-48 bg-mahroon duration-300 group-hover:bg-accent w-fit px-8 py-3">
                <p className="h4 text-accent line-clamp-1 group-hover:text-mahroon duration-300">
                  {slide?.sub_catname}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default CategoriesSlider;
