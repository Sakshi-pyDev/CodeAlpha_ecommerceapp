const ordersContainer = document.getElementById("ordersContainer");

const orders = JSON.parse(localStorage.getItem("orders")) || [];
document.getElementById("orderCount").innerText =
    `(${orders.length})`;

if (orders.length === 0) {
    ordersContainer.innerHTML = "<h2>No Orders Yet</h2>";
} else {

    orders.reverse().forEach(order => {

        const div = document.createElement("div");

        div.classList.add("order-card");

        div.innerHTML = `
    <h3>Order #${order.id}</h3>
    <p>Date: ${order.date}</p>
    <p>Total: ₹${order.total}</p>
    <p>Status: ${order.status}</p>

    ${order.items.map(item => `
        <div style="margin:10px 0;">
            <img src="${item.image}" width="100">
            <h4>${item.title}</h4>
            <p>₹${item.price}</p>
        </div>
    `).join("")}

    <hr>
`;

        ordersContainer.appendChild(div);
    });
}