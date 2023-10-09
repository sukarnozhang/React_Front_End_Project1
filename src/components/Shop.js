// Shop.js

//import { PRODUCTS }  from "../DummyList";
//import { ProductList }  from "../components/ProductList";
import Product from "./Product";
import styles from "../allCssStyling/Shop.modules.css";
//import ProductList from './ProductList'
import ShopContextProvider from "../context/shopcontext";

//ProductList.js        // add by weicong - Render the product list
import { useState, useEffect } from "react";
import soonToExpireAPI from "../api/soonToExpireAPI.js";
import CurrentDateTime from "./CurrentDateTime";
import SearchItem from "./SearchItem";

function Shop() {
  //const currentDate = new Date();

  const [products, setProducts] = useState([]);
  //const [text, setText] = useState("");
  //const [isDisplay, setIsDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [expirySoon, setExpirySoon] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await soonToExpireAPI.get("/products");
      console.log(response.data);
      setProducts(response.data);

      console.log("Expiry date format:", typeof response.data[0].expiryDate);
      console.log("GET all products completed!");
    } catch (error) {
      console.log("❌ Get all products error: " + error.message);
    }
  };

  useEffect(() => {
    console.log("Effect running");
    getAllProducts();
  }, []);

  const handleCategoryAll = () => {
    const myProductList = [...products];
    setIsLoading(true);
    if (products.length >= 1) {
      setFilteredItems(myProductList);
      console.log("All Items:", myProductList);
    } else {
      console.log("products is empty");
    }
  };

  const handleCategoryFruit = () => {
    const myProductList = [...products]; //copy the products from useState into our local variable due to the async nature. Scare it will be empty
    setIsLoading(true);
    if (products.length >= 1) {
      const fruits = myProductList.filter((item) => item.category === "fruit"); // Filter items based on the selected category
      setFilteredItems(fruits);
      console.log("Fruits:", fruits);
    } else {
      console.log("products is empty");
    }
  };

  const handleCategoryMeat = () => {
    const myProductList = [...products];
    setIsLoading(true);
    if (products.length >= 1) {
      const meats = myProductList.filter((item) => item.category === "meat");
      setFilteredItems(meats);
      console.log("Meats:", meats);
    } else {
      console.log("products is empty");
    }
  };

  const handleCategoryVegetable = () => {
    const myProductList = [...products];
    setIsLoading(true);
    if (products.length >= 1) {
      const vegetables = myProductList.filter(
        (item) => item.category === "vegetable"
      );
      setFilteredItems(vegetables);
      console.log("Vegetables", vegetables);
    } else {
      console.log("products is empty");
    }
  };

  const handleCategoryOthers = () => {
    const myProductList = [...products];
    setIsLoading(true);
    if (products.length >= 1) {
      const others = myProductList.filter((item) => item.category === "others");
      setFilteredItems(others);
      console.log("Others:", others);
    } else {
      console.log("products is empty");
    }
  };

  const handleSearchItem = (value) => {
    setSearchItem(value);

    const myProductList = [...products];
    setIsLoading(true);
    if (products.length >= 1) {
      console.log("Typing:", value);
      const searchResult = myProductList.filter(
        (item) => item.item.toLowerCase() === value.toLowerCase()
      );
      setFilteredItems(searchResult);
      console.log("search result:", searchResult);
    } else {
      console.log("products is empty");
    }
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Food Waste Reducer App</h1>
      </div>

      {/* weicong - added the SearchItem & <button> tag */}

      <br />
      <br />

      <div className="itemButtons">
        <SearchItem onChange={handleSearchItem} className={styles.itemButton} />
        <button onClick={() => handleCategoryAll()} className="itemButton">
          All items
        </button>
        <button onClick={() => handleCategoryFruit()} className="itemButton">
          Fruits
        </button>
        <button onClick={() => handleCategoryMeat()} className="itemButton">
          Meats
        </button>
        <button
          onClick={() => handleCategoryVegetable()}
          className="itemButton"
        >
          Vegetables
        </button>
        <button onClick={() => handleCategoryOthers()} className="itemButton">
          Others
        </button>
      </div>

      <div className="products">
        {filteredItems.map((filteredItems) => (
          <Product data={filteredItems} key={filteredItems.id} /> //weicong - Add the id to the key for every items in the list. This is a React requirement
        ))}
      </div>
      {/* <ShopContextProvider filteredItems={filteredItems} products={products}/> */}
      <CurrentDateTime />
    </div>
  );
}

export default Shop;
