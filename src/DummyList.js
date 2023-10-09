// DummyList.js;

// hardcoded product list to check if pages are working
import product1 from "./assets/products/1-apple.png";
import product2 from "./assets/products/2-cranberry.png";
import product3 from "./assets/products/3-milk.png";
import product4 from "./assets/products/4-eggs.png";
import product5 from "./assets/products/5-butter.png";
import product6 from "./assets/products/6-cereal.png";
import product7 from "./assets/products/7-oats.png";
import product8 from "./assets/products/8-flour.png";
import product9 from "./assets/products/9-lemon.png";
import product10 from "./assets/products/10-sugar.png";
import product11 from "./assets/products/11-bakingpowder.png";
import product12 from "./assets/products/12-beef.png";
import product13 from "./assets/products/13-chicken.png";
import product14 from "./assets/products/14-fish.png";
import product15 from "./assets/products/15-lamb.png";
import product16 from "./assets/products/16-mutton.png";
import product17 from "./assets/products/17-pork.png";
import product18 from "./assets/products/18-prawn.png";
import product19 from "./assets/products/19-crab.png";
import product20 from "./assets/products/20-hazelnuts.png";
import product21 from "./assets/products/21-walnuts.png";
import product22 from "./assets/products/22-peanuts.png";
import product23 from "./assets/products/23-banana.png";
import product24 from "./assets/products/24-tomato.png";
import product25 from "./assets/products/25-cucumber.png";
import product26 from "./assets/products/26-pineapple.png";
import product27 from "./assets/products/27-cauliflower.png";
import product28 from "./assets/products/28-lettuce.png";
import product29 from "./assets/products/29-peas.png";
import product30 from "./assets/products/30-duck.png";
import product31 from "./assets/products/31-peaches.png";
import product32 from "./assets/products/32-chocolate.png";
import product33 from "./assets/products/33-bread.png";
import product34 from "./assets/products/34-rice.png";
import product35 from "./assets/products/35-noodles.png";
import product36 from "./assets/products/36-pasta.png";
import product37 from "./assets/products/37-almonds.png";
import product38 from "./assets/products/38-strawberry.png";
import product39 from "./assets/products/39-blueberry.png";
import product40 from "./assets/products/40-cabbage.png";
import product41 from "./assets/products/41-carrots.png";
import product42 from "./assets/products/42-potatoes.png";
import product43 from "./assets/products/43-mushrooms.png";
import product44 from "./assets/products/44-pepper.png";
import product45 from "./assets/products/45-salt.png";
import product46 from "./assets/products/46-mustard.png";
import product47 from "./assets/products/47-lobster.png";
import product48 from "./assets/products/48-sausage.png";
import product49 from "./assets/products/49-turkey.png";
import product50 from "./assets/products/50-tunacan.png";

