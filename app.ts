import express from "express";
import connectDB from "./database/db";

const app = express();

// Global Middleware
app.use(express.json());

// Call the Database Connect function
connectDB();

app.get("/", (req, res)=>{
    res.send("Hello from server!")
})

export default app;