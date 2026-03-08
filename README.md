# 💸 SpendWise Backend API

SpendWise is a simple backend REST API built using **Node.js, Express.js, MongoDB, and JWT Authentication**.
This project helps beginner developers understand how real backend systems work, including authentication and CRUD operations.

---

# 🚀 Project Overview

SpendWise is a beginner-friendly backend application that demonstrates:

* 🔐 Secure **User Authentication using JWT**
* 📦 **REST API development**
* 💾 **MongoDB database integration**
* ⚙️ **CRUD operations** for managing transactions
* 🛡️ **Protected routes using authentication middleware**

This project is ideal for **students learning backend development using Node.js and MongoDB**.

---

# 🛠️ Tech Stack

| Technology                 | Purpose                                    |
| -------------------------- | ------------------------------------------ |
| 🟢 Node.js                 | JavaScript runtime for backend development |
| 🚂 Express.js              | Framework for building REST APIs           |
| 🍃 MongoDB                 | NoSQL database for storing data            |
| 🔗 Mongoose                | MongoDB object modeling                    |
| 🔐 JWT                     | Authentication and authorization           |
| 🔑 bcryptjs                | Password hashing                           |
| 🌐 CORS                    | Cross-Origin Resource Sharing              |
| ⚡ Thunder Client / Postman | API testing tools                          |

---

# 📁 Project Folder Structure

```
SpendWise
│
├── models
│   ├── User.js
│   └── Transaction.js
│
├── controllers
│   ├── authController.js
│   └── transactionController.js
│
├── routes
│   ├── authRoutes.js
│   └── transactionRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
├── config
│   └── db.js
│
├── .env
├── server.js
└── package.json
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshavarthan2006/SpendWise-Project-2.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd SpendWise
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create Environment File

Create a `.env` file in the root folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Start the Server

Development mode:

```bash
npm run dev
```

Normal start:

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

# 🔑 API Endpoints

## 👤 Authentication APIs

### Register User

POST

```
/api/auth/register
```

Example Body:

```json
{
  "name": "Drago",
  "email": "drago@gmail.com",
  "password": "123456"
}
```

---

### Login User

POST

```
/api/auth/login
```

Example Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

# 💳 Transaction APIs (Protected)

These APIs require a **JWT Token**.

Add token in request header:

```
Authorization: JWT_TOKEN
```

---

### Create Transaction

POST

```
/api/transactions
```

Example Body:

```json
{
  "title": "Food",
  "amount": 250
}
```

---

### Get Transactions

GET

```
/api/transactions
```

---

### Update Transaction

PUT

```
/api/transactions/:id
```

---

### Delete Transaction

DELETE

```
/api/transactions/:id
```

---

# 🧪 API Testing

You can test the APIs using:

* ⚡ Thunder Client (VS Code)
* 📮 Postman

---

# 🗄️ Database

Database used:

**MongoDB**

Collections:

* 👤 Users
* 💳 Transactions

Relationship:

```
One User → Many Transactions
```

---

# 🎥 Project Demo

The demo video explains:

* Project structure
* Code explanation
* API testing
* MongoDB database

---

# 👨‍💻 Author

Student Backend Development Project

Built using:

```
Node.js + Express.js + MongoDB + JWT
```

---

# ⭐ Support

If you like this project, consider giving it a **⭐ star on GitHub**.
