import React, { useState } from "react";
import ProductDataTabs2 from "../tabs/ProductDataTabs2";
import Image from "next/image";

import { useSwipeable } from "react-swipeable";

const FeaturedProduct = ({ product }) => {
  if (!product) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = product?.product_images || [];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    trackMouse: true, // enable drag with mouse on desktop
  });

  const renderSlide = (slide, index) => {
    if (slide.type === "video") {
      return (
        <video
          key={index}
          src={slide.src}
          className="w-full h-full aspect-video object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      );
    } else {
      return (
        <Image
          key={index}
          src={slide.src}
          width={1000}
          height={1000}
          className="w-full h-full object-cover aspect-video"
          alt={`Slide ${index}`}
        />
      );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center border-t border-accent pt-3 mobile:flex-col mobile:items-start">
        <div>
          <h2 className="font-kaisei text-[28px] text-accent">
            {product.prod_name}
          </h2>
          <p className="text-white/40 p">{product.prod_desc}</p>
        </div>
        <div>
          <h2 className="font-Raleway text-xl font-bold text-right mobile:text-start">
            Rs. {product.prod_price}
          </h2>
          <div className="flex gap-2 items-center justify-end mobile:gap-2 mt-1 mobile:justify-start mobile:items-start">
            <h3 className="text-white/50 text-md mobile:text-base font-ropa">
              Servings:
            </h3>
            <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
              <p className="text-[14px] text-accent font-bold font-ropa">
                {product?.prod_serving}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="mt-8">
        {/* {product.product_images?.length > 0 ? (
          <Image
            src={product.product_images[0].src}
            alt={product.prod_name}
            height={2000}
            width={2000}
            className="aspect-video object-cover"
          />
        ) : (
          <p className="text-white/50">No Image Available</p>
        )} */}

        <div
          {...handlers}
          className="relative w-full overflow-hidden aspect-video"
        >
          {slides.length > 0 ? (
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  {renderSlide(slide, index)}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No media available</p>
          )}

          {/* Dots */}
          {slides.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform bg-transparent -translate-x-1/2 flex space-x-2 z-10">
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
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <ProductDataTabs2 flavorCategories={product.flavor_categories} />
      </div>
    </>
  );
};

export default FeaturedProduct;
