import express from "express";
import { createUser, forgotPassword, loggedInUser, signIn, verifyOTP } from "../controllers/user.controller";
import verifyJwtToken from "../utils/auth";
const router = express.Router();

router.post("/", createUser);
router.post("/sign-in", signIn);
router.get("/", verifyJwtToken, loggedInUser);
router.post("/forgot-password", forgotPassword)
router.post("/verify-otp", verifyOTP)
export default router