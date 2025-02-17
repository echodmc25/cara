"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesSLide = ({ images }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Ensure the marquee is not already duplicated
    if (marquee.dataset.duplicated) return;

    // Clone only the original slides
    const items = Array.from(marquee.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      marquee.appendChild(clone);
    });

    // Mark as duplicated to prevent further clones
    marquee.dataset.duplicated = "true";

    // Apply animation only once
    marquee.style.animation = `scrollMarquee 20s linear infinite`;
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-[500px] tablet:h-[300px] mobile:h-[200px] flex-shrink-0 w-auto mx-5 mobile:mx-2 ${
              index % 2 !== 0 ? "mt-20 mobile:mt-10" : ""
            }`}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              height={1024}
              width={1024}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CSS for Infinite Loop */}
      <style jsx>{`
        @keyframes scrollMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ImagesSLide;

// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImagesSLide = ({ images }) => {
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     if (!marquee) return;

//     // Ensure the marquee is not already duplicated
//     if (marquee.dataset.duplicated) return;

//     // Clone only the original slides
//     const items = Array.from(marquee.children);
//     items.forEach((item) => {
//       const clone = item.cloneNode(true);
//       marquee.appendChild(clone);
//     });

//     // Mark as duplicated to prevent further clones
//     marquee.dataset.duplicated = "true";

//     // Apply animation only once
//     marquee.style.animation = `scrollMarquee 20s linear infinite`;
//   }, []);

//   // Handle hover events to pause and resume animation
//   const handleMouseEnter = () => {
//     if (marqueeRef.current) {
//       marqueeRef.current.style.animationPlayState = "paused";
//     }
//   };

//   const handleMouseLeave = () => {
//     if (marqueeRef.current) {
//       marqueeRef.current.style.animationPlayState = "running";
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden py-10">
//       <div
//         ref={marqueeRef}
//         className="flex w-max whitespace-nowrap"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`h-[500px] tablet:h-[300px] mobile:h-[200px] flex-shrink-0 w-auto mx-5 mobile:mx-2 ${
//               index % 2 !== 0 ? "mt-20 mobile:mt-10" : ""
//             }`}
//           >
//             <Image
//               src={image}
//               alt={`image-${index}`}
//               height={1024}
//               width={1024}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* CSS for Infinite Loop */}
//       <style jsx>{`
//         @keyframes scrollMarquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImagesSLide;
