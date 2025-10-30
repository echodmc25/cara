import React, { useState } from "react";
import AddOnButton from "../button/AddOnButton";
import Image from "next/image";

import { useSwipeable } from "react-swipeable";

const DoubleProductCard = ({ product, Toppings, catTwo, catOne }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = product?.product_images || [];

  const hasToppings = !!(product?.prod_id && Toppings[product?.prod_id]);

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
          className="w-full h-full p-aspect object-cover"
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
          className="w-full h-full object-cover p-aspect"
          alt={`Slide ${index}`}
        />
      );
    }
  };

  return (
    <div className="flex justify-between items-stretch gap-6 mobile:gap-3 mb-12 mt-5 mobile:flex-col mobile:mb-6">
      {/* <div className="max-w-1/2 w-full p-aspect">
        <Image
          src={product?.product_images?.[0]?.src}
          alt={product.prod_name}
          height={1024}
          width={1024}
          className="w-full h-full object-cover"
        />
      </div> */}

      <div {...handlers} className="relative w-full overflow-hidden p-aspect">
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

        {product?.label && (
          <div
            className={`px-4 py-2 text-sm uppercase  z-10 absolute text-white top-0 left-0`}
            style={{ backgroundColor: product?.labelColor }}
          >
            {product?.label}
          </div>
        )}
      </div>
      <div className="w-full min-h-full max-w-1/2 flex flex-col justify-between items-start">
        <div className=" w-full">
          <h3 className="h4 mb-3 text-accent">{product.prod_name}</h3>
          <p className="font-ropa text-base text-white/50  leading-5">
            {product?.prod_desc}
          </p>
          <div className="flex justify-between items-start gap-5 my-5 mobile:mb-3">
            {product.prod_price && (
              <div>
                <h2 className="h4 text-accent">{catOne}</h2>
                <p className="my-1 text-white/70 font-ropa text-sm">
                  {product.prod_descMain}
                </p>
                <p className="font-Raleway text-lg font-bold">
                  Rs. {product.prod_price}
                </p>
                <div className="flex gap-2  items-center justify-start mobile:gap-2 mt-1">
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
            )}
            {product.prod_doublePrice && (
              <div>
                <h2 className="h4 text-accent">{catTwo}</h2>
                <p className="my-1 text-white/70 font-ropa text-sm">
                  {product.prod_descDoubleMain}
                </p>
                <p className="font-Raleway text-lg font-bold">
                  Rs. {product.prod_doublePrice}
                </p>
                <div className="flex gap-2  items-center justify-start mobile:gap-2 mt-1">
                  <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                    Servings:
                  </h3>
                  <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                    <p className="text-[14px] text-accent font-bold font-ropa">
                      {product?.prod_servingDouble}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {hasToppings && (
          <div>
            <AddOnButton productId={product?.prod_id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DoubleProductCard;
