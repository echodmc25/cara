import CategoriesCards from "@/app/components/cards/CategoriesCards";
import Cake from "@/app/assets/images/cake-2.png";

export default async function Home() {
  const categoriesList = [
    {
      id: 1,
      title: "You’re Brew-tiful, It’s True!",
      categories: [
        {
          id: 1,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 2,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 3,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
      ],
    },
    {
      id: 2,
      title: "You’re Brew-tiful, It’s True!",
      categories: [
        {
          id: 1,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 2,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 3,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
      ],
    },
    {
      id: 3,
      title: "You’re Brew-tiful, It’s True!",
      categories: [
        {
          id: 1,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 2,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
        {
          id: 3,
          category_name: "Hot Coffee",
          category_img: Cake,
        },
      ],
    },
  ];

  return (
    <div className="">
      <div className="pt-14 pb-24 mobile:pb-14 mobile:pt-12 px-5 flex justify-center items-center">
        <div className="max-w-[660px]">
          <h3 className="font-arizonia text-[36px] text-mahroon text-center">
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
            <h2 className="text-accent font-kaisei text-[32px] my-8">
              {list.title}
            </h2>
            <div className="mb-14 grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-1">
              {list.categories.length > 0 ? (
                list.categories.map((item) => (
                  <CategoriesCards item={item} key={item.id} />
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
