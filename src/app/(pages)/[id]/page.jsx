import React from "react";
import Pi1 from "@/app/assets/images/pp1.png";
import ProductDataTab from "@/app/components/tabs/ProductDataTab";
import Link from "next/link";
import ProductCard from "@/app/components/cards/ProductCard";
import BackButton from "@/app/components/button/BackButton";
import AddToCartButton from "@/app/components/button/AddToCartButton";
import ProductPageSlider from "@/app/components/slides/ProductPageSlider";
import FixedCategoryListWithOutImage from "@/app/components/stickyCategories/FixedCategoryListWithOutImage";
import FixedCategoryListWithImage from "@/app/components/stickyCategories/FixedCategoryListWithImage";

const getSingleProduct = async (pro_id) => {
  try {
    const res = await fetch(
      `https://clients.echodigital.net/carabliss/get_singleproduct.php?prod_id=${pro_id}`,
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

export default async function Page({ params }) {
  const { id: pro_id } = params;

  const product = await getSingleProduct(pro_id);
  const categories = await getCategories(); // Fetch data on the server

  const products = [
    {
      productsId: 201,
      productImage: Pi1,
      productName: "Latte",
      price: "650",
    },
    {
      productsId: 202,
      productImage: Pi1,
      productName: "Americano",
      price: "550",
    },
    {
      productsId: 203,
      productImage: Pi1,
      productName: "Flat White",
      price: "700",
    },
    {
      productsId: 204,
      productImage: Pi1,
      productName: "Macchiato",
      price: "750",
    },
    {
      productsId: 205,
      productImage: Pi1,
      productName: "Mocha",
      price: "800",
    },
    {
      productsId: 206,
      productImage: Pi1,
      productName: "Classic Hot Chocolate",
      price: "500",
    },
    {
      productsId: 207,
      productImage: Pi1,
      productName: "Mint Hot Chocolate",
      price: "550",
    },
    {
      productsId: 208,
      productImage: Pi1,
      productName: "Salted Caramel Hot Chocolate",
      price: "600",
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto relative">
        <div className="absolute top-0 left-0 w-full z-10 py-8 laptop:px-5 mobile:px-5">
          <div className="container">
            <div className="flex justify-between items-center">
              <BackButton />
              <AddToCartButton />
            </div>
          </div>
        </div>

        <ProductPageSlider images={product?.product_images} />
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div className="py-8 pb-44 laptop:px-12 mobile:px-5">
        <div className="container">
          <div className="flex justify-between mobile:flex-col">
            <div className="max-w-[605px]">
              <h1 className="h1 text-accent">{product?.prod_name}</h1>
              <p className="font-ropa text-textLight mt-5 p">
                {product?.prod_desc}
              </p>
            </div>
            <div className="border-l mobile:border-l-0 mobile:border-t mobile:ml-0 mobile:mt-5 mobile:pl-0 mobile:pt-5 border-[#3F3F3F] ml-5 min-w-40 pl-5">
              <p className="font-Raleway font-bold text-[40px] text-right mobile:text-left">
                Rs:{product?.prod_price}
              </p>
              <p className="text-right font-ropa text-textLight mt-2 p mobile:text-left mobile:mt-0">
                {product?.prod_serving}{" "}
                {product?.prod_serving > 1 ? "Persons" : "Person"} Serving
              </p>
            </div>
          </div>
          <div className="mt-14">
            <ProductDataTab tabsData={product?.toppings} />
          </div>
          <div className="mt-14">
            <div className="flex justify-between items-end">
              <h2 className="h2 text-accent">You May Also Like</h2>
              <Link
                href={"/categories"}
                className="text-xl font-Raleway font-bold text-textLight mobile:text-base"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-4 mobile:grid-cols-2 gap-5 mt-5">
              {product.related_products.map((product) => (
                <ProductCard product={product} key={product.productsId} />
              ))}
            </div>
          </div>
        </div>
        <FixedCategoryListWithOutImage categories={categories} />
        <FixedCategoryListWithImage categories={categories} />
      </div>
    </>
  );
}
