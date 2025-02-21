import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/images/carabliess-logo.png";
import Payment from "@/app/assets/images/11c.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black pt-32 tablet:pt-12 pb-16 px-5">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-start gap-5 tablet:gap-10 tablet:flex-col">
          <div className="max-w-[586px] w-full tablet:max-w-full">
            <div className="max-w-[334px] mobile:max-w-[200px]">
              <Image
                src={Logo}
                alt=""
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <p className="p my-8">Loaded with love, crafted for bliss</p>
            <div className="flex justify-start items-center gap-5">
              <a
                href="https://www.tiktok.com/@carablisspk?lang=en"
                target="_blank"
              >
                <FaTiktok className="text-accent text-2xl hover:scale-110 duration-300 hover:text-mahroon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572609715901"
                target="_blank"
              >
                <CiFacebook className="text-accent text-3xl hover:scale-110 duration-300 hover:text-mahroon" />
              </a>
              <a href="https://www.instagram.com/carablisspk/" target="_blank">
                <FaInstagram className="text-accent text-3xl hover:scale-110 duration-300 hover:text-mahroon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwrZjDw08DWSsEZ-jEoQSwQ"
                target="_blank"
              >
                <AiOutlineYoutube className="text-accent text-3xl hover:scale-110 duration-300 hover:text-mahroon" />
              </a>
              <a
                href="https://maps.app.goo.gl/8XpsTjTs4aX8ZRzx7"
                target="_blank"
              >
                <TiLocationOutline className="text-accent text-3xl hover:scale-110 duration-300 hover:text-mahroon" />
              </a>
            </div>
          </div>
          <div className="max-w-[550px] w-full gap-5 flex justify-between items-start mobile:flex-col">
            <div className="">
              <h2 className="font-kaisei text-accent text-xl mb-5">
                Useful Links
              </h2>
              <ul className=" flex flex-col gap-2">
                <li>
                  <Link
                    href={"#"}
                    className="font-ropa text-base text-white uppercase"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-ropa text-base text-white uppercase"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-ropa text-base text-white uppercase"
                  >
                    Faqs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={"#"}
                    className="font-ropa text-base text-white uppercase"
                  >
                    Location
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="font-kaisei text-accent text-xl mb-5">
                Cafe Timing:
              </h2>
              <div className=" flex flex-col gap-2">
                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Monday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>
                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Monday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>
                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Tuesday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>
                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Wednesday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>
                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Friday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>

                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Saturday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>

                <div className="flex justify-between items-center font-ropa gap-5 text-base">
                  <span className="w-20">Sunday</span>
                  <span>:</span>
                  <span>05:00 PM to 02:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1700px]  mx-auto my-14 bg-white/20 h-[1px]"></div>
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center mobile:flex-col mobile:justify-center gap-5">
          <p className="font-ropa text-white text-base text-center">
            Copyright © 2025 Carabliss. All rights reserved | Powered by ECHO
            Digital
          </p>
          <Image
            src={Payment}
            alt="payment"
            className="w-full max-w-52"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
