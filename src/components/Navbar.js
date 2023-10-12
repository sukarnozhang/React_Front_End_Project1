// NavBar.js

import { Link } from "react-router-dom";
import { House, ShoppingCart } from "phosphor-react";
import styles from "../allCssStyling/Navbar.modules.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <House
            size={32}
            style={{ display: "flex", justifyContent: "flex-end" }}
          />
        </Link>
        <Link to="/cart">
          <ShoppingCart
            size={32}
            style={{ display: "flex", justifyContent: "flex-end" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
