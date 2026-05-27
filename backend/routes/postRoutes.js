import express from "express";

import {

  createPost,

  getPosts,

  getSinglePost,

  updatePost,

  deletePost,

} from "../controllers/postController.js";

import authMiddleware from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router =
  express.Router();

/* ================= CREATE ================= */

router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createPost
);

/* ================= GET ALL ================= */

router.get(
  "/all",
  getPosts
);

/* ================= GET SINGLE ================= */

router.get(
  "/:id",
  getSinglePost
);

/* ================= UPDATE ================= */

router.put(
  "/update/:id",
  authMiddleware,
  upload.single("image"),
  updatePost
);

/* ================= DELETE ================= */

router.delete(
  "/delete/:id",
  authMiddleware,
  deletePost
);

/* ================= EXPORT ================= */

export default router;