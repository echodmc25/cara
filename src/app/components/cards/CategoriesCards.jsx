import Image from "next/image";
import Link from "next/link";

const CategoriesCards = ({ item }) => {
  const categorySlug = (item?.category_name).toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/categories#${categorySlug}`}>
      <div className="w-full relative p-5 aspect-square flex justify-start items-end">
        <div className="overlay absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={item?.category_img || "/placeholder.jpg"}
            width={1000}
            height={1000}
            alt={item?.category_name || "Category"}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-kaisei text-[--accent] text-[24px] z-20 line-clamp-1">
          {item?.category_name || "Unknown Category"}
        </h3>
      </div>
    </Link>
  );
};

export default CategoriesCards;
