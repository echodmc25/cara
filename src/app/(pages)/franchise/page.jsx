"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    location: "",
    start_date: "",
    why_carablis: "",
    previous_experience: "",
    budget: "",
    add_question: "",
    investment_plan: "",
    franchise_type: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://clients.echodigital.net/carabliss/add_franchise.php",
        { ...formData, timestamp: new Date().toISOString() },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );

      console.log("API Response:", response.data);
      if (response.status === 200 || response.data?.code === 200) {
        setResponseMessage("Application submitted successfully!");
        setResponseType("success");
        toast.success("Application submitted successfully!");
      } else {
        setResponseMessage("Failed to submit application. Please try again.");
        setResponseType("error");
        toast.error("Failed to submit application. Please try again.");
      }

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          contact: "",
          city: "",
          location: "",
          start_date: "",
          why_carablis: "",
          previous_experience: "",
          budget: "",
          add_question: "",
          investment_plan: "",
          franchise_type: "",
        });
        setResponseMessage(null);
        setResponseType(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Something went wrong. Please try again later.");
      setResponseType("error");
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12">
      <ToastContainer />
      <div className="mx-auto mobile:px-5 laptop:px-12">
        <div>
          <h1 className="page-heading text-accent text-center">Franchise</h1>
          <p className="text-white/60 p text-center mb-8 mt-2 max-w-[750px] mx-auto">
            Interested in bringing the magic of Carabliss to your city? We’re as excited as you!
          </p>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl max-w-[700px] mx-auto">
            <h2 className="text-accent font-kaisei h2 font-semibold leading-10 mb-8 mobile:text-center">
              Application Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5 mobile:grid-cols-1">
                <div>
                  <label className="text-white block mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
                </div>
                <div>
                  <label className="text-white block mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
                </div>
                <div>
                  <label className="text-white block mb-2">Contact Number</label>
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
                </div>
                <div>
                  <label className="text-white block mb-2">City of Interest</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
                </div>
              </div>
              <label className="text-white block mt-5 mb-2">Why Carabliss?</label>
              <textarea name="why_carablis" value={formData.why_carablis} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" rows="2" required />
              <label className="text-white block mt-5 mb-2">Previous Business Experience</label>
              <textarea name="previous_experience" value={formData.previous_experience} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" rows="2" required />
              <label className="text-white block mt-5 mb-2">Investment Budget</label>
              <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
              <label className="text-white block mt-5 mb-2">Investment Plan</label>
              <input type="text" name="investment_plan" value={formData.investment_plan} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
              <label className="text-white block mt-5 mb-2">Franchise Type</label>
              <input type="text" name="franchise_type" value={formData.franchise_type} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4" required />
              <button type="submit" className="bg-accent text-mahroon hover:bg-white w-full font-kaisei font-bold text-lg py-4 px-14 rounded-full hover:text-mahroon hover:bg-accent duration-300 mt-5">{loading ? "Submitting..." : "Submit"}</button>
            </form>
            {responseMessage && <p className={`mt-4 text-center text-lg ${responseType === "success" ? "text-green-500" : "text-red-500"}`}>{responseMessage}</p>}
            <p className="p text-accent text-center mt-5">*Once you submit this form, our franchise team will review your application and get in touch within 48 hours to discuss the next steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;