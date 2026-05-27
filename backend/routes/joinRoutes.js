import express from "express";

import {

  createJoin,

  getJoins,

  deleteJoin,

} from "../controllers/joinController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router =
  express.Router();

/* CREATE */

router.post(
  "/create",
  createJoin
);

/* GET */

router.get(
  "/all",
  authMiddleware,
  getJoins
);

/* DELETE */

router.delete(
  "/delete/:id",
  authMiddleware,
  deleteJoin
);

export default router;