# E-Commerce Web App

A full-stack E-Commerce web application built using the MERN stack that provides users with a seamless online shopping experience through a modern and responsive interface.

---

## 🚀 Features

* User Authentication & Authorization
* Product Listing & Search
* Shopping Cart Functionality
* Order Management System
* Responsive User Interface
* RESTful API Integration
* MongoDB Database Support
* Secure Payment Ready Architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv

---

## 📂 Project Structure

```bash
Ecommerce-web-app-main/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-web-app.git
cd Ecommerce-web-app-main
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd client
npm install
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register User    |
| POST   | /api/auth/login    | Login User       |
| GET    | /api/products      | Get All Products |
| POST   | /api/cart          | Add to Cart      |
| GET    | /api/orders        | Get Orders       |
| POST   | /api/orders        | Create Order     |

---

## 🎯 Future Improvements

* Online Payment Gateway Integration
* Wishlist Functionality
* Product Reviews & Ratings
* Admin Dashboard
* Order Tracking System
* Dark Mode Support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

Kokila Chandrakar
B.Tech CSE (AI & ML)
Passionate about Full-Stack Development, AI & Cloud Computing
