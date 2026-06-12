import { Router } from "express";
import * as authController from "../controllers/auth.controller"

// Initial the router
const authRouter = Router();

authRouter.post("/register", authController.register);

export default authRouter;