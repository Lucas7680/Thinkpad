# 🧠 ThinkPad

ThinkPad is a **full-stack MERN (MongoDB, Express, React, Node.js)** note-taking app that allows users to **Create, Read, Update, and Delete** notes with titles and descriptions. Designed for absolute beginners, it also introduces real-world concepts like **rate limiting using Upstash Redis**, a **RESTful API**, **responsive design**, and **deployment workflows**.

## 🚀 Features

- 🧱 **Full-Stack MERN Application**: Integrated frontend and backend.
- ✨ **CRUD Operations**: Create, Update, Delete, and Read Notes.
- 🛠️ **RESTful API**: Proper HTTP methods and status codes.
- ⚙️ **Rate Limiting**: Implemented using **Upstash Redis** to prevent abuse.
- 📱 **Fully Responsive UI**: Modern design using React and Tailwind CSS.
- 📦 **Vercel Optimized**: Configured for seamless deployment on Vercel.

## 🏗️ Tech Stack

| Frontend  | Backend   | Database | Tools        |
|-----------|-----------|----------|--------------|
| React (Vite) | Node.js   | MongoDB  | Upstash Redis |
| Tailwind  | Express   | Mongoose | axios         |
| Lucide React | CORS      | Dotenv   | Vercel        |

## 📂 Project Structure

```bash
Thinkpad/
├── backend/                # Express backend
│   ├── src/
│   │   ├── config/         # DB connection
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # Rate limiting, etc.
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   └── server.js       # Entry point
│   ├── .env.example        # Environment template
│   └── vercel.json         # Vercel config
├── frontend/               # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── lib/            # Axios instance/API config
│   │   ├── pages/          # Home, Create, Note Detail
│   │   └── main.jsx        # Entry point
│   └── tailwind.config.js
├── claude.md               # AI contribution log
└── README.md
```

## 🛠️ Getting Started

### 1. Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and add your credentials.
4. Start the dev server: `npm run dev` (Runs on `http://localhost:3000`)

### 2. Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev` (Runs on `http://localhost:5173` or `5174`)

## 🛡️ Security & Connectivity
- **CORS**: Configured to allow local development on common Vite ports.
- **Environment Variables**: Sensitive data is protected via `.gitignore`.
- **API Centralization**: Frontend uses a centralized Axios instance for environment-aware API calls.

---
*Maintained with the assistance of AI.*

## Acknowledgements
* Code optimization and debugging assistance provided by [Claude AI](https://www.anthropic.com/claude).