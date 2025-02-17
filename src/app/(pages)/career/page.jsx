"use client";
import React, { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Page = () => {
  const [preferredMethod, setPreferredMethod] = useState("");
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
          <h1 className="page-heading text-accent text-center">Career</h1>
          <p className="text-white/60 p text-center mb-8 mt-2">
            {" "}
            Scoop your way to success! Applications open.
          </p>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl max-w-[700px] mx-auto">
            <h2 className="text-accent font-kaisei h2 font-semibold leading-10 mb-8 mobile:text-center">
              Job Application Form
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
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="w-full py-4 text-white font-Raleway placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Position Applying For"
            />
            <div className="mb-10">
              <label className="block text-gray-500 text-lg font-normal leading-7 mb-4">
                Upload Resume/CV (PDF, DOC, DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="w-full text-white font-Raleway bg-transparent text-lg shadow-sm font-normal leading-7 h-16  border rounded-full border-gray-200 focus:outline-none pl-4 py-[14px]"
              />
              {resume && (
                <p className="text-green-500 text-sm mt-2">
                  Selected File: {resume.name}
                </p>
              )}
            </div>
            <button
              className="bg-accent text-mahroon hover:bg-white w-full
               font-kaisei font-bold text-lg py-4 px-14 rounded-[50px] hover:text-mahroon hover:bg-accent duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
