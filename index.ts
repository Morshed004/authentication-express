import dotenv from "dotenv";
import app from "./app";
import express from "express";
import connectDB from "./database/db";
// ENV config
dotenv.config()

// Global Middleware
app.use(express.json());

// Call the Database Connect function
connectDB();

// Run the server
app.listen(3000, () => {
    console.log("App running in port 3000")
})