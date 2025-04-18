"use client";

import React, { useContext, useEffect, useState } from "react";
import StckyCategoriesList from "@/app/components/stickyCategories/StckyCategoriesList";
import FixedCategoryList from "@/app/components/stickyCategories/FixedCategoryList";
import TabsPopup from "@/app/components/popups/TabsPopup";
import CardsSectionsTesting from "@/app/components/section/CardSectionTesting";
import { PopupProvider, usePopup } from "@/app/context/PopContext";

export default function Menu({
  categories,
  Toppings,
  SubCategoriesAndProducts,
}) {
  const sortedCategoriesList = categories.sort(
    (a, b) => a.position - b.position
  );

  const { productId } = usePopup();
  const [activeCategory, setActiveCategory] = useState("");

  const [filteredTopping, setFilteredTopping] = useState([]);

  useEffect(() => {
    if (productId && Toppings[productId]) {
      setFilteredTopping(Toppings[productId]);
    } else {
      setFilteredTopping([]);
    }
  }, [productId]);

  return (
    <div className="pb-10 laptop:px-8 laptop:pb-56 tablet:pb-10 mobile:pb-10  mobile:px-5">
      <div className="container relative">
        <StckyCategoriesList
          categories={sortedCategoriesList}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="relative">
          <CardsSectionsTesting
            SubCategoriesAndProducts={SubCategoriesAndProducts}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>
      <TabsPopup toppings={filteredTopping} />
      <FixedCategoryList
        categories={sortedCategoriesList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}
