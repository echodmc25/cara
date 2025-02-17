"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Plant from "@/app/assets/images/plant.png";
import Bowl from "@/app/assets/images/bowl.png";
import Cutlery from "@/app/assets/images/cutlery.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PointsSlider = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize2 = () => setIsTablet(window.innerWidth < 1024);
    checkScreenSize2();
    window.addEventListener("resize", checkScreenSize2);
    return () => window.removeEventListener("resize", checkScreenSize2);
  }, []);

  const pointsSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: isTablet ? 1 : 3, // Now correctly updates
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    autoplaySpeed: 5000,
    nextArrow: false,
    prevArrow: false,
    appendDots: (dots) => (
      <div className="absolute bottom-5 w-full flex justify-center">
        <ul className="flex">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="w-1 h-1 rounded-full "></button>,
  };

  return (
    <Slider {...pointsSettings}>
      <div className="px-[10%] tablet:px-[20%] mobile:px-[5%]">
        <Image
          src={Plant}
          width={200}
          height={200}
          className="mx-auto w-16"
          alt="plant"
        />
        <h4 className="h4 text-accent mt-5 text-center">Premium Ingredients</h4>
        <div className="w-20 h-[1px] bg-mahroon my-6 mx-auto"></div>
        <p className="text-white font-ropa text-lg mt-5 text-center">
          We source only the finest ingredients to craft our desserts. From rich
          Lindt chocolates from Switzerland to Dubai’s finest imported treats,
          every bite is a journey of indulgence
        </p>
      </div>
      <div className="px-[10%] tablet:px-[20%] mobile:px-[5%]">
        <Image
          src={Bowl}
          width={200}
          height={200}
          className="mx-auto w-16"
          alt="plant"
        />
        <h4 className="h4 text-accent mt-5 text-center">Quality Desserts</h4>
        <div className="w-20 h-[1px] bg-mahroon my-6 mx-auto"></div>
        <p className="text-white font-ropa text-lg mt-5 text-center">
          Our desserts aren’t just made—they’re mastered. With attention to
          detail and passion for flavour, we ensure every visit is a memorable
          one.
        </p>
      </div>
      <div className="px-[10%] tablet:px-[20%] mobile:px-[5%]">
        <Image
          src={Cutlery}
          width={200}
          height={200}
          className="mx-auto w-16"
          alt="plant"
        />
        <h4 className="h4 text-accent mt-5 text-center">Made To Share</h4>
        <div className="w-20 h-[1px] bg-mahroon my-6 mx-auto"></div>
        <p className="text-white font-ropa text-lg mt-5 text-center">
          Enjoy a welcoming ambiance designed for sharing and connecting. Our
          loaded servings and unique space create the perfect setting for
          unforgettable moments.
        </p>
      </div>
    </Slider>
  );
};

export default PointsSlider;
