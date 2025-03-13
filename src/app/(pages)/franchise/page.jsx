"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [whyCarabliss, setWhyCarabliss] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("city", city);
    formData.append("why_carablis", whyCarabliss);
    formData.append("previous_experience", previousExperience);

    try {
      const response = await axios.post(
        "https://admin.carabliss.pk/add_franchise.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
        setName("");
        setEmail("");
        setContact("");
        setCity("");
        setWhyCarabliss("");
        setPreviousExperience("");
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mobile:gap-3">
              <div className="flex justify-between items-center gap-5 mobile:flex-col mobile:gap-3">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="Full Name" required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="Email Address" required />
              </div>
              <div className="flex justify-between items-center gap-5 mobile:flex-col mobile:gap-3">
              <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="Contact Number" required />
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="City of Interest" required />
              </div>
              <textarea value={whyCarabliss} onChange={(e) => setWhyCarabliss(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="Why Carabliss?" required />
              <textarea value={previousExperience} onChange={(e) => setPreviousExperience(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 " placeholder="Previous Business Experience" required />
              <button type="submit" className="bg-accent text-mahroon w-full font-bold text-lg py-4 rounded-full hover:bg-white duration-300">{loading ? "Submitting..." : "Submit"}</button>
            </form>
            {responseMessage && (
              <p className={`mt-4 text-center text-lg ${responseType === "success" ? "text-green-500" : "text-red-500"}`}>
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
