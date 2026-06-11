import { model, Schema } from "mongoose";

// User Model
const userSchema = new Schema({
    username: {
        type: String,
        require: [true, "Username is Require"],
        unique: true,
    },
    email:{
        type: String,
        require: [true, "Email is Require"],
        unique: true,
    },
    password:{
        type: String,
        require:[true, "Password is Require"]
    }
})

// Make user model
export const userModel = model("users", userSchema)