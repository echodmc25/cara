"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        toast.error("Invalid file format! Please upload a PDF or Word document.");
        setResume(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    if (resume) {
      formDataToSend.append("upload_cv", resume);
    }

    try {
      const response = await axios.post(
        "https://clients.echodigital.net/carabliss/add_careers.php",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 10000,
        }
      );

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
        setFormData({ name: "", email: "", phone: "", message: "" });
        setResume(null);
        document.getElementById("resumeUpload").value = "";
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
          <h1 className="page-heading text-accent text-center">Career</h1>
          <p className="text-white/60 p text-center mb-8 mt-2"> Scoop your way to success! Applications open.</p>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl max-w-[700px] mx-auto">
            <h2 className="text-accent font-kaisei h2 font-semibold leading-10 mb-8 mobile:text-center">
              Job Application Form
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="text-white block mb-2">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" required />
              
              <label className="text-white block mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" required />
              
              <label className="text-white block mb-2">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" required />
              
              <label className="text-white block mb-2">Upload Resume/CV (PDF, DOC, DOCX)</label>
              <input id="resumeUpload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="w-full text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 py-3 mb-5" required />
              {resume && <p className="text-green-500 text-sm mt-2">Selected File: {resume.name}</p>}
              
              <label className="text-white block mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" rows="2" required />
              
              <button type="submit" className="bg-accent text-mahroon hover:bg-white w-full font-kaisei font-bold text-lg py-4 px-14 rounded-full hover:text-mahroon hover:bg-accent duration-300">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
            {responseMessage && <p className={`mt-4 text-center text-lg ${responseType === "success" ? "text-green-500" : "text-red-500"}`}>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;