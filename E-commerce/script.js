// Item Search logic

const search = document.querySelector(".search-bar");
const items = document.querySelectorAll(".item"); // All product items

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});



const addToCartButtons = document.querySelectorAll(".addcart");
const cartTab = document.querySelector(".cartTab");
const cartList = document.querySelector(".listCart");
const cartIcon = document.querySelector(".icon");
const closeBtn = document.querySelector(".close");

let cart = [];

// Add products to cart
addToCartButtons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
    const item = btn.parentElement;
    const name = item.querySelector('h2').innerText;
    const price = parseInt(item.querySelector('.price').innerText.replace('₹', ''));
    const imgSrc = item.querySelector('img').getAttribute('src');

    // checks if already present
    const existing_item = cart.find((product)=>product.name===name);

    if(existing_item){
        existing_item.quantity++;
    }else{
        cart.push({
        name,
        price,
        imgSrc,
        quantity: 1
    })
    }
    updateCartCount();
    })
})


function updateCartCount(){
    const cartCount = document.querySelector(".icon span");
    let total = 0;
    cart.forEach((item)=>{
        total+=item.quantity;
        cartCount.innerText=total;
    })
}


function renderCart() {
  cartList.innerHTML = ''; // Clear previous cart display

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;

    
    // Quantity Controls
    const quantityBox = document.createElement('div');
    quantityBox.classList.add('quantity-controls');

    const minusBtn = document.createElement('button');
    minusBtn.innerText = '−';
    minusBtn.classList.add('qty-btn');

    const qtyDisplay = document.createElement('span');
    qtyDisplay.innerText = item.quantity;
    qtyDisplay.classList.add('qty-count');

    const plusBtn = document.createElement('button');
    plusBtn.innerText = '+';
    plusBtn.classList.add('qty-btn');

    // Event listeners for quantity buttons
    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart = cart.filter(c => c.name !== item.name);
      }
      updateCartCount();
      renderCart();
    });

    plusBtn.addEventListener("click", () => {
      item.quantity++;
      updateCartCount();
      renderCart();
    });

    quantityBox.appendChild(minusBtn);
    quantityBox.appendChild(qtyDisplay);
    quantityBox.appendChild(plusBtn);

// end of quantity function 



    const cartItem = document.createElement('div');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.width = 60;

    const name = document.createElement('h3');
    name.innerText = item.name;

    const price = document.createElement('p');
    price.innerText = `₹${item.price}`;

    // Add remove button dynamically
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove-btn");

    // Remove item logic
    removeBtn.addEventListener("click", () => {
      cart = cart.filter(c => c.name !== item.name);
      updateCartCount();
      renderCart();
    });

    cartItem.appendChild(img);
    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cartItem.appendChild(removeBtn); 
    cartItem.appendChild(quantityBox);
    cartList.appendChild(cartItem);
  });

  const totalPrice = document.querySelector(".cartTab .total");
  totalPrice.innerText = `Total: ₹${total}`;
}


// Open cart
cartIcon.addEventListener("click", () => {
  cartTab.classList.add("active");
  renderCart();
});

// Close cart
closeBtn.addEventListener("click", () => {
  cartTab.classList.remove("active");
});



function checkAlert(){
    alert("✅ Order placed successfully!")
}