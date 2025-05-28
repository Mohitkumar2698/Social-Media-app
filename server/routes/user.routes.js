import express from "express";
import { homePage } from "../controllers/homePage.controller.js";
import { registerPage } from "../controllers/registerPage.controller.js";
import { loginPage } from "../controllers/loginPage.controller.js";

import { registerUser } from "../controllers/registerUser.controller.js";
import { validateUser } from "../controllers/validateUser.controller.js";

const router = new express.Router();

router.get("/", homePage);
router.get("/register", registerPage);
router.get("/login", loginPage);

router.post("/", registerUser);
router.post("/", validateUser);

export default router;
