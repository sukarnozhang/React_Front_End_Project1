// App.js

import styles from "./allCssStyling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ShopContextProvider from "./context/shopcontext";
import Payment from "./components/Payment.js";
import Category from "./components/Category";
import Ingredients from "./recipelist/Ingredients";
import Recipe from "./recipelist/Recipe";
import Pages from "./recipelist/Pages";
import Logo from "./logo";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <Logo /> */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/category" element={<Category />} />
            <Route path="/includeIngredients/:type" element={<Ingredients />} />
            <Route path="/recipe/:name" element={<Recipe />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
