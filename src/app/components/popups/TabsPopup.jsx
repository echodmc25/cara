"use client";
import { usePopup } from "@/app/context/PopContext";

const TabsPopup = ({ toppings }) => {
  const { listOpen, setListOpen } = usePopup();

  return (
    <div
      className={`fixed left-0 ${
        listOpen ? "-bottom-0 opacity-1" : "-bottom-[200vh]"
      } duration-500 h-full bg-[#00000090] z-30 w-full overflow-hidden`}
      onClick={() => setListOpen(false)}
    >
      <div className="container">
        <div className="flex items-end justify-end h-screen ">
          <div className="bg-black w-full h-[70vh] mobile:h-[90vh] py-10 px-20 mobile:px-5 overflow-y-auto pb-10">
        <h2 className="text-accent page-heading text-center">ADD ONS</h2>
            {toppings && toppings.length > 0 ? (
              toppings.map((category, index) => (
                <div key={index} className="mt-10">
                  
                  <div className="relative">
                    <div className="w-full h-1 bg-accent absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <h2 className="text-center h1 bg-black relative z-10 w-fit mx-auto px-3">
                      {category.topping_cat}
                    </h2>
                  </div>

                  
                  <div className="mt-3">
                    {category.items.map((item) => (
                      <div
                        key={item.topping_id}
                        className="flex justify-between items-center border-b border-white/30 py-2"
                      >
                        <h3 className="text-lg font-semibold">
                          {item.topping_name}
                        </h3>
                        <p className="font-Raleway text-lg font-semibold">
                          Rs: {item.topping_price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No toppings available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPopup;
