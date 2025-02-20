// import Image from "next/image";
// import React from "react";
// import Banner from "@/app/assets/images/banner.png";
// import Left from "@/app/assets/images/left-lines.png";
// import Right from "@/app/assets/images/right-lines.png";
// import P1 from "@/app/assets/images/1pp.jpg";
// import P2 from "@/app/assets/images/2pp.jpg";
// import P3 from "@/app/assets/images/3pp.jpg";
// import P4 from "@/app/assets/images/4pp.jpg";
// import P5 from "@/app/assets/images/5pp.jpg";
// import P6 from "@/app/assets/images/6pp.jpg";
// import P7 from "@/app/assets/images/7pp.jpg";
// import P8 from "@/app/assets/images/8pp.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CategoriesSlider from "@/app/components/slides/CategoriesSlider";
// import PointsSlider from "@/app/components/slides/PointsSlider";
// import ImagesSLide from "@/app/components/slides/ImagesSLide";
// import BannerSlider from "@/app/components/slides/BannerSlider";

// const getCategories = async () => {
//   try {
//     const res = await fetch(
//       "https://clients.echodigital.net/carabliss/get_subcat5.php",
//       {
//         cache: "no-store", // Ensures fresh data on every request
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch categories");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// export default async function Home() {
//   const categories = await getCategories(); // Fetch data on the server

//   console.log(categories);

//   const slides = [
//     {
//       image: Banner,
//       title: "EXPERIENCE THE BLISS",
//       subtitle: "Dessert Boutique",
//       description:
//         "Desserts designed for sharing - indulge in rich flavours, exquisite textures and pure indulgence.",
//       buttonText: "Explore More",
//       buttonLink: "#",
//     },
//     // {
//     //   image: Banner,
//     //   title: "Experience the Best",
//     //   subtitle: "Delicious Delights",
//     //   description:
//     //     "Discover the finest selection of meals crafted with perfection. Indulge in taste, quality, and an unforgettable experience.",
//     //   buttonText: "Our Special Menu",
//     //   buttonLink: "/menu",
//     // },
//   ];

//   const images = [P1, P3, P2, P4, P5, P6, P7, P8];

//   return (
//     <>
//       <div className="relativex">
//         <BannerSlider slides={slides} />
//       </div>

//       {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

//       <div className="py-24  mobile:pb-20 mobile:pt-12 categories-list-carousel">
//         <div className="max-w-[660px] mx-auto mb-10 px-5">
//           <h3 className="font-arizonia text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
//             Loaded Desserts For Every Craving.
//           </h3>
//           <h2 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
//             Menu
//           </h2>
//           <p className="p text-center text-[#837C74] mt-5">
//             Crafted with premium ingredients and designed for sharing, our
//             desserts are made to bring delight to every bite.
//           </p>
//         </div>
//         <div className="tablet:mx-5">
//           <CategoriesSlider categorySlides={categories} />
//         </div>
//       </div>

//       {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

//       <div className="bg-black py-20 relative">
//         <div className="absolute w-[5%] tablet:w-[14%] left-0 top-0 h-full">
//           <Image
//             src={Left}
//             className="h-full"
//             width={200}
//             height={1000}
//             alt="lines"
//           />
//         </div>
//         <div className="container pointers  px-5">
//           <PointsSlider />
//         </div>
//         <div className="absolute w-[5%] tablet:w-[14%] right-0 top-0 h-full">
//           <Image
//             src={Right}
//             className="h-full"
//             width={200}
//             height={1000}
//             alt="lines"
//           />
//         </div>
//       </div>

//       {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

//       <div className="py-24  mobile:pb-14 mobile:pt-12 categories-list-carousel">
//         <div className=" mb-10 px-5">
//           <h3 className="font-arizonia text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
//             Explore Our Irresistible Dessert Creations
//           </h3>
//           <h1 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
//             Gallery
//           </h1>
//           <p className="p mx-auto text-center max-w-[660px]  text-[#837C74] mt-5">
//             Take your taste buds on a journey with our mouthwatering dessert
//             collection.
//           </p>
//         </div>

//         <ImagesSLide images={images} />
//       </div>
//     </>
//   );
// }

// import React from "react";

// const page = () => {
//   return (
//     <div className=" py-14">
//       <div className="container">
//         <div className="relative">
//           <div className="h-[3px] w-full bg-accent z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//           <h2 className=" capitalize text-accent h2 w-fit bg-background relative z-10">
//             hot Coffee
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
import CategoriesCards from "@/app/components/cards/CategoriesCards";
import Cake from "@/app/assets/images/cake-2.png";

const getCategoriesList = async () => {
  try {
    const res = await fetch(
      "https://clients.echodigital.net/carabliss/get_categoriesnew5.php",
      {
        cache: "no-store", // Ensures fresh data on every request
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default async function Home() {
  // const categoriesList = [
  //   {
  //     id: 1,
  //     title: "You’re Brew-tiful, It’s True!",
  //     categories: [
  //       {
  //         id: 1,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 2,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 3,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "You’re Brew-tiful, It’s True!",
  //     categories: [
  //       {
  //         id: 1,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 2,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 3,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "You’re Brew-tiful, It’s True!",
  //     categories: [
  //       {
  //         id: 1,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 2,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //       {
  //         id: 3,
  //         category_name: "Hot Coffee",
  //         category_img: Cake,
  //       },
  //     ],
  //   },
  // ];

  const categoriesList = await getCategoriesList(); // Fetch data on the server

  return (
    <div className="">
      <div className="pt-14 pb-24 mobile:pb-14 mobile:pt-12 px-5 flex justify-center items-center">
        <div className="max-w-[660px]">
          <h3 className="font-arizonia text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Loaded Desserts For Every Craving
          </h3>
          <h1 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Menu
          </h1>
          <p className="p text-center text-[#837C74] mt-5">
            Crafted with premium ingredients and designed for sharing, our
            desserts are made to bring delight to every bite.
          </p>
        </div>
      </div>
      <div className="container px-5">
        <div className="mb-14 grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {categoriesList.length > 0 ? (
            categoriesList.map((item) => (
              <CategoriesCards item={item} key={item.id} />
            ))
          ) : (
            <p className="text-center text-red-500">No categories found.</p>
          )}
        </div>
        {/* {categoriesList.map((list) => (
          <div className="border-t border-accent" key={list.id}>
            <h2 className="text-accent font-kaisei text-[28px] mobile:text-[20px] my-8">
              {list.cat_name}
            </h2>
            <div className="mb-14 grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-1">
              {list.subcategories.length > 0 ? (
                list.subcategories.map((item) => (
                  <CategoriesCards item={item} key={item.subcat_id} />
                ))
              ) : (
                <p className="text-center text-red-500">No categories found.</p>
              )}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
