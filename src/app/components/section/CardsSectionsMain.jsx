"use client";
import React, { useEffect, useRef } from "react";
import ProductCard from "@/app/components/cards/ProductCard";
import Image from "next/image";

import Ice1 from "@/app/assets/images/Ice2.png";
import Ice2 from "@/app/assets/images/ice1.png";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ProductDataTabs2 from "@/app/components/tabs/ProductDataTabs2";
import AddOnButton from "@/app/components/button/AddOnButton";

const CardsSectionsMain = ({ SubCategoriesAndProducts }) => {
  //   const router = useRouter();
  //   const subcategoryRefs = useRef([]);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             const id = entry.target.id;
  //             if (id) {
  //               router.replace(`#${id}`);
  //             }
  //           }
  //         });
  //       },
  //       {
  //         root: null, // Use the viewport as the root
  //         rootMargin: "0px",
  //         threshold: 0.5, // Trigger when at least 50% of the element is visible
  //       }
  //     );

  //     // Observe each subcategory
  //     subcategoryRefs.current.forEach((ref) => {
  //       if (ref) observer.observe(ref);
  //     });

  //     // Cleanup observer on unmount
  //     return () => {
  //       subcategoryRefs.current.forEach((ref) => {
  //         if (ref) observer.unobserve(ref);
  //       });
  //     };
  //   }, []);

  return (
    <>
      {SubCategoriesAndProducts?.length > 0 &&
        SubCategoriesAndProducts.map((categoryObj, catIndex) => (
          <React.Fragment key={categoryObj?.cat_id}>
            {categoryObj?.cat_id == 7 ? (
              <div className="mb-12" key={categoryObj?.cat_id}>
                <div className="flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-6 mt-20  mobile:mt-0 ">
                  <div className="absolute left-0 top-0 w-full h-40 mobile:h-24 z-0 bg-background">
                    <Image
                      src={Ice1}
                      alt={"ice cream"}
                      width="1024"
                      height="1024"
                      className="w-full object-cover h-full object-center opacity-55"
                    />
                  </div>
                  <h1 className="font-arizonia text-[48px] mobile:text-[28px] text-center text-accent text-primary relative z-10">
                    Unbelievably In Love With Gelato!
                  </h1>
                </div>
                <div
                  className="flex justify-between items-center border-t border-accent pt-3"
                  id="make-your-own-bowl-3-scoops-2-sauces-2-toppings"
                  //   ref={(el) => (subcategoryRefs.current[index] = el)}
                >
                  <div>
                    <h2 className="font-kaisei text-[28px] text-accent">
                      Make your own bowl
                    </h2>
                    <p className="text-white/40 p">
                      (3 scoops + 2 sauces + 2 toppings)
                    </p>
                  </div>
                  <div>
                    <h2 className="font-Raleway text-xl font-bold text-right">
                      Rs. 1950
                    </h2>
                    <div className="flex gap-2  items-center justify-end mobile:gap-2 mt-1">
                      <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                        Servings:
                      </h3>
                      <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                        <FaUserAlt className="text-accent text-[10px] " />
                        <FaUserAlt className="text-accent text-[10px] " />
                        <FaUserAlt className="text-accent text-[10px] " />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-8">
                  <Image
                    src={Ice2}
                    alt="icen cream"
                    height={2000}
                    width={2000}
                    className=""
                  />
                </div>
                <div className="tabs">
                  <ProductDataTabs2 />
                </div>
              </div>
            ) : (
              <div key={categoryObj.cat_id}>
                {/* Main Category Name */}

                <div
                  className={`flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-6 ${
                    categoryObj?.cat_id <= 1 ? "mt-10" : "mt-20"
                  } mobile:mt-6   `}
                >
                  <div className="absolute left-0 top-0 w-full h-40 mobile:h-24 z-0 bg-background">
                    <Image
                      src={categoryObj.cat_image}
                      alt={categoryObj.cat_name}
                      width="1024"
                      height="1024"
                      className="w-full object-cover h-full object-center opacity-55"
                    />
                  </div>
                  <h1 className="font-arizonia text-[48px] mobile:text-[28px] text-center text-accent text-primary relative z-10">
                    {categoryObj.cat_name}
                  </h1>
                </div>

                {/* Now, map over subcategories */}
                {categoryObj.sub_categories?.length > 0 &&
                  categoryObj.sub_categories.map((subCategory, index) => (
                    <div
                      key={subCategory?.subcat_id}
                      id={
                        subCategory?.sub_catname
                          ? subCategory.sub_catname
                              .replace(/[^\w\s-]/g, "")
                              .replace(/\s+/g, "-")
                              .toLowerCase()
                          : "default-id"
                      }
                      //   ref={(el) => (subcategoryRefs.current[index] = el)}
                    >
                      {/* Divider between subcategories (but not after the last one) */}
                      {/* {index < categoryObj.sub_categories.length - 1 && (
                        <div className="w-full h-[1px] bg-accent mt-12 mb-5"></div>
                      )} */}

                      {/* Subcategory Name */}
                      <h2 className="h2 text-accent pt-3 border-t border-accent mt-6">
                        {subCategory?.sub_catname}
                      </h2>
                      {subCategory?.sub_catname == "Waffles" ? (
                        <>
                          {subCategory?.products?.length > 0 ? (
                            subCategory.products.map((product) => (
                              <div
                                className="flex justify-between items-stretch gap-6 mb-12 mt-5 mobile:flex-col "
                                key={product.prod_id}
                              >
                                <div className="max-w-1/2 w-full p-aspect">
                                  <Image
                                    src={product?.product_images?.[0]?.src}
                                    alt={product.prod_name}
                                    height={1024}
                                    width={1024}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="w-full min-h-full max-w-1/2 flex flex-col justify-between items-start">
                                  <div className=" w-full">
                                    <h3 className="h4 mb-3 text-accent">
                                      {product.prod_name}
                                    </h3>
                                    <p className="font-ropa text-base text-white/50  leading-5">
                                      {product?.prod_desc}
                                    </p>
                                    <div className="flex justify-between items-start gap-5 my-7">
                                      <div>
                                        <h2 className="h4  text-accent">
                                          Single Stack
                                        </h2>
                                        <p className="font-Raleway text-lg font-bold">
                                          Rs. {product.prod_price}
                                        </p>
                                        <div className="flex gap-2  items-center justify-end mobile:gap-2 mt-1">
                                          <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                                            Servings:
                                          </h3>
                                          <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                                            <FaUserAlt className="text-accent text-[10px] " />
                                            <FaUserAlt className="text-accent text-[10px] " />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <h2 className="h4 text-accent">
                                          Double Stack
                                        </h2>
                                        <p className="font-Raleway text-lg font-bold">
                                          Rs. {product.prod_doublePrice}
                                        </p>
                                        <div className="flex gap-2  items-center justify-end mobile:gap-2 mt-1">
                                          <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                                            Servings:
                                          </h3>
                                          <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                                            <FaUserAlt className="text-accent text-[10px] " />
                                            <FaUserAlt className="text-accent text-[10px] " />
                                            <FaUserAlt className="text-accent text-[10px] " />
                                          </div>
                                        </div>
                                      </div>
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="">
                                    <AddOnButton />
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>No products found</p>
                          )}
                        </>
                      ) : (
                        <div className="grid grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-y-10 gap-x-5 mt-5 mobile:mt-5">
                          {subCategory?.products?.length > 0 ? (
                            subCategory.products.map((product) => (
                              <ProductCard
                                product={product}
                                key={product?.prod_id}
                                servings={true}
                              />
                            ))
                          ) : (
                            <p>No products found</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                {/* Divider between categories (but not after the last one) */}
                {/* {catIndex < SubCategoriesAndProducts.length - 1 && (
                      <div className="w-full h-[1px] bg-accent mt-12 mb-5"></div>
                    )} */}

                {/* <div className="122">
                  <div className="flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-10 mt-10 tablet:mt-0 mobile:mt-0   ">
                    <div className="absolute left-0 top-0 w-full h-40 mobile:h-24 z-0 bg-background">
                      <Image
                        src={Ice1}
                        alt={"ice cream"}
                        width="1024"
                        height="1024"
                        className="w-full object-cover h-full object-center opacity-55"
                      />
                    </div>
                    <h1 className="font-arizonia text-[48px] mobile:text-[28px] text-center text-accent text-primary relative z-10">
                      Unbelievably In Love With Gelato!
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="font-kaisei text-[28px] text-accent">
                        Make your own bowl
                      </h2>
                      <p className="text-white/40 p">
                        (3 scoops + 2 sauces + 2 toppings)
                      </p>
                    </div>
                    <div>
                      <h2 className="font-Raleway text-xl font-bold text-right">
                        Rs. 1950
                      </h2>
                      <div className="flex gap-2  items-center justify-end mobile:gap-2 mt-1">
                        <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                          Servings:
                        </h3>
                        <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                          <FaUserAlt className="text-accent text-[10px] " />
                          <FaUserAlt className="text-accent text-[10px] " />
                          <FaUserAlt className="text-accent text-[10px] " />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-10">
                    <Image
                      src={Ice2}
                      alt="icen cream"
                      height={2000}
                      width={2000}
                      className=""
                    />
                  </div>
                  <div className="tabs">
                    <ProductDataTabs2 />
                  </div>
                </div> */}
              </div>
            )}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* <div className="122">
                  <div className="flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-10 mt-10 tablet:mt-0 mobile:mt-0   ">
                    <div className="absolute left-0 top-0 w-full h-40 mobile:h-24 z-0 bg-background">
                      <Image
                        src={Ice1}
                        alt={"ice cream"}
                        width="1024"
                        height="1024"
                        className="w-full object-cover h-full object-center opacity-55"
                      />
                    </div>
                    <h1 className="font-arizonia text-[48px] mobile:text-[28px] text-center text-accent text-primary relative z-10">
                      Unbelievably In Love With Gelato!
                    </h1>
                  </div>
                  <div className="">
                    <h2>Waffles</h2>
                   
                  </div>
                </div> */}
          </React.Fragment>
        ))}
    </>
  );
};

export default CardsSectionsMain;
