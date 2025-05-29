import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/authentication.controller.js";

const router = new express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
