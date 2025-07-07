// 🌳 What is the DOM?
// The DOM is a tree-like structure that represents the contents of a web page. JavaScript uses the DOM to access and modify elements, attributes, styles, events in an HTML document.

// 🧩 Accessing Elements in DOM
getElementById
const element = document.getElementById("myId");


getElementsByClassName
const items = document.getElementsByClassName("myClass");


getElementsByTagName
const paragraphs = document.getElementsByTagName("p");


querySelector (returns the first match)
const item = document.querySelector(".myClass");


querySelectorAll (returns NodeList of all matches)
const items = document.querySelectorAll("ul li");


🧱 Modifying Content

Change text
element.textContent = "Hello Tejas!";
element.innerText = "Hi!";


Change HTML
element.innerHTML = "<strong>Hello!</strong>";


🎨 Modifying Styles
element.style.color = "red";
element.style.backgroundColor = "yellow";


🎛️ Modifying Attributes
element.setAttribute("class", "active");
const id = element.getAttribute("id");
element.removeAttribute("style");


🧱 Create and Add Elements
Create element
const newDiv = document.createElement("div");


Add text
newDiv.textContent = "I am new!";


Append to document
document.body.appendChild(newDiv);


❌ Remove Elements
element.remove(); // modern
// OR
parent.removeChild(child);


🎯 Events
Add Event Listener
element.addEventListener("click", function () {
  alert("Clicked!");
});


Common Event Types
    click
    mouseover
    keydown
    submit
    change

⏳ DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
});


📦 DOM Properties
    document.title
    document.body
    document.head
    element.children
    element.parentElement
    element.nextElementSibling
    element.previousElementSibling
    element.classList.add/remove/toggle/contains()






