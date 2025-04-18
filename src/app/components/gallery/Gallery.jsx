"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import P1 from "@/app/assets/images/1pp.jpg";
import P2 from "@/app/assets/images/7pp.jpg";
import P3 from "@/app/assets/images/6pp.jpg";
import P4 from "@/app/assets/images/5pp.jpg";
import P5 from "@/app/assets/images/4pp.jpg";
import P6 from "@/app/assets/images/3pp.jpg";
import P7 from "@/app/assets/images/2pp.jpg";
import P8 from "@/app/assets/images/8pp.jpg";

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

      {/* Lightbox Modal with Swiper Slider */}
      <Modal
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        contentLabel="Image Lightbox"
        className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-[#00000080]"
        overlayClassName="fixed inset-0 bg-black/80"
        ariaHideApp={false} // Disable app element for accessibility
      >
        <div className="relative w-full max-w-4xl">
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 z-50 text-white bg-mahroon w-8 h-8 rounded-full text-lg flex items-center justify-center"
          >
            ×
          </button>
          <Swiper
            modules={[Navigation]}
            navigation
            initialSlide={currentIndex}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="w-full h-[80vh] flex items-center justify-center"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={1000}
                    height={700}
                    className="max-h-[80vh] w-auto object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-4 text-white font-bold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </Modal>
    </div>
  );
}
