import React from "react";
import ProductCard from "@/app/components/cards/ProductCard";
import StckyCategoriesList from "@/app/components/stickyCategories/StckyCategoriesList";
import FixedCategoryList from "@/app/components/stickyCategories/FixedCategoryList";

const getSubCategoriesWithProducts = async (cat_id) => {
  try {
    const res = await fetch(
      `https://clients.echodigital.net/carabliss/get_productsnew2.php`,
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
      "https://clients.echodigital.net/carabliss/get_subcat3.php",
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
        <div className="tablet:pt-5 mobile:pt-0">
          {SubCategoriesAndProducts?.length > 0 &&
            SubCategoriesAndProducts.map((categoryObj, catIndex) => (
              <div key={categoryObj.cat_id}>
                {/* Main Category Name */}
                {/* <h1 className="h1 text-primary">{categoryObj.cat_name}</h1> */}

                {/* Now, map over subcategories */}
                {categoryObj.sub_categories?.length > 0 &&
                  categoryObj.sub_categories.map((subCategory, index) => (
                    <div
                      key={subCategory?.subcat_id}
                      id={subCategory?.sub_catname
                        .replace(/[^\w\s-]/g, "")
                        .replace(/\s+/g, "-")
                        .toLowerCase()}
                    >
                      {/* Subcategory Name */}
                      <h2 className="h2 text-accent">
                        {subCategory?.sub_catname}
                      </h2>

                      {/* Products Grid */}
                      <div className="grid grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 gap-y-10 gap-x-5 mt-5 mobile:mt-5">
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

                      {/* Divider between subcategories (but not after the last one) */}
                      {index < categoryObj.sub_categories.length - 1 && (
                        <div className="w-full h-[1px] bg-accent mt-12 mb-5"></div>
                      )}
                    </div>
                  ))}

                {/* Divider between categories (but not after the last one) */}
                {catIndex < SubCategoriesAndProducts.length - 1 && (
                  <div className="w-full h-[1px] bg-accent mt-12 mb-5"></div>
                )}
              </div>
            ))}
        </div>
      </div>

      <FixedCategoryList categories={categories} />
    </div>
  );
}
