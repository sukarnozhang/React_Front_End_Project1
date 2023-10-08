// Product.js

import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";

function Product(props) {
  const { id, item, price, itemIMG } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={itemIMG} />     
      <div className="description">
        <p>
          <b>{item}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>      
    </div>
  );
};

export default Product
