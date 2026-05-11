# AI Contribution Log

This file documents the changes and security measures implemented by the AI assistant.

## Security & Configuration
- **Environment Protection**: Verified that `.env` is excluded from version control.
- **Git Ignore**: Explicitly added `.env`, `node_modules/`, and `dist/` to `backend/.gitignore`.
- **Environment Template**: Created `backend/.env.example` with placeholder keys (`MONGODB_URI`, `UPSTASH_REDIS_REST_URL`, etc.) to facilitate safe setup for other developers.

## Connectivity & Backend
- **Local Server Support**: Updated `backend/src/server.js` to include a local listener on port 3000, allowing `npm run dev` to function correctly outside of Vercel.
- **CORS Expansion**: Added `http://localhost:5174` to the allowed origins list in the backend to support alternative Vite development ports.

## Frontend Refactoring
- **API Centralization**: Refactored `frontend/src/pages/HomePage.jsx` to use the centralized `api` instance from `lib/axios.js`.
- **Hardcoded URL Removal**: Removed hardcoded `http://localhost:3000/api/notes/` strings from the frontend, making the application more maintainable and environment-aware.

## Verification
- Verified that both the backend and frontend start correctly and can communicate.
- Confirmed the backend successfully connects to the local MongoDB database.