const PRODUCTS = [
  {
    id: 1,
    productName: "Apple",
    price: 0.8,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Cranberry",
    price: 6.6,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Milk",
    price: 2.5,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Eggs",
    price: 5.5,
    productImage: product4,
  },
  {
    id: 5,
    productName: "Butter",
    price: 6.5,
    productImage: product5,
  },
  {
    id: 6,
    productName: "Cereal",
    price: 8.8,
    productImage: product6,
  },
  {
    id: 7,
    productName: "Oats",
    price: 10.8,
    productImage: product7,
  },
  {
    id: 8,
    productName: "Flour",
    price: 2.4,
    productImage: product8,
  },
  {
    id: 9,
    productName: "Lemon",
    price: 0.9,
    productImage: product9,
  },
  {
    id: 10,
    productName: "Sugar",
    price: 3.4,
    productImage: product10,
  },
  {
    id: 11,
    productName: "Baking Powder",
    price: 2.2,
    productImage: product11,
  },
  {
    id: 12,
    productName: "Beef",
    price: 15.5,
    productImage: product12,
  },
  {
    id: 13,
    productName: "Chicken",
    price: 9.9,
    productImage: product13,
  },
  {
    id: 14,
    productName: "Fish",
    price: 10.5,
    productImage: product14,
  },
  {
    id: 15,
    productName: "Lamb",
    price: 15.6,
    productImage: product15,
  },
  {
    id: 16,
    productName: "Mutton",
    price: 15.5,
    productImage: product16,
  },
  {
    id: 17,
    productName: "Pork",
    price: 12.5,
    productImage: product17,
  },
  {
    id: 18,
    productName: "Prawn",
    price: 8.8,
    productImage: product18,
  },
  {
    id: 19,
    productName: "Crab",
    price: 15.5,
    productImage: product19,
  },
  {
    id: 20,
    productName: "Hazelnuts",
    price: 7.7,
    productImage: product20,
  },
  {
    id: 21,
    productName: "Walnuts",
    price: 7.7,
    productImage: product21,
  },
  {
    id: 22,
    productName: "Peanuts",
    price: 6.6,
    productImage: product22,
  },
  {
    id: 23,
    productName: "Banana",
    price: 2.5,
    productImage: product23,
  },
  {
    id: 24,
    productName: "Tomato",
    price: 1.8,
    productImage: product24,
  },
  {
    id: 25,
    productName: "Cucumber",
    price: 1.2,
    productImage: product25,
  },
  {
    id: 26,
    productName: "Pineapple",
    price: 2.2,
    productImage: product26,
  },
  {
    id: 27,
    productName: "Cauliflower",
    price: 5.5,
    productImage: product27,
  },
  {
    id: 28,
    productName: "Lettuce",
    price: 1.8,
    productImage: product28,
  },
  {
    id: 29,
    productName: "Peas",
    price: 2.5,
    productImage: product29,
  },
  {
    id: 30,
    productName: "Duck",
    price: 29.9,
    productImage: product30,
  },
  {
    id: 31,
    productName: "Peaches",
    price: 9.9,
    productImage: product31,
  },
  {
    id: 32,
    productName: "Chocolate",
    price: 2.8,
    productImage: product32,
  },
  {
    id: 33,
    productName: "Bread",
    price: 2.8,
    productImage: product33,
  },
  {
    id: 34,
    productName: "Rice",
    price: 11.2,
    productImage: product34,
  },
  {
    id: 35,
    productName: "Noodles",
    price: 2.2,
    productImage: product35,
  },
  {
    id: 36,
    productName: "Pasta",
    price: 3.2,
    productImage: product36,
  },
  {
    id: 37,
    productName: "Almonds",
    price: 7.7,
    productImage: product37,
  },
  {
    id: 38,
    productName: "Strawberry",
    price: 6.5,
    productImage: product38,
  },
  {
    id: 39,
    productName: "Blueberry",
    price: 4.4,
    productImage: product39,
  },
  {
    id: 40,
    productName: "Cabbage",
    price: 3.3,
    productImage: product40,
  },
  {
    id: 41,
    productName: "Carrots",
    price: 2.3,
    productImage: product41,
  },
  {
    id: 42,
    productName: "Potatoes",
    price: 1.8,
    productImage: product42,
  },
  {
    id: 43,
    productName: "Mushrooms",
    price: 3.2,
    productImage: product43,
  },
  {
    id: 44,
    productName: "Pepper",
    price: 3.5,
    productImage: product44,
  },
  {
    id: 45,
    productName: "Salt",
    price: 0.8,
    productImage: product45,
  },
  {
    id: 46,
    productName: "Mustard",
    price: 5.1,
    productImage: product46,
  },
  {
    id: 47,
    productName: "Lobster",
    price: 15.7,
    productImage: product47,
  },
  {
    id: 48,
    productName: "Sausage",
    price: 4.5,
    productImage: product48,
  },
  {
    id: 49,
    productName: "Turkey",
    price: 33.3,
    productImage: product49,
  },
  {
    id: 50,
    productName: "Tuna",
    price: 3.5,
    productImage: product50,
  },
];

export default PRODUCTS;
