const token = localStorage.getItem("token");

if(!token){

    alert("Please login first!");

    window.location.href = "login.html";
}

const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartContainer.innerHTML = "";

    if(cart.length === 0){

    cartContainer.innerHTML = `
    
        <h2 style="text-align:center; margin-top:50px;">
            Your Cart Is Empty 🛒
        </h2>
    
    `;

    totalPrice.innerText = "";

    return;
}

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartContainer.innerHTML += `
        
            <div class="product-card">

                <img src="${product.image}" alt="${product.title}">

                <div class="product-info">

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <h3>₹${product.price}</h3>

                    <button class="add-cart-btn" onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    totalPrice.innerText = "Total: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();

function clearCart() {

    localStorage.removeItem("cart");

    cart = [];

    displayCart();
}

function checkout() {

    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    Toastify({
        text: "Order Placed Successfully 🎉",
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

const newOrder = {
    id: Date.now(),
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price, 0),
    date: new Date().toLocaleString(),
    status: "Delivered"
};

orders.push(newOrder);

localStorage.setItem("orders", JSON.stringify(orders));

localStorage.removeItem("cart");

cart = [];

displayCart();
}