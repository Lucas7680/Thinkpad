import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();


const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://thinkpad-git-main-daniyal-ahmeds-projects-c363bc8e.vercel.app/",
      "https://thinkpad.vercel.app" // Add final deployed frontend here
    ],
  })
);

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

await connectDb(); // Ensure DB is connected before handling requests

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
