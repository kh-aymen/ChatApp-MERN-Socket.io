import express from "express"
import { logIn, logOut, signUp } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/signUp", signUp)
router.post("/logout", logOut)
router.post("/login", logIn)

export default router
