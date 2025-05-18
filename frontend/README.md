# 🧠 ThinkPad

ThinkPad is a **full-stack MERN (MongoDB, Express, React, Node.js)** note-taking app that allows users to **Create, Read, Update, and Delete** notes with titles and descriptions. Designed for absolute beginners, it also introduces real-world concepts like **rate limiting using Upstash Redis**, a **RESTful API**, **responsive design**, and **deployment workflows**.

---

## 🚀 Features

- 🧱 Full-Stack MERN Application
- ✨ CRUD operations: Create, Update, Delete Notes
- 🛠️ RESTful API with proper HTTP methods and status codes
- ⚙️ Rate Limiting implemented using **Upstash Redis**
- 🌐 SQL vs NoSQL Concepts
- 📱 Fully Responsive UI
- 📦 Deployment Guide included
- 📚 Beginner-friendly codebase with comments and examples

---

## 📸 Demo

> 🚧 Live demo coming soon — or [follow the deployment guide](#-deployment) to host it yourself!

---

## 🏗️ Tech Stack

| Frontend  | Backend   | Database | Tools        |
|-----------|-----------|----------|--------------|
| React     | Node.js   | MongoDB  | Postman      |
| Tailwind  | Express   | Mongoose | Upstash Redis |
| Axios     | CORS      | Dotenv   | Vercel/Render |

---

## 📂 Project Structure

```bash
thinkpad/
├── client/                 # React frontend
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components (Home, Create, Edit)
│       └── App.js
├── server/                 # Node/Express backend
│   ├── routes/             # API routes
│   ├── models/             # Mongoose schemas
│   ├── controllers/        # Business logic
│   └── index.js
├── .env
└── README.md
