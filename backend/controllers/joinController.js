import Join from "../models/Join.js";

/* ================= CREATE JOIN ================= */

export const createJoin =
  async (req, res) => {

    try {

      const {
        name,
        email,
        phone,
        message,
      } = req.body;

      const join =
        await Join.create({

          name,

          email,

          phone,

          message,

        });

      res.status(201).json({

        success: true,

        message:
          "Joined Successfully",

        join,

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

/* ================= GET JOINS ================= */

export const getJoins =
  async (req, res) => {

    try {

      const joins =
        await Join.find().sort({
          createdAt: -1,
        });

      res.status(200).json({

        success: true,

        joins,

      });

    } catch (error) {

      console.log(error);

    }
  };

/* ================= DELETE JOIN ================= */

export const deleteJoin =
  async (req, res) => {

    try {

      await Join.findByIdAndDelete(
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