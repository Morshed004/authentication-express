import crypto from "node:crypto";
import type { Request, Response } from "express";
import { userModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config/config";

// User Register Logic
export async function register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const isUserExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    // Check the user
    if (isUserExist) {
        return res.status(409).json({
            message: "User already exist"
        });
    };
    // Hash the password
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    // Save the User from the database
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, config.secret, {
        expiresIn: "1d"
    });

    return res.status(201).json({
        message: "User Registration successfully.",
        token,
        user: {
            id: user._id,
        }
    });
}