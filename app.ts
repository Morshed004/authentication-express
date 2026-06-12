import express from "express";
import connectDB from "./database/db";
import authRouter from "./routes/auth.route";

const app = express();

// Global Middleware
app.use(express.json());

// Call the Database Connect function
connectDB();

// Routes Middleware
app.use("/api/auth", authRouter);

export default app;