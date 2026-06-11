import dotenv from "dotenv";
import app from "./app";
import connectDB from "./database/db";

dotenv.config()
app.listen(3000, ()=>{
    console.log("App running in port 3000")
})