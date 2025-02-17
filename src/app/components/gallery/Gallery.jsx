"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
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
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="columns-3  mobile:columns-2 gap-5 mobile:gap-2 py-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 cursor-pointer overflow-hidden rounded-lg"
          onClick={() => openLightbox(image)}
        >
          <Image
            src={image}
            width={600}
            height={400}
            alt={`Gallery Image ${index + 1}`}
            className="h-auto max-w-full  hover:scale-105 duration-300"
          />
        </div>
      ))}

      {/* Lightbox Modal */}
      <Modal
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        contentLabel="Image Lightbox"
        className="fixed inset-0 max-h-screen flex items-center justify-center bg-black/80 z-50 bg-black"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="relative">
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            ×
          </button>
          <Image
            src={currentImage}
            width={800}
            height={600}
            alt="Lightbox Image"
            className="rounded-lg max-h-[80vh] w-full"
          />
        </div>
      </Modal>
    </div>
  );
}
