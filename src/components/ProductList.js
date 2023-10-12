// ProductList.js

import { useState, useEffect } from "react";

import soonToExpireList from "../api/mockAPI";
//import CurrentDate from "./CurrentDate";
//import styles from "./allCSS/productList.css";
import SearchItem from "./SearchItem";

function ProductList() {
  const currentDate = new Date();

  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [expirySoon, setExpirySoon] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await soonToExpireList.get("/products");
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

  /*
    check expiry 30 days
    1. get the value from Date.parse(item.expiryDate) 
       - need to loop through all the 50items to extract the expiryDate to number
    2. compare it with today datetime
    3. used filter method to compare:
      eg; something === 2,592,000,000  means 30days apart
    4. copy all the object that has 30days apart 
  
  */

  const handleExpiry30Days = () => {
    const myProductList = [...products];

    if (products.length >= 1) {
      const expireIn30days = myProductList.map((item) => item.expiryDate);
    } else {
      console.log("products list is empty");
    }
  };

  const handleAddToCart = () => {
    setText("items added");
    setIsDisplay(!isDisplay);
  };

  return (
    <div className="productList">
      <h1>Clearance Sales</h1>

      <SearchItem onChange={handleSearchItem} />
      <br />
      <br />

      <button onClick={() => handleCategoryAll()}>All items</button>
      <button onClick={() => handleCategoryFruit()}>Fruits</button>
      <button onClick={() => handleCategoryMeat()}>Meats</button>
      <button onClick={() => handleCategoryVegetable()}>Vegetables</button>
      <button onClick={() => handleCategoryOthers()}>Others</button>
      <button onClick={() => handleAddToCart()}>Add to cart</button>
      {isDisplay && <p>{text}</p>}

      <br />
      <br />
      <div className="sortExpiryDate">
        <button>Expire in 30 days</button>
        <button>Expire in 60 Days</button>
        <button>Expire in 90 Days</button>
      </div>

      {products.length === 0 && (
        <p>
          <b>no products found!</b>
        </p>
      )}

      {/* using this table to loop through all items in filteredItems */}
      {isLoading ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>itemIMG</th>
              <th>Expiry date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 &&
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.item}</td>
                  <td>
                    <img src={item.itemIMG} />
                  </td>
                  <td>{item.expiryDate}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}

      {/* See which one to use */}
      {/* <p>{currentDate.toDateString()}</p> */}
      {/* <CurrentDate /> */}
    </div>
  );
}

export default ProductList;
