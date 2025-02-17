"use client";
import React, { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Page = () => {
  const [preferredMethod, setPreferredMethod] = useState("");

  return (
    <div className="py-12">
      <div className="mx-auto container px-5">
        <div className="grid grid-cols-2 gap-5 mobile:grid-cols-1">
          <div className="mb-0">
            <div className="group w-full h-full">
              <div className="relative h-full mobile:h-[500px]">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-ropa text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-5">
                    <p className="flex items-center mb-6">
                      <BsFillClockFill className="text-accent text-xl min-w-8" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5">
                        <strong> Mon - Thur: </strong> 05pm - 12AM
                        <br />
                        <strong>Fri - Sun:</strong>  05pm - 02AM
                      </h5>
                    </p>
                    <a
                      href="tel:0304-111-8080"
                      className="flex items-center mb-6"
                    >
                      <FaPhone className="text-accent text-xl min-w-8" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5">
                        0304-111-8080
                      </h5>
                    </a>
                    <a
                      href="mailto:hello@carabliss.pk"
                      className="flex items-center mb-6"
                    >
                      <IoIosMail className="text-accent text-2xl min-w-8" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5">
                        hello@carabliss.pk
                      </h5>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/8XpsTjTs4aX8ZRzx7"
                      className="flex items-center mb-6"
                    >
                      <FaLocationArrow className="text-accent text-xl min-w-8" />
                      <p className="text-black text-base font-normal font-raleway leading-6 ml-5">
                        10/C, Ittehad Commercial, Main Khayaban-e-Nishat, Phase
                        6, DHA, Karachi
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-accent font-kaisei h2 font-semibold mb-8 mobile:text-center">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center mr-11">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    value="Email"
                    checked={preferredMethod === "Email"}
                    onChange={() => setPreferredMethod("Email")}
                    className="hidden"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer font-Raleway text-gray-500 text-base font-normal leading-6"
                  >
                    <span
                      className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ${
                        preferredMethod === "Email" ? "bg-mahroon" : ""
                      }`}
                    ></span>{" "}
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-2"
                    type="radio"
                    name="radio-group"
                    value="Phone"
                    checked={preferredMethod === "Phone"}
                    onChange={() => setPreferredMethod("Phone")}
                    className="hidden"
                  />
                  <label
                    htmlFor="radio-group-2"
                    className="flex items-center font-Raleway cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    <span
                      className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ${
                        preferredMethod === "Phone" ? "bg-mahroon" : ""
                      }`}
                    ></span>{" "}
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 font-Raleway bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Message"
            />
            <button
              className="bg-accent text-mahroon hover:bg-white w-full
               font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] hover:text-mahroon hover:bg-accent duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
