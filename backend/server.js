import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// роут для проверки
app.get("/", (req, res) => {
  res.send("API работает!");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB подключена");
    app.listen(5000, () => console.log("Сервер запущен на порту 5000"));
  })
  .catch(err => console.error(err));
