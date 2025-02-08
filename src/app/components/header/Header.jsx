"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/images/carabliess-logo.png";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="tablet:bg-mahroon z-10 relative">
      <div className="px-12 laptop:px-8 py-9 mobile:py-5 flex justify-between items-center mobile:px-5 max-[600px]:py-5">
        <div className=" w-44 mobile:w-40">
          <Link href={"/menu"}>
            <Image
              src={Logo}
              width={222}
              height={50}
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>
        <div className="menu tablet:hidden">
          <div className="flex justify-between gap-10 items-center">
            <Link
              href="/"
              className={`text-ropa text-base uppercase ${
                pathname === "/" ? "text-[--accent]" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="#"
              className={`text-ropa text-base uppercase ${
                pathname === "/about-us" ? "text-[--accent]" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              href="#"
              className={`text-ropa text-base uppercase ${
                pathname === "/franchise" ? "text-[--accent]" : "text-white"
              }`}
            >
              Franchise
            </Link>
            <Link
              href="#"
              className={`text-ropa text-base uppercase ${
                pathname === "/catering" ? "text-[--accent]" : "text-white"
              }`}
            >
              Catering
            </Link>
            <Link
              href="#"
              className={`text-ropa text-base uppercase ${
                pathname === "/contact" ? "text-[--accent]" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/menu"
            className="text-accent font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] bg-mahroon hover:text-mahroon hover:bg-accent duration-300 tablet:hidden"
          >
            Our Menu
          </Link>
        </div>
        <div className="hidden tablet:block">
          <CgMenuLeft className="w-[45px] h-[45px] text-[--accent] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
