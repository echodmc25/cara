"use client";
import React, { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Page = () => {
  const [resume, setResume] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validFormats = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validFormats.includes(file.type)) {
        setResume(file);
      } else {
        alert("Invalid file format! Please upload a PDF or Word document.");
        setResume(null);
      }
    }
  };

  return (
    <div className="py-12">
      <div className="mx-auto mobile:px-5 laptop:px-12">
        <div className="">
          <h1 className="page-heading text-accent text-center">Catering</h1>
          <p className="text-white/60 p text-center mb-8 mt-2 max-w-[750px] mx-auto">
            From weddings to birthdays that deserve a sprinkle of magic, our
            desserts steal the show. With Carabliss, memories aren’t just
            made—they’re savoured. Choose from our range of packages to make
            every moment unforgettable.
          </p>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl max-w-[700px] mx-auto">
            <h2 className="text-accent font-kaisei h2 font-semibold leading-10 mb-8 mobile:text-center">
              Event Details
            </h2>
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="City"
            />
            <input
              type="date"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Event Date"
            />
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Event Location"
            />
            <input
              type="time"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Event Time"
            />
            <input
              type="number"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Number of Guests"
            />
            <button
              className="bg-accent text-mahroon hover:bg-white w-full
               font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] hover:text-mahroon hover:bg-accent duration-300"
            >
              Submit
            </button>
            <p className="p text-accent text-center mt-5">
              *Once you submit this form, our catering team will get in touch
              within 24 hours to finalise the details for your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
