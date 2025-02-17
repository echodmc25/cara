"use client";

import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import Baker1 from "@/app/assets/images/bakker1.jpg";
import Baker2 from "@/app/assets/images/bakker2.jpg";
// import TanveerImage from "@/app/assets/images/tanveer.jpg"; // Add an actual image
// import CarablissImage from "@/app/assets/images/carabliss.jpg"; // Add an actual image

const AboutUs = () => {
  return (
    <div className="">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white">
        <Image
          src={Banner}
          alt="bg"
          width={2000}
          height={2000}
          className="w-full absolute top-0 left-0 h-full object-cover -z-10 opacity-70"
        />
        <h1 className="page-heading text-accent">About Us</h1>
      </div>

      {/* Section 1 - Tanveer's Journey */}
      <section className="container mx-auto px-5 py-16 flex lg:flex-row items-center gap-12 mobile:flex-col-reverse">
        <div className="w-1/2 mobile:w-full">
          <h2 className="h2 text-accent mb-4">The Journey of Tanveer Yusuf</h2>
          <p className="p">
            Tanveer Yusuf’s story began in 2005 when, at the age of 21, he
            became the youngest Subway franchisee in the MENA region. Under his
            leadership, the Subway Shahbaz branch quickly became Pakistan’s #1
            Subway outlet and achieved a remarkable #9 ranking across the Middle
            East and North Africa.
          </p>
          <p className="p">
            In 2011, he founded 14th Street Pizza, which quickly grew to over 20
            stores in 10 cities, making it a household name. His journey of
            innovation and dedication has shaped the food industry in Pakistan.
          </p>
        </div>
        <div className="w-1/2 mobile:w-full">
          <Image
            src={Baker1}
            alt="Tanveer Yusuf"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mobile:w-full"
          />
        </div>
      </section>

      {/* Section 2 - Carabliss Vision */}
      <section className="container mx-auto px-5 pb-16 pt-8 flex lg:flex-row-reverse items-center gap-12 mobile:flex-col">
        <div className="w-1/2 mobile:w-full">
          <Image
            src={Baker2}
            alt="Carabliss Desserts"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mobile:w-full"
          />
        </div>
        <div className="w-1/2 mobile:w-full">
          <h2 className="text-accent h2 mb-4">Carabliss - A Family Passion</h2>
          <p className="p">
            Carabliss is a collaborative effort, led by Tanveer and his
            sister-in-law Khadija Shahid. With her love for baking and expertise
            in crafting exquisite desserts, she adds a creative flair to the
            boutique café.
          </p>
          <p className="p">
            At Carabliss, success is a team effort, driven by a passion for
            delivering the finest desserts. Every creation tells a story of
            dedication, creativity, and indulgence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
