"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/assets/images/carabliess-logo.png";

import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
  // Get the current pathname
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // ✅ Correct toggle function
  };

  return (
    <>
      <div
        className={`${
          pathname === "/"
            ? "tablet:border-b border-white/20 absolute z-10 w-full"
            : "bg-mahroon"
        }`}
      >
        <div className="px-12 laptop:px-8 py-9 mobile:py-5 flex justify-between items-center mobile:px-5 max-[600px]:py-5">
          <div className="w-44 mobile:w-32">
            <Link href={"/"}>
              <Image
                src={Logo}
                width={222}
                height={50}
                alt="logo"
                className="w-full"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
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
                href="/about-us"
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
              className={` ${
                pathname === "/"
                  ? "bg-mahroon text-accent hover:bg-accent"
                  : "bg-accent text-mahroon hover:bg-white"
              } font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] hover:text-mahroon hover:bg-accent duration-300 tablet:hidden`}
            >
              Our Menu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="hidden tablet:block">
            <button onClick={toggleMenu}>
              <CgMenuLeft className="w-[40px] h-[40px] text-[--accent] cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Mobile Sliding Menu */}
      </div>
      <div
        className={`fixed h-full w-full top-0 left-0 bg-mahroon z transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-5 py-8 h-full">
          <div className="flex justify-between items-center">
            <div className="w-44 mobile:w-32">
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

            {/* Close Button */}
            <button onClick={toggleMenu} className="tablet:block">
              <IoMdCloseCircleOutline className="w-[35px] h-[35px] text-[--accent] cursor-pointer" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-5 h-full justify-center flex-1 items-center">
            <Link
              onClick={toggleMenu}
              href="/"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/" ? "text-[--accent]" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              href="/about-us"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/about-us" ? "text-[--accent]" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              onClick={toggleMenu}
              href="/menu"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/menu" ? "text-[--accent]" : "text-white"
              }`}
            >
              Menu
            </Link>
            <Link
              onClick={toggleMenu}
              href="#"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/franchise" ? "text-[--accent]" : "text-white"
              }`}
            >
              Franchise
            </Link>
            <Link
              onClick={toggleMenu}
              href="#"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/catering" ? "text-[--accent]" : "text-white"
              }`}
            >
              Catering
            </Link>
            <Link
              onClick={toggleMenu}
              href="#"
              className={`text-ropa text-3xl  uppercase ${
                pathname === "/contact" ? "text-[--accent]" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
