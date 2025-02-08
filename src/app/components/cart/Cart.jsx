"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="fixed top-0 left-0 bg-black p-10 z-30">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.prod_id}
            style={{ borderBottom: "1px solid #ddd", padding: "10px" }}
          >
            <h3>{item.prod_name}</h3>
            <p>Price: Rs {item.prod_price}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() => updateQuantity(item.prod_id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateQuantity(item.prod_id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeFromCart(item.prod_id)}>Remove</button>

            {item.toppings.length > 0 && (
              <div>
                <h4>Toppings:</h4>
                {item.toppings.map((top) => (
                  <p key={top.topping_id}>
                    {top.topping_name} (Rs {top.topping_price}) x {top.quantity}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
