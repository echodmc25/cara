"use client";
import { usePopup } from "@/app/context/PopContext";

// Sample Data
const menuData = {
  chocolates: [
    { name: "Snickers", price: 350 },
    { name: "Ferrero", price: 250 },
    { name: "Kitkat (2 sticks)", price: 300 },
    { name: "Kinder", price: 300 },
    { name: "Lotus (2 biscuits)", price: 250 },
    { name: "Oreo (4 biscuits)", price: 150 },
    { name: "Raffaello", price: 250 },
    { name: "Bounty", price: 320 },
    { name: "Dark Lindt Chocolate", price: 650 },
    { name: "Milk Lindt Chocolate", price: 550 },
    { name: "White Lindt Chocolate", price: 550 },
    { name: "Twix", price: 350 },
    { name: "Mars", price: 350 },
    { name: "Toblerone", price: 350 },
  ],
  sauces: [
    { name: "Hot Dark Lindt Chocolate", price: 450 },
    { name: "Hot Milk Lindt Chocolate", price: 450 },
    { name: "Hot White Lindt Chocolate", price: 450 },
    { name: "Dark Lindt Chocolate", price: 450 },
    { name: "Milk Lindt Chocolate", price: 450 },
    { name: "White Lindt Chocolate", price: 450 },
    { name: "Caramel", price: 100 },
    { name: "Lotus", price: 200 },
    { name: "Hot Fudge", price: 150 },
    { name: "Nutella", price: 250 },
    { name: "Strawberry", price: 150 },
    { name: "Pistachio", price: 150 },
  ],
  toppings: [
    { name: "Callebaut Chocolate Chip", price: 200 },
    { name: "Callebaut White Chocolate Chip", price: 200 },
    { name: "Sprinkles", price: 50 },
    { name: "M&Ms", price: 100 },
    { name: "Brownie", price: 100 },
    { name: "Oreo Crumbs", price: 50 },
    { name: "Roasted Pistachios", price: 50 },
    { name: "Roasted Peanuts", price: 50 },
    { name: "Ajwa Dates", price: 350 },
    { name: "Coconut Shavings", price: 50 },
  ],
  gelatos: [
    { name: "Belgian Chocolate", price: 600 },
    { name: "Malt Brownie", price: 600 },
    { name: "French Vanilla", price: 600 },
    { name: "Coconut", price: 600 },
    { name: "Ferrero Rocher", price: 600 },
    { name: "Snickers", price: 600 },
    { name: "Strawberry Yogurt", price: 600 },
    { name: "Cookies & Cream", price: 600 },
    { name: "Lotus", price: 600 },
    { name: "Salted Caramel", price: 600 },
    { name: "White Chocolate with Raspberry", price: 600 },
    { name: "Berrylicious", price: 600 },
    { name: "Tiramisu", price: 600 },
    { name: "Pistachio", price: 600 },
    { name: "Bubble Gum", price: 600 },
    { name: "Cotton Candy", price: 600 },
  ],
};

const TabsPopup = () => {
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
          <div className="bg-black w-full h-[70vh] mobile:h-[90vh] py-10 px-20 mobile:px-5 overflow-y-auto pb-5">
            <div className="relative">
              <div className="w-full h-1 bg-accent absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-center h1 bg-black relative z-10 w-fit mx-auto px-3">
                Chocolates
              </h2>
            </div>
            <div className="mt-3">
              {menuData.chocolates.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/30 py-2"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="font-Raleway text-lg font-semibold">
                    Rs: {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-10">
              <div className="w-full h-1 bg-accent absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-center h1 bg-black relative z-10 w-fit mx-auto px-3">
                Gelatos
              </h2>
            </div>
            <div className="mt-3">
              {menuData.gelatos.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/30 py-2"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="font-Raleway text-lg font-semibold">
                    Rs: {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-10">
              <div className="w-full h-1 bg-accent absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-center h1 bg-black relative z-10 w-fit mx-auto px-3">
                Toppings
              </h2>
            </div>
            <div className="mt-3">
              {menuData.toppings.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/30 py-2"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="font-Raleway text-lg font-semibold">
                    Rs: {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-10">
              <div className="w-full h-1 bg-accent absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-center h1 bg-black relative z-10 w-fit mx-auto px-3">
                Sauces
              </h2>
            </div>
            <div className="mt-3 mb-5">
              {menuData.sauces.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/30 py-2"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="font-Raleway text-lg font-semibold">
                    Rs: {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPopup;
