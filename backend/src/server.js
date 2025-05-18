import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// const __dirname = path.resolve();
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://thinkpad.vercel.app"] // your final deployed frontend URL
    : [
        "http://localhost:5173",
        "https://thinkpad-git-main-daniyal-ahmeds-projects-c363bc8e.vercel.app/",
      ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if needed for cookies/auth headers
  })
);


app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Listening at port ${PORT}`);
  });
});
