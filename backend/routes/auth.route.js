import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";
import { signout } from "../controllers/auth.controller.js";

const router =express.Router();

router.get("/signup",signup);
router.get("/signin",signin);
router.get("/signout",signout);



export default router;  