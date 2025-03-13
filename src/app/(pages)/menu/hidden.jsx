import CategoriesCards from "@/app/components/cards/CategoriesCards";
import Cake from "@/app/assets/images/cake-2.png";

const getCategoriesList = async () => {
  try {
    const res = await fetch(
      "https://admin.carabliss.pk/get_categoriesnew5.php",
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
        {/* <div className="mb-14 grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {categories.length > 0 ? (
            categories.map((item) => (
              <CategoriesCards item={item} key={item.id} />
            ))
          ) : (
            <p className="text-center text-red-500">No categories found.</p>
          )}
        </div> */}
        {categoriesList.map((list) => (
          <div className="border-t border-accent" key={list.id}>
            <h2 className="text-accent font-kaisei text-[28px] mobile:text-[20px] my-8">
              {list.cat_name}
            </h2>
            <div className="mb-14 grid grid-cols-4 gap-5 tablet:grid-cols-3 mobile:grid-cols-1">
              {list.subcategories.length > 0 ? (
                list.subcategories.map((item) => (
                  <CategoriesCards item={item} key={item.subcat_id} />
                ))
              ) : (
                <p className="text-center text-red-500">No categories found.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
