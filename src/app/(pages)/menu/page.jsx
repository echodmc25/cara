import CategoriesCards from "@/app/components/cards/CategoriesCards";


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
 
  const categoriesList = await getCategoriesList(); // Fetch data on the server

  const sortedCategoriesList = categoriesList.sort(
    (a, b) => a.position - b.position
  );

  return (
    <div className="">
      <div className="pt-14 pb-24 mobile:pb-14 mobile:pt-12 px-5 flex justify-center items-center">
        <div className="max-w-[660px]">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Why should happiness come with a boarding pass?
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
        <div className="mb-14 grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {sortedCategoriesList.length > 0 ? (
            sortedCategoriesList.map((item) => (
              <CategoriesCards item={item} key={item.id} />
            ))
          ) : (
            <p className="text-center text-red-500">No categories found.</p>
          )}
        </div>
   
      </div>
    </div>
  );
}
