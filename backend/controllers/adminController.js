import Admin from "../models/Admin.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

/* ================= REGISTER ================= */

export const registerAdmin =
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
      } = req.body;

      /* CHECK FIELDS */

      if (
        !name ||
        !email ||
        !password
      ) {

        return res.status(400).json({

          success: false,

          message:
            "All Fields Are Required",

        });

      }

      /* ONLY ONE ADMIN ALLOWED */

      const adminCount =
        await Admin.countDocuments();

      if (adminCount > 0) {

        return res.status(403).json({

          success: false,

          message:
            "Only One Admin Allowed",

        });

      }

      /* HASH PASSWORD */

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      /* CREATE ADMIN */

      const admin =
        await Admin.create({

          name,

          email,

          password:
            hashedPassword,

        });

      /* TOKEN */

      const token =
        jwt.sign(

          {
            id: admin._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }

        );

      /* RESPONSE */

      res.status(201).json({

        success: true,

        message:
          "Admin Registered Successfully",

        token,

        admin: {

          _id: admin._id,

          name: admin.name,

          email: admin.email,

        },

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

/* ================= LOGIN ================= */

export const loginAdmin =
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      const admin =
        await Admin.findOne({
          email,
        });

      if (!admin) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid Credentials",

        });

      }

      const isMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!isMatch) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid Credentials",

        });

      }

      const token =
        jwt.sign(

          {
            id: admin._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }

        );

      res.status(200).json({

        success: true,

        message:
          "Login Success",

        token,

        admin: {

          _id: admin._id,

          name: admin.name,

          email: admin.email,

        },

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

/* ================= FORGOT PASSWORD ================= */

export const forgotPassword =
  async (req, res) => {

    try {

      const {
        email,
        newPassword,
      } = req.body;

      if (
        !email ||
        !newPassword
      ) {

        return res.status(400).json({

          success: false,

          message:
            "All Fields Are Required",

        });

      }

      const admin =
        await Admin.findOne({
          email,
        });

      if (!admin) {

        return res.status(404).json({

          success: false,

          message:
            "Admin Not Found",

        });

      }

      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          10
        );

      admin.password =
        hashedPassword;

      await admin.save();

      res.status(200).json({

        success: true,

        message:
          "Password Reset Successfully",

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

/* ================= LOGOUT ================= */

export const logoutAdmin =
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        message:
          "Logout Successful",

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