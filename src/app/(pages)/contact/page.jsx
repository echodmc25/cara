"use client";
import React, { useState } from "react";
import axios from "axios";
import { BsFillClockFill } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoIosMail, IoMdPin } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Cara from "@/app/assets/images/cara-outlet.png"

const Page = () => {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("");
  const [message, setMessage] = useState("");
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
    formData.append("phone", phone);
    formData.append("prefered_comm", preferredMethod);
    formData.append("message", message);

    try {
      const response = await axios.post(
        "https://clients.echodigital.net/carabliss/add_contact.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 10000,
        }
      );

      console.log("API Response:", response.data);
      if (response.status === 200 || response.data?.code === 200) {
        setResponseMessage("Message sent successfully!");
        setResponseType("success");
        toast.success("Message sent successfully!");
      } else {
        setResponseMessage("Failed to send message. Please try again.");
        setResponseType("error");
        toast.error("Failed to send message. Please try again.");
      }

      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setPreferredMethod("");
        setMessage("");
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
      <div className="mx-auto container px-5">
        <div className="grid grid-cols-2 gap-5 mobile:grid-cols-1 tablet:grid-cols-1">
          <div className="mb-0">
            <div className="group w-full h-full">
              <div className="relative h-full mobile:h-[500px] bg-mahroon rounded-2xl">
                <Image
                  src={Cara}
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply object-cover max-h-[80vh] tablet:max-h-[400px] opacity-60 "
                />
                <h1 className="page-heading text-white leading-10 absolute top-11 left-11 tablet:left-5 table">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-5">
                    <p className="flex items-center mb-6">
                      <BsFillClockFill className="text-accent text-xl min-w-8 mobile:w-4" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5 mobile:text-sm">
                        <strong> Mon - Sun: </strong> 07pm - 03AM For Ramdan Only 
                        {/* <br /> */}
                        {/* <strong>Fri - Sun:</strong>  05pm - 02AM */}
                      </h5>
                    </p>
                    <a
                      href="tel:0322-8291815"
                      className="flex items-center mb-6"
                    >
                      <FaPhone className="text-accent text-xl min-w-8 mobile:w-4" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5 mobile:text-sm">
                        0322-8291815
                      </h5>
                    </a>
                    <a
                      href="mailto:hello@carabliss.pk"
                      className="flex items-center mb-6"
                    >
                      <IoIosMail className="text-accent text-2xl min-w-8 mobile:w-4" />
                      <h5 className="text-black text-base font-normal font-raleway leading-6 ml-5 mobile:text-sm">
                        hello@carabliss.pk
                      </h5>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/8XpsTjTs4aX8ZRzx7"
                      className="flex items-center mb-6"
                    >
                      <IoMdPin className="text-mahroon text-3xl min-w-8 mobile:w-4" />
                      <p className=" text-blue-700 text-base font-normal font-raleway leading-6 ml-5 mobile:text-sm">
                        10/C, Ittehad Commercial, Main Khayaban-e-Nishat, Phase
                        6, DHA, Karachi
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-accent font-kaisei h2 font-semibold mb-8 mobile:text-center">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" placeholder="Name" required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" placeholder="Email" required />
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full py-4 text-white bg-transparent text-lg border border-gray-200 rounded-2xl pl-4 mb-5" placeholder="Phone" required />
              <h4 className="text-gray-500 text-lg mb-4">Preferred method of communication</h4>
              <div className="flex mb-5">
                <label className="flex items-center mr-5 cursor-pointer">
                  <input type="radio" name="preferredMethod" value="Email" checked={preferredMethod === "Email"} onChange={() => setPreferredMethod("Email")} className="hidden" />
                  <span className={`border rounded-full w-4 h-4 mr-2 ${preferredMethod === "Email" ? "bg-mahroon" : ""}`} /> Email
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="preferredMethod" value="Phone" checked={preferredMethod === "Phone"} onChange={() => setPreferredMethod("Phone")} className="hidden" />
                  <span className={`border rounded-full w-4 h-4 mr-2 ${preferredMethod === "Phone" ? "bg-mahroon" : ""}`} /> Phone
                </label>
              </div>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full py-4 h-44 text-white bg-transparent text-lg border border-gray-200 rounded-2xl px-4 mb-5 tablet:h-24" placeholder="Message" required />
              <button type="submit" className="bg-accent text-mahroon w-full font-bold text-lg py-4 rounded-full hover:bg-white duration-300">{loading ? "Sending..." : "Send"}</button>
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
