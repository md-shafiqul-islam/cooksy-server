# 🛠️ CookSy – Server Side

Backend for **CookSy**, a community-driven recipe sharing platform.  
Handles authentication, user roles, recipe management, and secure API endpoints.

---

## 📌 About

Built with **Express.js** and **MongoDB**, this server manages user authentication (via Firebase JWT), recipe CRUD operations, user data, and role-based access for contributors and general users. Ideal for culinary enthusiasts and content creators.

---

## ⚙️ Setup & Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/md-shafiqul-islam/cooksy-server.git
   cd cooksy-server

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB
- Firebase Admin SDK
- JWT  
- CORS
- dotenv

---

## 🌐 Project Structure 

📦 cooksy-server
┣ 📂 controllers
┣ 📂 middlewares
┣ 📂 models
┣ 📂 routes
┣ 📜 index.js
┣ 📜 .env.example
┗ 📜 package.json

---

## 📁 Repositories  
**Server:** [github.com/md-shafiqul-islam/craftflow-server](github.com/md-shafiqul-islam/cooksy-server)

---

## 🧪 Getting Started

To run this project locally:

# 1. Clone the repositories
git clone https://github.com/md-shafiqul-islam/cooksy-server.git

# 2. Install dependencies for both
cd ../cooksy-server
npm install

# 3. Set up environment variables
# For server: create `.env` inside `craftflow-server`
PORT=3000
DB_USER=DB_USER
DB_PASS=DB_PASS

# 4. Run server
# In terminal:
cd craftflow-server
nodemon index.js

---

## 🔧 Key Features

- Firebase JWT-based authentication & role protection
- RESTful APIs for recipes, users, and categories
- Secure image and recipe data handling
- Modular and scalable folder structure

---

## 📄 License  
This project is open-source and available under the [MIT License](LICENSE).

---
