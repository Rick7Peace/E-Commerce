// var cardsHolder = document.getElementById("cardsPlaceholder");

// var itemList = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
// ];

// function loadCard(item) {
//   var section = document.createElement("div");
//   section.setAttribute("class", "card");
//   var title = document.createElement("h4");
//   title.textContent = item.title;
//   var image = document.createElement("img");
//   image.setAttribute("src", item.image);
//   var price = document.createElement("p");
//   price.textContent = item.price;
//   section.appendChild(title);
//   section.appendChild(image);
//   section.appendChild(price);
//   cardsHolder.appendChild(section);
// }

// function loadCards() {
//   for (let i = 0; i < itemList.length; i++) {
//     loadCard(itemList[i]);
//   }
// }


// {
//   /* <div id="cardsPlaceholder">
// <div class="card">
//     <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
//     <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
//     <p>109.95</p>
// </div>
// </div> */
// }





// Demo product data
// const products = [
//   { id: 1, name: "Crochet Hat", price: 25, image: "images/hat.jpg" },
//   { id: 2, name: "Crochet Scarf", price: 30, image: "images/scarf.jpg" },
//   { id: 3, name: "Crochet Bag", price: 40, image: "images/bag.jpg" }
// ];

// let cart = [];

// // Render products
// const productList = document.getElementById("product-list");
// products.forEach(p => {
//   const div = document.createElement("div");
//   div.classList.add("product");
//   div.innerHTML = `
//     <img src="${p.image}" alt="${p.name}">
//     <h3>${p.name}</h3>
//     <p>$${p.price}</p>
//     <button onclick="addToCart(${p.id})">Add to Cart</button>
//   `;
//   productList.appendChild(div);
// });

// // Add to cart
// function addToCart(id) {
//   const product = products.find(p => p.id === id);
//   cart.push(product);
//   updateCartCount();
// }

// // Update cart count
// function updateCartCount() {
//   document.getElementById("cart-count").innerText = cart.length;
// }

// // Show cart modal
// const cartBtn = document.getElementById("cart-btn");
// const cartModal = document.getElementById("cart-modal");
// const closeCart = document.getElementById("close-cart");
// const cartItems = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");

// cartBtn.addEventListener("click", () => {
//   cartModal.style.display = "block";
//   renderCart();
// });

// closeCart.addEventListener("click", () => {
//   cartModal.style.display = "none";
// });

// // Render cart
// function renderCart() {
//   cartItems.innerHTML = "";
//   let total = 0;
//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price}`;
//     cartItems.appendChild(li);
//     total += item.price;
//   });
//   cartTotal.innerText = total;
// }


// Demo product data
// const products = [
//   { id: 1, name: "Crochet Pumpkin Drink", price: 25, image: "assets/IMG_9563.jpeg" },
//   { id: 2, name: "Crochet Scarf", price: 30, image: "images/scarf.jpg" },
//   { id: 3, name: "Crochet Bag", price: 40, image: "images/bag.jpg" }
// ];

// let cart = [];

// // Render products
// const productList = document.getElementById("product-list");
// products.forEach(p => {
//   const div = document.createElement("div");
//   div.classList.add("product");
//   div.innerHTML = `
//     <img src="${p.image}" alt="${p.name}">
//     <h3>${p.name}</h3>
//     <p>$${p.price}</p>
//     <button onclick="addToCart(${p.id})">Add to Cart</button>
//   `;
//   productList.appendChild(div);
// });

// // Add to cart
// function addToCart(id) {
//   const product = products.find(p => p.id === id);
//   cart.push(product);
//   updateCartCount();
// }

// // Update cart count
// function updateCartCount() {
//   document.getElementById("cart-count").innerText = cart.length;
// }

// // Show cart modal
// const cartBtn = document.getElementById("cart-btn");
// const cartModal = document.getElementById("cart-modal");
// const closeCart = document.getElementById("close-cart");
// const cartItems = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");

// cartBtn.addEventListener("click", () => {
//   cartModal.style.display = "block";
//   renderCart();
// });

// closeCart.addEventListener("click", () => {
//   cartModal.style.display = "none";
// });

// // Render cart with remove buttons
// // Render cart with styled remove buttons
// // Render cart with thumbnails + styled remove buttons
// function renderCart() {
//   cartItems.innerHTML = "";
//   let total = 0;

//   cart.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <div class="cart-item">
//         <img src="${item.image}" alt="${item.name}" class="cart-thumb">
//         <span>${item.name} - $${item.price}</span>
//       </div>
//       <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
//     `;
//     cartItems.appendChild(li);
//     total += item.price;
//   });

//   cartTotal.innerText = total;
// }

// // Remove from cart
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCartCount();
//   renderCart();
// }

// // Fake checkout
// const checkoutBtn = document.getElementById("checkout-btn");
// checkoutBtn.addEventListener("click", () => {
//   if (cart.length === 0) {
//     alert("Your cart is empty!");
//     return;
//   }
//   alert("Thanks for your order! 🧶✨");
//   cart = []; // empty the cart after checkout
//   updateCartCount();
//   renderCart();
//   cartModal.style.display = "none"; // close modal
// });




// Demo product data
const products = [
  { id: 1, name: "Crochet Hat", price: 25, image: "images/hat.jpg" },
  { id: 2, name: "Crochet Scarf", price: 30, image: "images/scarf.jpg" },
  { id: 3, name: "Crochet Bag", price: 40, image: "images/bag.jpg" }
];

let cart = [];

// Render products
const productList = document.getElementById("product-list");
products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Add to cart (increase quantity if exists)
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
}

// Update cart count (sum of all quantities)
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = count;
}

// Show cart modal
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
  renderCart();
});

closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Render cart with quantity controls
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-thumb">
        <span>${item.name} - $${item.price}</span>
      </div>
      <div class="quantity-controls">
        <button onclick="decreaseQty(${index})">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQty(${index})">+</button>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.innerText = total;
}

// Quantity functions
function increaseQty(index) {
  cart[index].quantity++;
  updateCartCount();
  renderCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1); // remove if goes below 1
  }
  updateCartCount();
  renderCart();
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
}

// Fake checkout
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thanks for your order! 🧶✨");
  cart = []; // empty the cart after checkout
  updateCartCount();
  renderCart();
  cartModal.style.display = "none"; // close modal
});
