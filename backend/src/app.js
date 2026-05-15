import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bookingRoutes from "./routes/bookingRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/bookings", bookingRoutes);

app.use("/api/payments", paymentRoutes);

export default app;