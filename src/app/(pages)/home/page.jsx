import Image from "next/image";
import React from "react";
import Banner from "@/app/assets/images/mainimg.jpg";
import Left from "@/app/assets/images/left-lines.png";
import Right from "@/app/assets/images/right-lines.png";
import P1 from "@/app/assets/images/1pp.jpg";
import P2 from "@/app/assets/images/2pp.jpg";
import P3 from "@/app/assets/images/3pp.jpg";
import P4 from "@/app/assets/images/4pp.jpg";
import P5 from "@/app/assets/images/5pp.jpg";
import P6 from "@/app/assets/images/6pp.jpg";
import P7 from "@/app/assets/images/7pp.jpg";
import P8 from "@/app/assets/images/8pp.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesSlider from "@/app/components/slides/CategoriesSlider";
import PointsSlider from "@/app/components/slides/PointsSlider";
import ImagesSLide from "@/app/components/slides/ImagesSLide";
import BannerSlider from "@/app/components/slides/BannerSlider";
import VideoCardsSlider from "@/app/components/slides/VideoCardsSlider";

const getCategories = async () => {
  try {
    const res = await fetch(
      "https://clients.echodigital.net/carabliss/get_subcat5.php",
      {
        cache: "no-store", // Ensures fresh data on every request
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default async function Home() {
  const categories = await getCategories(); // Fetch data on the server

  console.log(categories);

  const slides = [
    {
      type: "video",
      media:
        "https://clients.echodigital.net/carabliss/uploads/featuredvideos/Carabliss-Website-Landing-Page-Video-stablized.webm",
      title: "Experience the Best",
      subtitle: "Delicious Delights",
      description:
        "Discover the finest selection of meals crafted with perfection. Indulge in taste, quality, and an unforgettable experience.",
      buttonText: "Our Special Menu",
      buttonLink: "/menu",
    },

    // {
    //   type: "image",
    //   media: Banner,
    //   title: "EXPERIENCE THE BLISS",
    //   subtitle: "Dessert Boutique",
    //   description:
    //     "Desserts designed for sharing - indulge in rich flavours, exquisite textures and pure indulgence.",
    //   buttonText: "Explore More",
    //   buttonLink: "/menu",
    // },
  ];

  const images = [P1, P3, P2, P4, P5, P6, P7, P8];

  // const VideoCardsData = [
  //   {
  //     productName: "Chocolate Sushi",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Chocolate-Sushi.mp4",
  //     productServings: "2-3 & 4-5",
  //     productDes: "",
  //     productPrice: "1650 - 2850",
  //   },
  //   {
  //     productName: "Dubais Viral Chocolate Waffle",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Dubais-Viral-Chocolate-Waffle-Reel.mp4",
  //     productServings: "2-3 & 4-5",
  //     productDes: "",
  //     productPrice: "2950 - 4250",
  //   },
  //   {
  //     productName: "Ferrero Rocher Waffle",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Ferrero-Rocher-Waffle.mp4",
  //     productServings: "2-3 & 4-5",
  //     productDes: "",
  //     productPrice: "2950 - 4250",
  //   },
  //   {
  //     productName: "KitKat Shake",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/KitKat-Shake-Reel.mp4",
  //     productServings: "2-3",
  //     productDes: "",
  //     productPrice: "2350",
  //   },
  //   {
  //     productName: "Raffaello Waffle",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Raffaello-Waffle.mp4",
  //     productServings: "2-3 & 4-5",
  //     productDes: "",
  //     productPrice: "2950 - 4250",
  //   },
  //   {
  //     productName: "Signature Hot Chocolate",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Signature-Hot-Chocolate-Reel.mp4",
  //     productServings: "1 & 2-3",
  //     productDes: "",
  //     productPrice: "1350 - 1950",
  //   },
  //   {
  //     productName: "Skillet Cookie with Vanilla Gelato",
  //     productVid:
  //       "https://clients.echodigital.net/carabliss/uploads/products/Skillet-Cookie-with-Vanilla-Gelato.mp4",
  //     productServings: "2-3",
  //     productDes: "",
  //     productPrice: "2450",
  //   },
  // ];

  return (
    <>
      <div className="relativex">
        <BannerSlider slides={slides} />
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="py-24  mobile:pb-20 mobile:pt-12 categories-list-carousel">
        <div className="max-w-[660px] mx-auto mb-10 px-5">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Loaded Desserts For Every Craving.
          </h3>
          <h2 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Menu
          </h2>
          <p className="p text-center text-[#837C74] mt-5">
            Crafted with premium ingredients and designed for sharing, our
            desserts are made to bring delight to every bite.
          </p>
        </div>
        <div className="tablet:mx-5">
          <CategoriesSlider categorySlides={categories} />
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* <div className="py-24  mobile:pb-20 mobile:pt-12 categories-list-carousel container">
        <div className="max-w-[660px] mx-auto mb-10 px-5">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Mouth Watering Delicious
          </h3>
          <h2 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Desserts
          </h2>
          <p className="p text-center text-[#837C74] mt-5">
            Crafted with premium ingredients and designed for sharing, our
            desserts are made to bring delight to every bite.
          </p>
        </div>
        <div className="tablet:mx-5">
          <VideoCardsSlider categorySlides={VideoCardsData} />
        </div>
      </div> */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="bg-black py-20 relative">
        <div className="absolute w-[5%] tablet:w-[14%] left-0 top-0 h-full">
          <Image
            src={Left}
            className="h-full"
            width={200}
            height={1000}
            alt="lines"
          />
        </div>
        <div className="container pointers  px-5">
          <PointsSlider />
        </div>
        <div className="absolute w-[5%] tablet:w-[14%] right-0 top-0 h-full">
          <Image
            src={Right}
            className="h-full"
            width={200}
            height={1000}
            alt="lines"
          />
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="py-24  mobile:pb-14 mobile:pt-12 categories-list-carousel">
        <div className=" mb-10 px-5">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Explore Our Irresistible Dessert Creations
          </h3>
          <h1 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Gallery
          </h1>
          <p className="p mx-auto text-center max-w-[660px]  text-[#837C74] mt-5">
            Take your taste buds on a journey with our mouthwatering dessert
            collection.
          </p>
        </div>

        <ImagesSLide images={images} />
      </div>
    </>
  );
}
