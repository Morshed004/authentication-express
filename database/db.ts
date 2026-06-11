import mongoose from "mongoose"

const DB_URI = process.env.DATABASE_URI! as string;
if (!DB_URI) {
    throw new Error("Can not load database url!");
}
const connectDB = async () => {
    await mongoose.connect(DB_URI);
}

export default connectDB;