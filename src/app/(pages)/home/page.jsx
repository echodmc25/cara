import React from "react";
import Banner from "@/app/assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="w-full h-screen overflow-hidden -mt-[112px] z-0">
          <Image src={Banner} alt="banner" height="3200" width="3200" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" flex flex-col justify-center items-center gap-12 px-5">
            <div className=" max-w-[700px]">
              <h3 className="font-arizonia text-[36px] text-white text-center">
                New Test
              </h3>
              <h2 className="text-white tracking-widest font-kaisei text-[64px] font-bold text-center uppercase">
                Duis sed odio
              </h2>
              <p className="font-ropa text-xl text-white text-center mt-5 max-w-[661px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text 
              </p>
            </div>
            <Link
              href="/menu"
              className="text-accent font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] bg-mahroon hover:text-mahroon hover:bg-accent duration-300"
            >
              Our Special Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
