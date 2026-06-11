import mongoose from "mongoose"
import config from "../config/config";

// Connect to the database
const connectDB = async () => {
    await mongoose.connect(config.DB_URI);
}

export default connectDB;