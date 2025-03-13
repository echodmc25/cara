import React from "react";
import ProductDataTabs2 from "../tabs/ProductDataTabs2";
import Image from "next/image";

const FeaturedProduct = ({ product }) => {
  if (!product) return null;

  return (
    <>
      <div className="flex justify-between items-center border-t border-accent pt-3">
        <div>
          <h2 className="font-kaisei text-[28px] text-accent">
            {product.prod_name}
          </h2>
          <p className="text-white/40 p">{product.prod_desc}</p>
        </div>
        <div>
          <h2 className="font-Raleway text-xl font-bold text-right">
            Rs. {product.prod_price}
          </h2>
          <div className="flex gap-2 items-center justify-end mobile:gap-2 mt-1">
            <h3 className="text-white/50 text-md mobile:text-base font-ropa">
              Servings:
            </h3>
            <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
              <p className="text-[14px] text-accent font-bold font-ropa">
                {product?.prod_serving}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="mt-8">
        {product.product_images?.length > 0 ? (
          <Image
            src={product.product_images[0].src}
            alt={product.prod_name}
            height={2000}
            width={2000}
            className="aspect-video object-cover"
          />
        ) : (
          <p className="text-white/50">No Image Available</p>
        )}
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <ProductDataTabs2 flavorCategories={product.flavor_categories} />
      </div>
    </>
  );
};

export default FeaturedProduct;
