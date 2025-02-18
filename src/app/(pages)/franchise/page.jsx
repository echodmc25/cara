"use client";
import React, { useState } from "react";

const Page = () => {
  return (
    <div className="py-12">
      <div className="mx-auto mobile:px-5 laptop:px-12">
        <div className="">
          <h1 className="page-heading text-accent text-center">Franchise</h1>
          <p className="text-white/60 p text-center mb-8 mt-2 max-w-[750px] mx-auto">
            Interested in bringing the magic of Carabliss to your city? We’re as
            excited as you!
          </p>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl max-w-[700px] mx-auto">
            <h2 className="text-accent font-kaisei h2 font-semibold leading-10 mb-8 mobile:text-center">
              Application Form
            </h2>
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="City of Interest"
            />
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Proposed Location (if any)"
            />
            <input
              type="date"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Preferred Start Date"
            />
            <textarea
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-3xl border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Why Carabliss? (Tell us about your interest)"
              rows="3"
            ></textarea>
            <textarea
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-3xl border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Previous Business Experience"
              rows="3"
            ></textarea>
            <input
              type="text"
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Investment Budget"
            />
            <textarea
              className="w-full py-4 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-3xl border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Additional Questions or Comments"
              rows="3"
            ></textarea>
            <button className="bg-accent text-mahroon hover:bg-white w-full font-kaisei font-bold text-lg py-4 px-14 rounded-full hover:text-mahroon hover:bg-accent duration-300">
              Submit
            </button>
            <p className="p text-accent text-center mt-5">
              *Once you submit this form, our franchise team will review your
              application and get in touch within 48 hours to discuss the next
              steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
