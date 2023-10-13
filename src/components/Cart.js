// Cart.jsss

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../DummyList";
import styles from "../allCssStyling/Cart.modules.css";
import { ShopContext } from "../context/shopcontext";
import CartItem from "./CartItems";
//import Receipe from "./Receipe";      //YaoRong code

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
          <button onClick={() => navigate("/payment")}> Checkout </button>
        </div>
      ) : (
        <h1>Shopping Cart is Empty</h1>
        // <Receipe />  //YaoRong code
      )}
    </div>
  );
}

//
export default Cart;
