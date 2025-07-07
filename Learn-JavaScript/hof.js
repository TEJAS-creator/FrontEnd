// Array methods like map(), filter(), reduce() are HOFs = Higher order functions

const nums = [1, 2, 3];
const squared = nums.map(n => n * n); // map takes a callback
console.log(squared); // [1, 4, 9]



// Real life use : Creating a list of product names to display on a webpage
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 25000 },
  { name: "Monitor", price: 20000 },
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Headphones", price: 3000 },
  { name: "Smartwatch", price: 10000 },
  { name: "Speaker", price: 4500 },
  { name: "Printer", price: 12000 }
];

products.sort((a, b) => a.price - b.price); // ascending order
console.log(products);
const names = products.map(product => product.name);
console.log(names); // ["Laptop", "Phone"]



// Filtering using HOF = Filtering search results, like in Flipkart or Amazon
const expensive = products.filter(product => product.price > 40000);
console.log(expensive); // [{ name: "Laptop", price: 50000 }]



// Sorting = Sorting items from low to high or high to low
const sorted = products.toSorted((a, b) => a.price - b.price);
console.log(sorted);


// // DOM in webpages = UI event systems in websites rely heavily on higher-order functions (passing callbacks)
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });





