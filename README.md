# 🧠 ThinkPad

ThinkPad is a **full-stack MERN (MongoDB, Express, React, Node.js)** note-taking app that allows users to **Create, Read, Update, and Delete** notes with titles and descriptions. Designed for absolute beginners, it also introduces real-world concepts like **rate limiting using Upstash Redis**, a **RESTful API**, **responsive design**, and **deployment workflows**.

## Home Page

![image](https://github.com/user-attachments/assets/185e75a1-82cc-4ac5-b1a6-87778d2458e5)

## Note Create Page

![image](https://github.com/user-attachments/assets/ab115ae9-7b8e-4830-b240-5eafd2c53e6d)

## Note Update Page

![image](https://github.com/user-attachments/assets/050fff99-70b4-40f6-bd9c-6f278b8d133e)


## Rate Limiting

![image](https://github.com/user-attachments/assets/896242ab-7adb-447f-9fd4-d5d3fc9cba87)



## 🚀 Features

- 🧱 Full-Stack MERN Application
- ✨ CRUD operations: Create, Update, Delete Notes
- 🛠️ RESTful API with proper HTTP methods and status codes
- ⚙️ Rate Limiting implemented using **Upstash Redis**
- 🌐 SQL vs NoSQL Concepts
- 📱 Fully Responsive UI
- 📦 Deployment Guide included
- 📚 Beginner-friendly codebase with comments and examples


## 🏗️ Tech Stack

| Frontend  | Backend   | Database | Tools        |
|-----------|-----------|----------|--------------|
| React     | Node.js   | MongoDB  | Postman      |
| Tailwind  | Express   | Mongoose | Upstash Redis |
| Axios     | CORS      | Dotenv   |              |


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


## 🧪 .env Setup


### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```


## 🔧 Run the Backend

```
cd backend
npm install
npm run dev
```


## 💻 Run the Frontend

```
cd frontend
npm install
npm run dev
```
