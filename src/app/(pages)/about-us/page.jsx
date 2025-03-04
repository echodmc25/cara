"use client";

import { useState } from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import Baker1 from "@/app/assets/images/bakker1.jpg";
import Baker2 from "@/app/assets/images/bakker2.jpg";

const AboutUs = () => {
  // State for toggling content visibility
  const [showFullTanveer, setShowFullTanveer] = useState(false);
  const [showFullCarabliss, setShowFullCarabliss] = useState(false);

  return (
    <div>
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

          {/* Conditionally Rendered Content */}
          {!showFullTanveer ? (
            <p className="p">
              Tanveer Yusuf’s story began in 2005 when, at the age of 21, he became the youngest Subway franchisee in the MENA region. Under his leadership, the Subway Shahbaz branch quickly became Pakistan’s #1 Subway outlet...
            </p>
          ) : (
            <>
              <p className="p">
                Tanveer Yusuf’s story began in 2005 when, at the age of 21, he became the youngest Subway franchisee in the MENA (Middle East and North Africa) region. Under his leadership, the Subway Shahbaz branch quickly became Pakistan’s #1 Subway outlet and achieved a remarkable #9 ranking across the Middle East and North Africa.
              </p>
              <p className="p">
                In 2011, Tanveer set his sights on creating something truly unique, launching 14th Street Pizza. What started as a single idea grew into a powerhouse brand, with over 20 stores across 10 cities in Pakistan.
              </p>
              <p className="p">
                Recently, Tanveer took his culinary journey to new heights by travelling across Europe, Canada, and the United Kingdom to learn about the art and culture of dessert-making.
              </p>
            </>
          )}

          {/* Show More / Show Less Button */}
          <button
            onClick={() => setShowFullTanveer(!showFullTanveer)}
            className="mt-3 text-accent underline cursor-pointer font-semibold"
          >
            {showFullTanveer ? "Show Less" : "Show More"}
          </button>
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

          {/* Conditionally Rendered Content */}
          {!showFullCarabliss ? (
            <p className="p">
              Carabliss, however, is not just about Tanveer—it is a collaborative family endeavour. His sister-in-law and partner, Khadija Shahid, plays a pivotal role in the success of the boutique café...
            </p>
          ) : (
            <>
              <p className="p">
                Carabliss is not just about Tanveer—it is a collaborative family endeavour. His sister-in-law and partner, Khadija Shahid, plays a pivotal role in the success of the boutique café. With her love for baking and extensive experience in crafting desserts, Khadija brings a creative flair and artisanal expertise that perfectly complements the vision of Carabliss.
              </p>
              <p className="p">
                At Carabliss, Tanveer firmly believes that success is never a solo achievement. It is the result of a team united by a shared passion for delivering the best. Together, the Carabliss team works tirelessly to create desserts that are as delightful to the eye as they are to the palate.
              </p>
              <p className="p">
                Carabliss is more than just a dessert boutique—it is a celebration of dedication, creativity, and the joy of indulgence. Under Tanveer’s leadership, it has become a haven for dessert lovers, where every bite tells a story of passion and perfection.
              </p>
            </>
          )}

          {/* Show More / Show Less Button */}
          <button
            onClick={() => setShowFullCarabliss(!showFullCarabliss)}
            className="mt-3 text-accent underline cursor-pointer font-semibold"
          >
            {showFullCarabliss ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
