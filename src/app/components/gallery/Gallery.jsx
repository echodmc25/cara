"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import P1 from "@/app/assets/images/1pp.jpg";
import P2 from "@/app/assets/images/7pp.jpg";
import P3 from "@/app/assets/images/6pp.jpg";
import P4 from "@/app/assets/images/5pp.jpg";
import P5 from "@/app/assets/images/4pp.jpg";
import P6 from "@/app/assets/images/3pp.jpg";
import P7 from "@/app/assets/images/2pp.jpg";
import P8 from "@/app/assets/images/8pp.jpg";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const images = [P1, P2, P3, P4, P5, P6, P7, P8];

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    afterChange: (index) => setCurrentIndex(index),
    prevArrow: (
      <button
        className="absolute w-14 h-14 flex justify-center items-center rounded-full shadow-lg 
        top-1/2 transform -translate-y-1/2 
        hover:bg-mahroon text-accent p-2 text-4xl duration-300 z-10 left-5"
        onClick={(e) => e.stopPropagation()} // Prevent event bubbling
      >
        <HiOutlineArrowLongLeft />
      </button>
    ),
    nextArrow: (
      <button
        className="absolute w-14 h-14 flex justify-center items-center rounded-full shadow-lg 
        top-1/2 transform -translate-y-1/2 
        hover:bg-mahroon text-accent p-2 text-4xl duration-300 z-10 right-5"
        onClick={(e) => e.stopPropagation()} // Prevent event bubbling
      >
        <HiOutlineArrowLongRight />
      </button>
    ),
  };

  return (
    <div className="columns-3 mobile:columns-2 gap-5 mobile:gap-2 py-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 cursor-pointer overflow-hidden rounded-lg"
          onClick={() => openLightbox(index)}
        >
          <Image
            src={image}
            width={600}
            height={400}
            alt={`Gallery Image ${index + 1}`}
            className="h-auto max-w-full hover:scale-105 duration-300"
          />
        </div>
      ))}

      {/* Lightbox Modal with Slider */}
      <Modal
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        contentLabel="Image Lightbox"
        className="fixed inset-0 max-h-screen flex items-center justify-center bg-black/80 z-50"
        overlayClassName="fixed inset-0 bg-[#00000080]"
      >
        <div className="relative  w-full  max-w-4xl rounded-lg p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 text-black text-2xl z-10 text-white bg-mahroon w-7 h-7 rounded-full"
          >
            ×
          </button>
          <Slider {...settings} initialSlide={currentIndex}>
            {images.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full h-full outline-none"
              >
                <Image
                  src={image}
                  width={800}
                  height={600}
                  alt={`Gallery Image ${index + 1}`}
                  className="rounded-lg max-h-[80vh] w-full object-contain"
                />
              </div>
            ))}
          </Slider>
          <div className="text-center mt-4 text-white font-bold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </Modal>
    </div>
  );
}
