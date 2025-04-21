import CategoriesCards from "@/app/components/cards/CategoriesCards";
import VideoCardsSlider from "@/app/components/slides/VideoCardsSlider";

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

const getFeaturedVideos = async () => {
  try {
    const res = await fetch(
      "https://admin.carabliss.pk/get_featuredvideo.php",
      {
        cache: "no-store", // Ensures fresh data on every request
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Featured Videos");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching Featured Videos:", error);
    return [];
  }
};

export default async function Home() {
  const categoriesList = await getCategoriesList();
  const FeaturedVideos = await getFeaturedVideos();

  const sortedCategoriesList = categoriesList.sort(
    (a, b) => a.position - b.position
  );

  const VideoCardsData = [
    {
      productName: "Chocolate Sushi",
      productVid: "/videos/chocolate-suchi.mp4",
      // productServings: "2-3 & 4-5",
      // productDes: "",
      // productPrice: "1650 - 2850",
    },
    {
      productName: "Dubais Viral Chocolate Waffle",
      productVid: "/videos/viral-choco-waffle.mp4",
      // productServings: "2-3 & 4-5",
      // productDes: "",
      // productPrice: "2950 - 4250",
    },
    {
      productName: "Ferrero Rocher Waffle",
      productVid: "/videos/ferrero-waffle.mp4",
      // productServings: "2-3 & 4-5",
      // productDes: "",
      // productPrice: "2950 - 4250",
    },
    {
      productName: "KitKat Shake",
      productVid: "/videos/kitkat-shake.mp4",
      // productServings: "2-3",
      // productDes: "",
      // productPrice: "2350",
    },
    {
      productName: "Raffaello Waffle",
      productVid: "/videos/raffello-waffle.mp4",
      // productServings: "2-3 & 4-5",
      // productDes: "",
      // productPrice: "2950 - 4250",
    },
    {
      productName: "Signature Hot Chocolate",
      productVid: "/videos/signature-chocolate.mp4",
      // productServings: "1 & 2-3",
      // productDes: "",
      // productPrice: "1350 - 1950",
    },
    {
      productName: "Skillet Cookie with Vanilla Gelato",
      productVid: "/videos/skillet-cookie.mp4",
      // productServings: "2-3",
      // productDes: "",
      // productPrice: "2450",
    },
  ];

  return (
    <div className="">
      {/* <div className="pt-14 pb-24 mobile:pb-14 mobile:pt-12 px-5 flex justify-center items-center">
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
      </div> */}

      <div className="py-20  mobile:pb-20 mobile:pt-12 categories-list-carousel container">
        <div className="max-w-[660px] mx-auto mb-10 px-5">
          <h3 className="font-bodoni text-[36px] mobile:text-[24px] leading-tight mb-2 text-mahroon text-center">
            Why should happiness come with a boarding pass?
          </h3>
          <h2 className="page-heading text-[--accent] leading-[64px] uppercase text-center">
            Menu
          </h2>
          <p className="p text-center text-[#837C74] mt-5">
            Crafted with premium ingredients and designed for sharing, our
            desserts are made to bring delight to every bite.
          </p>
        </div>
        <div className="tablet:mx-5">
          <VideoCardsSlider categorySlides={FeaturedVideos} />
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
