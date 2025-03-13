import React from "react";
import Menu from "@/app/components/menuComponent/Menu";

const getSubCategoriesWithProducts = async () => {
  try {
    const res = await fetch(
      `https://admin.carabliss.pk/get_newProductLatest.php`,
      { cache: "no-store" } 
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
      "https://admin.carabliss.pk/get_subcat5.php",
      {
        cache: "no-store", 
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

const getToppings = async () => {
  try {
    const res = await fetch(
      "https://admin.carabliss.pk/get_toppings.php",
      {
        cache: "no-store", 
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


export default async function MenuPage() {
  
  const SubCategoriesAndProducts = await getSubCategoriesWithProducts();
  const categories = await getCategories(); 
  const Toppings = await getToppings(); 

  return (
    <Menu
    categories={categories}
    SubCategoriesAndProducts={SubCategoriesAndProducts}
    Toppings={Toppings}
  />
  );
}
