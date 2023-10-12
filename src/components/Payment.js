// Payment.js

import { useState } from "react";
import PayPal from "./PayPal";
import styles from "../allCssStyling/Payment.module.css";

function Payment() {
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="payment">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Click to Payment
        </button>
      )}
    </div>
  );
}

export default Payment;
