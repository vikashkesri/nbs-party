import Problem from "../models/Problem.js";

/* ================= CREATE ================= */

export const createProblem =
  async (req, res) => {

    try {

      const {
        name,
        district,
        problem,
      } = req.body;

      const newProblem =
        await Problem.create({

          name,

          district,

          problem,

        });

      res.status(201).json({

        success: true,

        message:
          "Problem Submitted",

        newProblem,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= GET ================= */

export const getProblems =
  async (req, res) => {

    try {

      const problems =
        await Problem.find().sort({
          createdAt: -1,
        });

      res.status(200).json({

        success: true,

        problems,

      });

    } catch (error) {

      console.log(error);

    }
  };

/* ================= DELETE ================= */

export const deleteProblem =
  async (req, res) => {

    try {

      await Problem.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        success: true,

        message:
          "Deleted Successfully",

      });

    } catch (error) {

      console.log(error);

    }
  };