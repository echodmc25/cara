"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const CustomArrow = ({ direction, onClick }) => (
  <button
    className={`absolute w-14 h-14 flex justify-center items-center rounded-full shadow-lg 
      top-1/2 transform -translate-y-[120%] 
      hover:bg-mahroon text-accent p-2 text-4xl duration-300 z-10 ${
        direction === "next" ? "right-2" : "left-2"
      }`}
    onClick={onClick}
  >
    {direction === "next" ? (
      <HiOutlineArrowLongRight />
    ) : (
      <HiOutlineArrowLongLeft />
    )}
  </button>
);

const CustomPagination = ({ totalSlides, activeIndex, onClick }) => (
  <div className="absolute -bottom-10 w-full flex justify-center">
    <ul className="flex gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <li
          key={index}
          className={`w-3 h-3 rounded-full ${
            activeIndex === index ? "bg-accent" : "bg-white/50"
          }`}
          onClick={() => onClick(index)}
        ></li>
      ))}
    </ul>
  </div>
);

const VideoCardsSlider = ({ categorySlides }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    const checkScreenSize2 = () => setIsTablet(window.innerWidth < 1024);
    checkScreenSize();
    checkScreenSize2();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("resize", checkScreenSize2);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("resize", checkScreenSize2);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlePaginationClick = (index) => {
    swiperRef.current.slideTo(index);
  };

  const swiperRef = React.useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
        slidesPerView={isMobile ? 1 : isTablet ? 3 : 4}
        spaceBetween={5}
        loop={true}
        className="relative"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <div className="swiper-button-next">
          <CustomArrow
            direction="next"
            onClick={() => swiperRef.current.slideNext()}
          />
        </div>
        <div className="swiper-button-prev">
          <CustomArrow
            direction="prev"
            onClick={() => swiperRef.current.slidePrev()}
          />
        </div>
        {categorySlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden duration-300 px-[10px] group">
              <div className="group">
                {/* <div className="relative w-full overflow-hidden aspect-[5/6] bg-[#ffffff30] backdrop-blur-md loader"></div> */}
                <div className="relative w-full overflow-hidden aspect-[5/6] bg-[#ffffff30] backdrop-blur-md">
                  <iframe
                    src={slide.productVid}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 cat-img bg-[#ffffff30] backdrop-blur-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="mt-5">
                  <h3 className="h4 text-accent mb-1 -mt-2">
                    {slide.productName}
                  </h3>
                  {slide.productDes && (
                    <p className="text-base text-white/50 font-ropa mb-3 leading-5">
                      {slide.productDes}
                    </p>
                  )}
                  {slide.productPrice && (
                    <p className="font-Raleway font-bold font-xl">
                      Rs: {slide.productPrice}
                    </p>
                  )}
                  {slide.productServings && (
                    <div className="flex gap-2 items-center mobile:gap-2">
                      <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                        Servings:
                      </h3>
                      <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                        <p className="text-[14px] text-accent font-bold font-ropa">
                          {slide.productServings}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination
        totalSlides={categorySlides.length}
        activeIndex={activeIndex}
        onClick={handlePaginationClick}
      />
    </div>
  );
};

export default VideoCardsSlider;
