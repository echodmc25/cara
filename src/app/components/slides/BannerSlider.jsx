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

const BannerSlider = ({ slides }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    dots: isMobile, // Hide dots on mobile, show on tablet & desktop
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 13000,
    nextArrow: isMobile ? null : <CustomArrow direction="next" />,
    prevArrow: isMobile ? null : <CustomArrow direction="prev" />,
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
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative w-full h-screen mobile:h-[95vh] overflow-hidden"
        >
          {slide.type == "video" ? (
            <video
              src={slide.media}
              className="w-full h-full object-cover opacity-70"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={slide.media}
              alt={`Slide ${index + 1}`}
              width={3200}
              height={3200}
              className="w-full h-full object-cover opacity-70"
            />
          )}
          <div className="absolute pt-10 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-center items-center gap-12 px-5">
              <div className="max-w-[700px]">
                <h3 className="font-bodoni text-[36px] text-white text-center">
                  {slide.subtitle}
                </h3>
                <h2 className="text-white tracking-widest font-kaisei page-heading font-bold text-center uppercase">
                  {slide.title}
                </h2>
                <p className="font-ropa text-xl text-white text-center mobile:text-base mobile:max-w-[352px] mt-5 max-w-[661px] mx-auto">
                  {slide.description}
                </p>
              </div>
              <Link
                href={slide.buttonLink}
                className="text-accent font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] bg-mahroon hover:text-mahroon hover:bg-accent duration-300 mobile:text-sm mobile:px-8"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
