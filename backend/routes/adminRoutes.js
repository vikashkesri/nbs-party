// routes/adminRoutes.js

import express from "express";

import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  forgotPassword,
} from "../controllers/adminController.js";

const router = express.Router();

/* REGISTER */
router.post(
  "/register",
  registerAdmin
);

/* LOGIN */
router.post(
  "/login",
  loginAdmin
);

/* LOGOUT */
router.get(
  "/logout",
  logoutAdmin
);

/* FORGOT PASSWORD */
router.post(
  "/forgot-password",
  forgotPassword
);

export default router;