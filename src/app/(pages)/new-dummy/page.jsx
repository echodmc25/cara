import React from "react";
import StckyCategoriesList from "@/app/components/stickyCategories/StckyCategoriesList";
import FixedCategoryList from "@/app/components/stickyCategories/FixedCategoryList";
import TabsPopup from "@/app/components/popups/TabsPopup";

import CardsSectionsMain from "@/app/components/section/CardsSectionsMain";

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

  const sortedCategoriesList = categories.sort(
    (a, b) => a.position - b.position
  );

  console.log(SubCategoriesAndProducts);

  return (
    <div className="pb-10 laptop:px-8 laptop:pb-56 tablet:pb-10 mobile:pb-10  mobile:px-5">
      <div className="container relative">
        <StckyCategoriesList categories={sortedCategoriesList} />
        <div className="relative">
          <CardsSectionsMain
            SubCategoriesAndProducts={SubCategoriesAndProducts}
          />
        </div>
      </div>
      <TabsPopup />
      <FixedCategoryList categories={sortedCategoriesList} />
    </div>
  );
}
