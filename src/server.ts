import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import productRoutes from "./routes/productRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
