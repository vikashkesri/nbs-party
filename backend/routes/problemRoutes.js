import express from "express";

import {

  createProblem,

  getProblems,

  deleteProblem,

} from "../controllers/problemController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router =
  express.Router();

/* CREATE */

router.post(
  "/create",
  createProblem
);

/* GET */

router.get(
  "/all",
  authMiddleware,
  getProblems
);

/* DELETE */

router.delete(
  "/delete/:id",
  authMiddleware,
  deleteProblem
);

export default router;