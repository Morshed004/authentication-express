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

// Get User Data
export async function getMe(req: Request, res: Response) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token not found."
        });
    }

    const decodeToken: any = jwt.verify(token, config.secret);
    const user = await userModel.findOne(decodeToken.id);

    return res.status(200).json({
        user: {
            username: user?.username,
            email: user?.email
        }
    });
}