import React from "react";
import ProductCard from "@/app/components/cards/ProductCard";
import StckyCategoriesList from "@/app/components/stickyCategories/StckyCategoriesList";
import FixedCategoryList from "@/app/components/stickyCategories/FixedCategoryList";
import TabsPopup from "@/app/components/popups/TabsPopup";
import Image from "next/image";

import Ice1 from "@/app/assets/images/ice2.jpg";
import Ice2 from "@/app/assets/images/ice1.png";
import Waf from "@/app/assets/images/waffleee.png";
import { FaUserAlt } from "react-icons/fa";
import ProductDataTabs2 from "@/app/components/tabs/ProductDataTabs2";
import AddOnButton from "@/app/components/button/AddOnButton";

const getSubCategoriesWithProducts = async (cat_id) => {
  try {
    const res = await fetch(
      `https://clients.echodigital.net/carabliss/get_newProduct.php`,
      { cache: "no-store" } // Always fetch fresh data
    );

    if (!res.ok) throw new Error("Failed to fetch products");

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const getCategories = async () => {
  try {
    const res = await fetch(
      "https://clients.echodigital.net/carabliss/get_subcat5.php",
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

export default async function Menu({ params }) {
  const { id: cat_id } = params;

  const SubCategoriesAndProducts = await getSubCategoriesWithProducts(cat_id);
  const categories = await getCategories(); // Fetch data on the server

  console.log(SubCategoriesAndProducts);

  // if (!SubCategoriesAndProducts || !SubCategoriesAndProducts.sub_categories) {
  //   return <p>Loading...</p>; // Show loading text if data is missing
  // }

  return (
    <div className="pb-10 laptop:px-8 laptop:pb-56 mobile:pb-10  mobile:px-5">
      <div className="container relative">
        <StckyCategoriesList categories={categories} />
        <div className="tablet:pt-5 mobile:pt-0 relative ">
          {SubCategoriesAndProducts?.length > 0 &&
            SubCategoriesAndProducts.map((categoryObj, catIndex) => (
              <>
                {categoryObj?.cat_id == 7 ? (
                  <div className="mb-12">
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
                  </div>
                ) : (
                  <div key={categoryObj.cat_id}>
                    {/* Main Category Name */}

                    <div className="flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-10 mt-10 tablet:mt-0 mobile:mt-0   ">
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
                          // id={subCategory?.sub_catname
                          //   .replace(/[^\w\s-]/g, "")
                          //   .replace(/\s+/g, "-")
                          //   .toLowerCase()}
                          id={
                            subCategory?.sub_catname
                              ? subCategory.sub_catname
                                  .replace(/[^\w\s-]/g, "")
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()
                              : "default-id"
                          }
                        >
                          {/* Divider between subcategories (but not after the last one) */}
                          {/* {index < categoryObj.sub_categories.length - 1 && (
                        <div className="w-full h-[1px] bg-accent mt-12 mb-5"></div>
                      )} */}

                          {/* Subcategory Name */}
                          <h2 className="h2 text-accent pt-5 border-t border-accent mt-12">
                            {subCategory?.sub_catname}
                          </h2>
                          {subCategory?.sub_catname == "Waffles" ? (
                            <>
                              {subCategory?.products?.length > 0 ? (
                                subCategory.products.map((product) => (
                                  <div
                                    className="flex justify-between items-stretch gap-6 mb-12 mt-5 mobile:flex-col"
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
                                      <div className="">
                                        <h3 className="h4 mb-3 text-accent">
                                          {product.prod_name}
                                        </h3>
                                        <p className="font-ropa text-sm">
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
              </>
            ))}
        </div>
      </div>
      <TabsPopup />
      <FixedCategoryList categories={categories} />
    </div>
  );
}
