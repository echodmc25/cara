// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";

// const FixedCategoryList = ({ categories }) => {
//   const pathname = usePathname(); // Get current path
//   const categoryRefs = useRef({}); // Store category refs
//   const draggableRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [activeHash, setActiveHash] = useState("");

//   useEffect(() => {
//     const handleHashChange = () => {
//       setActiveHash(window.location.hash.replace("#", ""));
//     };

//     handleHashChange(); // Set initial hash
//     window.addEventListener("hashchange", handleHashChange); // Listen for hash changes

//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

//   const handleStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX || e.touches[0].pageX);
//     setScrollLeft(draggableRef.current.scrollLeft);
//     e.preventDefault();
//   };

//   const handleMove = (e) => {
//     if (!isDragging) return;
//     const x = e.pageX || e.touches[0].pageX;
//     const distance = (x - startX) * 1.5;
//     draggableRef.current.scrollLeft = scrollLeft - distance;
//   };

//   const handleEnd = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     const draggable = draggableRef.current;

//     if (draggable) {
//       draggable.addEventListener("mousedown", handleStart);
//       draggable.addEventListener("mousemove", handleMove);
//       draggable.addEventListener("mouseup", handleEnd);
//       draggable.addEventListener("mouseleave", handleEnd);

//       draggable.addEventListener("touchstart", handleStart, { passive: true });
//       draggable.addEventListener("touchmove", handleMove, { passive: false });
//       draggable.addEventListener("touchend", handleEnd);

//       return () => {
//         draggable.removeEventListener("mousedown", handleStart);
//         draggable.removeEventListener("mousemove", handleMove);
//         draggable.removeEventListener("mouseup", handleEnd);
//         draggable.removeEventListener("mouseleave", handleEnd);

//         draggable.removeEventListener("touchstart", handleStart);
//         draggable.removeEventListener("touchmove", handleMove);
//         draggable.removeEventListener("touchend", handleEnd);
//       };
//     }
//   }, [isDragging, startX, scrollLeft]);

//   const handleScrollToCategory = (sub_catname) => {
//     const targetElement = document.getElementById(sub_catname);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 100,
//         behavior: "smooth",
//       });
//       window.history.replaceState(null, "", `#${sub_catname}`);
//       setActiveHash(sub_catname); // Update active state
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 tablet:px-8 w-full pt-8 pb-5 bg-black z-20 overflow-hidden hidden tablet:block mobile:hidden">
//       <div className="relative container">
//         {/* <div className="absolute right-0 h-full w-5 gradient-overlay-light-black"></div> */}

//         <div
//           className="inline-flex gap-5 overflow-x-auto draggable cursor-grab w-full"
//           ref={draggableRef}
//         >
//           {categories.map((category) => {
//             const isActive =
//               activeHash ===
//               category.sub_catname
//                 .trim()
//                 .replace(/[^\w\s-]/g, "") // Remove special characters
//                 .replace(/\s+/g, "-") // Replace spaces with hyphens
//                 .toLowerCase();

//             return (
//               <button
//                 key={category.subcat_id}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (category?.sub_catname) {
//                     const formattedCategory = category.sub_catname
//                       .trim()
//                       .replace(/[^\w\s-]/g, "") // Remove special characters
//                       .replace(/\s+/g, "-") // Replace spaces with hyphens
//                       .toLowerCase();
//                     handleScrollToCategory(formattedCategory);
//                   }
//                 }}
//               >
//                 <div className="grid gap-3 justify-between items-start h-full min-w-[100px]">
//                   <Image
//                     src={category?.sub_catimg}
//                     alt={category?.sub_catname}
//                     width={100} // ✅ Required for Next.js Image optimization
//                     height={100} // ✅ Required for Next.js Image optimization
//                     className={`w-[100px] h-[100px] object-cover object-center rounded-full border-[4px] ${
//                       isActive ? "border-mahroon" : "border-black"
//                     }`}
//                   />
//                   <h2
//                     className={`font-ropa text-base text-center line-clamp-1 ${
//                       isActive ? "text-accent" : "text-white"
//                     }`}
//                   >
//                     {category?.sub_catname}
//                   </h2>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FixedCategoryList;

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FixedCategoryList = ({ categories }) => {
  const categoryRefs = useRef({}); // Store category refs
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // 🔥 Intersection Observer to Track Active Category
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility triggers update
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActive = entry.target.id;
          setActiveHash(newActive);
          window.history.replaceState(null, "", `#${newActive}`);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(draggableRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const distance = (x - startX) * 1.5;
    draggableRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const draggable = draggableRef.current;

    if (draggable) {
      draggable.addEventListener("mousedown", handleStart);
      draggable.addEventListener("mousemove", handleMove);
      draggable.addEventListener("mouseup", handleEnd);
      draggable.addEventListener("mouseleave", handleEnd);

      draggable.addEventListener("touchstart", handleStart, { passive: true });
      draggable.addEventListener("touchmove", handleMove, { passive: false });
      draggable.addEventListener("touchend", handleEnd);

      return () => {
        draggable.removeEventListener("mousedown", handleStart);
        draggable.removeEventListener("mousemove", handleMove);
        draggable.removeEventListener("mouseup", handleEnd);
        draggable.removeEventListener("mouseleave", handleEnd);

        draggable.removeEventListener("touchstart", handleStart);
        draggable.removeEventListener("touchmove", handleMove);
        draggable.removeEventListener("touchend", handleEnd);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  const handleScrollToCategory = (sub_catname) => {
    const targetElement = document.getElementById(sub_catname);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${sub_catname}`);
      setActiveHash(sub_catname); // Update active state
    }
  };

  return (
    <div className="fixed bottom-0 left-0 tablet:px-8 w-full pt-8 pb-5 mobile:pt-3 mobile:px-2 bg-black z-10 overflow-hidden hidden tablet:block ">
      <div className="relative container">
        <div
          className="inline-flex gap-2 overflow-x-auto draggable cursor-grab w-full"
          ref={draggableRef}
        >
          {categories.map((category) => {
            const formattedCategory = category.sub_catname
              ?.trim()
              .replace(/[^\w\s-]/g, "") // Remove special characters
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .toLowerCase();

            const isActive = activeHash === formattedCategory;

            return (
              <button
                key={category.subcat_id}
                onClick={(e) => {
                  e.preventDefault();
                  if (formattedCategory) {
                    handleScrollToCategory(formattedCategory);
                  }
                }}
              >
                <div className="grid gap-3 justify-between items-start h-full min-w-[100px] mobile:min-w-16">
                  <Image
                    src={category?.sub_catimg}
                    alt={category?.sub_catname}
                    width={100} // ✅ Required for Next.js Image optimization
                    height={100} // ✅ Required for Next.js Image optimization
                    className={`w-[100px] h-[100px] mobile:h-14 mobile:w-14 object-cover object-center rounded-full border-[4px] ${
                      isActive ? "border-mahroon" : "border-black"
                    }`}
                  />
                  <h2
                    className={`font-ropa text-base mobile:text-xs text-center line-clamp-1 ${
                      isActive ? "text-accent" : "text-white"
                    }`}
                  >
                    {category?.sub_catname}
                  </h2>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FixedCategoryList;
