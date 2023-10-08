// NavBar.js

import { Link } from "react-router-dom";
import { House, ShoppingCart } from "phosphor-react";
import styles from "./Navbar.modules.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> 
          <House size={32} /> 
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar