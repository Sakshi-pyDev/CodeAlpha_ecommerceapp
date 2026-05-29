let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

cartCount.innerText = cart.length;
const container = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const loading = document.getElementById("loading");

async function fetchProducts() {
    try {

        const response = await fetch("http://localhost:5000/api/products");

        let products = await response.json();
        loading.style.display = "none";

        products.forEach((product) => {

            container.innerHTML += `

    <div class="product-card" onclick='viewProduct(${JSON.stringify(product)})'>

        <img src="${product.image}" alt="${product.title}">

        <div class="product-info">

            <h2>${product.title}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <button
                class="add-cart-btn"
                onclick='event.stopPropagation(); addToCart(${JSON.stringify(product)})'
            >
                  Add to Cart
            </button>

        </div>

    </div>
`;
        });

    } catch (error) {
        console.log(error);
    }
}

fetchProducts();

function addToCart(product) {

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount.innerText = cart.length;

    Toastify({
    text: "Product Added To Cart 🛒",
    duration: 3000,
    gravity: "top",
    position: "right",
}).showToast();

}

searchInput.addEventListener("input", async (e) => {

    const searchText = e.target.value.toLowerCase();

    const response = await fetch("http://localhost:5000/api/products");

    const products = await response.json();

    container.innerHTML = "";

    const filteredProducts = products.filter((product) => {

        return product.title.toLowerCase().includes(searchText);

    });

    filteredProducts.forEach((product) => {

        container.innerHTML += `
        
            <div class="product-card" onclick='viewProduct(${JSON.stringify(product)})'>

                <img src="${product.image}" alt="${product.title}">

                <div class="product-info">

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <h3>₹${product.price}</h3>

                    <button class="add-cart-btn" onclick='addToCart(${JSON.stringify(product)})'>
                        Add to Cart
                    </button>

                </div>

            </div>
        `;
    });

});

function viewProduct(product){

    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    window.location.href = "product.html";
}

function logoutUser(){

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}

const token = localStorage.getItem("token");

const loginBtn = document.getElementById("login-btn");

const registerBtn = document.getElementById("register-btn");

const logoutBtn = document.getElementById("logout-btn");

const userInfo = document.getElementById("user-info");

const userEmail = localStorage.getItem("userEmail");


if(token){

    loginBtn.style.display = "none";

    registerBtn.style.display = "none";

    userInfo.innerText = `Welcome, ${userEmail}`;

} else {

    logoutBtn.style.display = "none";
}

function toggleTheme(){

    document.body.classList.toggle("dark-theme");

    const btn = document.getElementById("theme-btn");

    if(document.body.classList.contains("dark-theme")){

        localStorage.setItem("theme","dark");

        btn.innerHTML = "☀️";

    }else{

        localStorage.setItem("theme","light");

        btn.innerHTML = "🌙";
    }
}

window.onload = () => {

    const savedTheme = localStorage.getItem("theme");

    const btn = document.getElementById("theme-btn");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-theme");

        btn.innerHTML = "☀️";

    }
};

categoryFilter.addEventListener("change", async () => {

    const selectedCategory = categoryFilter.value;

    const response = await fetch(
        "http://localhost:5000/api/products"
    );

    const products = await response.json();

    container.innerHTML = "";

    const filteredProducts =
        selectedCategory === "All"

        ? products

        : products.filter(product =>
            product.category === selectedCategory
        );

    filteredProducts.forEach((product) => {

        container.innerHTML += `
        
            <div class="product-card"
            onclick='viewProduct(${JSON.stringify(product)})'>

                <img src="${product.image}" alt="${product.title}">

                <div class="product-info">

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <h3>₹${product.price}</h3>

                    <button
                        class="add-cart-btn"
                        onclick='event.stopPropagation(); addToCart(${JSON.stringify(product)})'>
                        Add To Cart
                    </button>

                </div>

            </div>
        `;
    });

});