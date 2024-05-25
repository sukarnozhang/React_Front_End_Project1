// Shop.js

import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../allCssStyling/Shop.modules.css";
import Product from "./Product";
import soonToExpireAPI from "../api/soonToExpireAPI.js";
import CurrentDateTime from "./CurrentDateTime";
import SearchItem from "./SearchItem";
import Button from "./Button";
import Logo from "../logo";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]); //used for rendering only
  const [searchItem, setSearchItem] = useState("");
  const [expiryMonth, setExpiryMonth] = useState(false); //used this state to track if user clicked on the expiry month
  const [todayDate, setTodayDate] = useState("");
  const [soonToExpireItems, setSoonToExpireItems] = useState([]); //used for sharing the value around
  //const [expiryButton, setExpiryButton] = useState(true);
  const [recipes, setRecipes] = useState([]);

  // store the value of months in digits
  const oneMonth = 2592000000;
  const twoMonth = 5184000000;
  const threeMonth = 7776000000;

  // To get all products from the API
  const getAllProducts = async () => {
    try {
      const response = await soonToExpireAPI.get(`https://651b9a0a194f77f2a5ae9b01.mockapi.io/products`);
      setProducts(response.data);
      console.log("GET all products completed2!");
    } catch (error) {
      console.log("❌ Get all products error: " + error.message);
    }
  };

  // Use effect to get all products for every render
  useEffect(() => {
    console.log("Effect running");
    getAllProducts();
  }, []);

  // Search Bar
  const handleSearchItem = (value) => {
    const appId = process.env.REACT_APP_RECEIPE_APP_ID;
    const appKey = process.env.REACT_APP_RECEIPE_APP_KEY;
    const myProductList = [...products];
    setSearchItem(value);
    setIsLoading(true);

    //filter the products accordingly
    if (products.length >= 1) {
      const searchResult = myProductList.filter(
        (item) => item.item.toLowerCase() === value.toLowerCase()
      );
      setFilteredItems(searchResult);
      console.log("search result:", searchResult);
    } else {
      console.log("products is empty");
    }

    //filter the recipes accordingly
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchItem}&app_id=${appId}&app_key=${appKey}`;
    axios
      .get(endpoint)
      .then((response) => {
        const recipes = response.data.hits.map((hit) => hit.recipe);
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
    console.log("my returned recipes:", recipes);
  };

  // Show All Items
  const handleCategoryAll = () => {
    const myProductList = [...products];
    if (products.length >= 1) {
      setFilteredItems(myProductList);
      console.log("All Items:", myProductList);
    } else {
      console.log("products is empty");
    }
  };

  // Show Fruits Only
  const handleCategoryFruit = () => {
    let myProductList = [];
    console.log("is expiry button clicked:", expiryMonth);
    expiryMonth
      ? (myProductList = [...soonToExpireItems])
      : (myProductList = [...products]);

    if (products.length >= 1) {
      const fruits = myProductList.filter((item) => item.category === "fruit");
      setFilteredItems(fruits);
      console.log("Fruits", fruits);
      if (fruits.length === 0) {
        console.log("No Fruits found!");
      }
    } else {
      console.log("products is empty");
    }
  };

  // Show Meats Only
  const handleCategoryMeat = () => {
    let myProductList = [];
    console.log("is expiry button clicked:", expiryMonth);
    expiryMonth
      ? (myProductList = [...soonToExpireItems])
      : (myProductList = [...products]);

    if (products.length >= 1) {
      const meats = myProductList.filter((item) => item.category === "meat");
      setFilteredItems(meats);
      console.log("Meats", meats);
      if (meats.length === 0) {
        console.log("No Meats found!");
      }
    } else {
      console.log("products is empty");
    }
  };

  // Show Vegetable only
  const handleCategoryVegetable = () => {
    let myProductList = [];
    console.log("is expiry button clicked:", expiryMonth);
    expiryMonth
      ? (myProductList = [...soonToExpireItems])
      : (myProductList = [...products]);

    if (myProductList.length >= 1) {
      const vegetables = myProductList.filter(
        (item) => item.category === "vegetable"
      );
      setFilteredItems(vegetables);
      console.log("Vegetables", vegetables);
      if (vegetables.length === 0) {
        console.log("No Vegetables found!");
      }
    } else {
      console.log("products is empty");
    }
  };

  // Show other categories only
  const handleCategoryOthers = () => {
    let myProductList = [];
    console.log("is expiry button clicked:", expiryMonth);
    expiryMonth
      ? (myProductList = [...soonToExpireItems])
      : (myProductList = [...products]);

    if (products.length >= 1) {
      const others = myProductList.filter((item) => item.category === "others");
      setFilteredItems(others);
      console.log("Others", others);
      if (others.length === 0) {
        console.log("No Others type found!");
      }
    } else {
      console.log("products is empty");
    }
  };

  // Define a function to receive data from the child
  //this is used for calculating the expiry date based on today date
  const receiveDataFromChild = (data) => {
    setTodayDate(data);
  };

  // To show expiry date in 30 days
  const handleExpiry30Days = () => {
    const myProductList = [...products];
    const soonToExpireItems = [];

    if (products.length >= 1) {
      setExpiryMonth(true);

      for (let i = 0; i < myProductList.length - 1; i++) {
        if (Date.parse(myProductList[i].expiryDate) - todayDate <= oneMonth) {
          soonToExpireItems.push(myProductList[i]);
        }
        setSoonToExpireItems(soonToExpireItems); //to store the items in state so it can be pass around
        setFilteredItems(soonToExpireItems); //for rendering the display of items expiry = 30days
      }
      console.log("1 month expiry:", soonToExpireItems);
      console.log("is expiry button clicked?", expiryMonth);
    } else {
      console.log("products list is empty");
    }
  };

  // To show expiry date in 60 days
  const handleExpiry60Days = () => {
    const myProductList = [...products];
    const soonToExpireItems = [];

    if (products.length >= 1) {
      for (let i = 0; i < myProductList.length - 1; i++) {
        if (
          Date.parse(myProductList[i].expiryDate) - todayDate > oneMonth &&
          Date.parse(myProductList[i].expiryDate) - todayDate <= twoMonth
        ) {
          soonToExpireItems.push(myProductList[i]);
        }
        setSoonToExpireItems(soonToExpireItems); //to store the items in state so it can be pass around
        setFilteredItems(soonToExpireItems); //for rendering the display of items expiry = 30days
      }
      console.log("2 month expiry:", soonToExpireItems);
      console.log("is expiry button clicked?", expiryMonth);
    } else {
      console.log("products list is empty");
    }
  };

  // To show expiry date in 90 days
  const handleExpiry90Days = () => {
    const myProductList = [...products];
    const soonToExpireItems = [];

    if (products.length >= 1) {
      for (let i = 0; i < myProductList.length - 1; i++) {
        if (
          Date.parse(myProductList[i].expiryDate) - todayDate > twoMonth &&
          Date.parse(myProductList[i].expiryDate) - todayDate <= threeMonth
        ) {
          soonToExpireItems.push(myProductList[i]);
        }
        setSoonToExpireItems(soonToExpireItems);
        setFilteredItems(soonToExpireItems);
      }
      console.log("3 month expiry:", soonToExpireItems);
      console.log("is expiry button clicked?", expiryMonth);
    } else {
      console.log("products list is empty");
    }
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <Logo />
      </div>
      {console.log("Child data from CurrentDateTime:", todayDate)}
      <CurrentDateTime sendDataToParent={receiveDataFromChild} />

      <div className="mySearchandFilter">
        <SearchItem onChange={handleSearchItem} />
        <br />
        <div className="expireDate">
          <Button
            label="Expired in 1 months"
            onClick={() => handleExpiry30Days()}
          />
          <Button
            label="Expired in 2 months"
            onClick={() => handleExpiry60Days()}
          />
          <Button
            label="Expired in 3 months"
            onClick={() => handleExpiry90Days()}
          />
        </div>
        <br />
        <Button label="All items" onClick={() => handleCategoryAll()} />
        <Button label="Fruits" onClick={() => handleCategoryFruit()}></Button>
        <Button label="Meats" onClick={() => handleCategoryMeat()} />
        <Button label="Vegetables" onClick={() => handleCategoryVegetable()} />
        <Button label="Others" onClick={() => handleCategoryOthers()} />
      </div>

      <div className="products">
        {filteredItems.map((filteredItems) => (
          <Product data={filteredItems} key={filteredItems.id} />
        ))}
      </div>

      <div>
        {recipes.length >= 1 ? (
          <h1 style={{ textAlign: "center" }}>Recipes Available</h1>
        ) : null}
        {handleSearchItem}
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              {recipe.label}
              <br />
              <a href={recipe.url} target="_blank" rel="noreferrer">
                <img src={recipe.images.REGULAR.url} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
