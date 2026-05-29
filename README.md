# 🛒 Tech Store - Full Stack E-Commerce Application

## 📌 Overview

Tech Store is a full-stack e-commerce web application developed using the MERN stack technologies. The application allows users to register, log in, browse products, search and filter products, add items to the cart, place orders, and view order history. The project demonstrates frontend development, backend API creation, authentication, database integration, and responsive design.

---

## 🚀 Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Logout Functionality

### Product Management

* View Products
* Product Detail Page
* Product Search
* Category-Based Filtering

### Shopping Cart

* Add to Cart
* Remove from Cart
* Clear Cart
* Cart Count Display

### Order Management

* Checkout Functionality
* Order Placement
* Order History Page
* Order Status Tracking

### User Experience

* Responsive Design
* Toast Notifications
* Mobile-Friendly Interface
* Dynamic Product Loading

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

### Additional Libraries

* Cors
* Dotenv
* Toastify.js

---

## 📂 Project Structure

```bash
ECOMMERCE_APP
│
├── models
│   ├── Product.js
│   └── User.js
│
├── routes
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── public
│   ├── images
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── orders.html
│   ├── login.html
│   ├── register.html
│   ├── script.js
│   ├── cart.js
│   ├── orders.js
│   ├── auth.js
│   └── style.css
│
├── server.js
├── package.json
└── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-link>
cd ecommerce-app
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

## 📸 Screenshots

### Home Page

* Product Listing
* Search Functionality
* Category Filter

### Authentication

* Login Page
* Registration Page

### Shopping Features

* Cart Page
* Checkout Process
* Order History

---

## 🔮 Future Enhancements

* Product Ratings & Reviews
* Wishlist Feature
* Payment Gateway Integration
* Admin Dashboard
* Inventory Management
* Email Notifications

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

* REST API Development
* MongoDB Atlas Integration
* JWT Authentication
* CRUD Operations
* Frontend & Backend Integration
* Responsive Web Design
* State Management using Local Storage
* Full Stack Development Workflow

---

## 👩‍💻 Developer

**Sakshi Singh**

B.Tech Computer Science (AI & ML)

Kalinga University

LinkedIn: https://www.linkedin.com/in/sakshi-singh-811534308

---

## 📄 License

This project was developed for educational and internship purposes as part of the CodeAlpha Full Stack Development Program.
