// Cart.js

import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import PRODUCTS from "../DummyList";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItems";
import styles from "../allCssStyling/Cart.modules.css";

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
