"use client";

import React, { useEffect, useRef } from "react";
import ProductCard from "@/app/components/cards/ProductCard";
import Image from "next/image";
import throttle from "lodash/throttle";

import DoubleProductCard from "../cards/DoubleProductCard";
import FeaturedProduct from "../cards/FeaturedProduct";

const CardsSectionsTesting = ({
  SubCategoriesAndProducts,
  setActiveCategory,
}) => {
  const categoryRefs = useRef({});
  const lastCategoryRef = useRef(null);

  useEffect(() => {
    const initialCategory = window.location.hash.replace("#", "").toLowerCase();

    if (initialCategory && categoryRefs.current[initialCategory]) {
      setActiveCategory(initialCategory);
      setTimeout(() => {
        categoryRefs.current[initialCategory].scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }, 300);
    }

    const handleScroll = () => {
      let mostVisibleCat = null;
      let minOffset = Infinity;

      Object.entries(categoryRefs.current).forEach(([subCatId, el]) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const elementHeight = rect.height;

          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, window.innerHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / elementHeight;

          const isInView = visibilityRatio >= 0;

          if (isInView && Math.abs(elementTop) <= minOffset) {
            minOffset = Math.abs(elementTop);
            mostVisibleCat = subCatId;
          }
        }
      });

      if (mostVisibleCat && mostVisibleCat !== lastCategoryRef.current) {
        lastCategoryRef.current = mostVisibleCat;
        console.log(mostVisibleCat);
        setActiveCategory(mostVisibleCat);
        window.history.replaceState(null, "", `#${mostVisibleCat}`);
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [setActiveCategory]);

  const sortedCategoriesList = SubCategoriesAndProducts.sort(
    (a, b) => a.cat_position - b.cat_position
  );

  return (
    <>
      {sortedCategoriesList?.length > 0 &&
        sortedCategoriesList.map((categoryObj, catIndex) => (
          <React.Fragment key={categoryObj?.cat_id}>
            <div key={categoryObj.cat_id}>
              <div
                className={`flex justify-center items-center overflow-hidden h-40 mobile:h-24 relative mb-6 ${
                  catIndex <= 1 ? "mt-10" : "mt-20"
                } mobile:mt-10`}
              >
                <div className="absolute left-0 top-0 w-full h-40 mobile:h-24 z-0 bg-background">
                  <Image
                    src={categoryObj.cat_image}
                    alt={categoryObj.cat_name}
                    width="1024"
                    height="1024"
                    className="w-full object-cover h-full object-center opacity-30"
                  />
                </div>
                <h1 className="font-bodoni text-[48px] mobile:text-[28px] text-center text-accent text-primary relative z-10">
                  {categoryObj.cat_name}
                </h1>
              </div>

              {categoryObj.sub_categories?.length > 0 &&
                [...categoryObj.sub_categories]
                  .sort((a, b) => a.position - b.position)
                  .map((subCategory) => {
                    const subCategoryId = subCategory?.sub_catname
                      ? subCategory.sub_catname
                          .replace(/[^\w\s-]/g, "")
                          .replace(/\s+/g, "-")
                          .toLowerCase()
                      : "default-id";

                    return (
                      <div
                        key={subCategory?.subcat_id}
                        id={subCategoryId}
                        ref={(el) => (categoryRefs.current[subCategoryId] = el)}
                      >
                        {subCategory.layout !== "single" && (
                          <h2 className="h2 text-accent pt-3 border-t border-accent mt-6">
                            {subCategory?.sub_catname}
                          </h2>
                        )}

                        {subCategory?.products?.length > 0 ? (
                          <>
                            {subCategory.layout === "normal" && (
                              <div className="grid grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-y-10 mobile:gap-y-5 gap-x-5 mt-5 mobile:mt-5">
                                {subCategory.products.map((product) => (
                                  <ProductCard
                                    product={product}
                                    key={product?.prod_id}
                                    servings={true}
                                  />
                                ))}
                              </div>
                            )}

                            {subCategory.layout === "doublePrice" &&
                              subCategory.products.map((product) => (
                                <DoubleProductCard
                                  product={product}
                                  key={product?.prod_id}
                                  servings={true}
                                  catOne={subCategory?.sub_singlename}
                                  catTwo={subCategory?.sub_doublename}
                                />
                              ))}

                            {subCategory.layout === "single" &&
                              subCategory.products.map((product) => (
                                <FeaturedProduct
                                  product={product}
                                  key={product?.prod_id}
                                />
                              ))}
                          </>
                        ) : (
                          <p key="no-products">No products found</p>
                        )}
                      </div>
                    );
                  })}
            </div>
          </React.Fragment>
        ))}
    </>
  );
};

export default CardsSectionsTesting;
