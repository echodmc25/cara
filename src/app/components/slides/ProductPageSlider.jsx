"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductPageSlider = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = images || []; // Ensure product_images exists

  console.log("Slides:", slides); // ✅ Debugging step

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
          className="w-full h-full  object-cover"
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
          className="w-full h-full object-cover "
          alt={`Slide ${index}`}
        />
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden aspect-[16/6] tablet:aspect-[16/8] mobile:aspect-[16/10]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
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

      {slides.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform  -translate-x-1/2 flex space-x-2">
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

    // {/* <div className="relative w-full overflow-hidden">
    //   {slides.length > 0 ? (
    //     slides.map((slide, index) => (
    //       <div
    //         key={index}
    //         className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
    //           index === currentSlide
    //             ? "translate-x-0"
    //             : index < currentSlide
    //             ? "-translate-x-full"
    //             : "translate-x-full"
    //         }`}
    //       >
    //         {renderSlide(slide, index)}
    //       </div>
    //     ))
    //   ) : (
    //     <p className="text-center">No media available</p>
    //   )}

    //   {/* Show navigation dots only if multiple slides exist */}
    //   {slides.length > 1 && (
    //     <div className="absolute bottom-2 left-1/2 transform  -translate-x-1/2 flex space-x-2">
    //       {slides.map((_, index) => (
    //         <div
    //           key={index}
    //           className={`w-3 h-3 rounded-full cursor-pointer ${
    //             index === currentSlide ? "bg-mahroon" : "bg-accent"
    //           }`}
    //           onClick={() => setCurrentSlide(index)}
    //         ></div>
    //       ))}
    //     </div>
    //   )}
    // </div> */}
  );
};

export default ProductPageSlider;
