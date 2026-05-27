import mongoose from "mongoose";

const joinSchema =
  new mongoose.Schema(
    {

      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      message: {
        type: String,
      },

    },
    {
      timestamps: true,
    }
  );

const Join =
  mongoose.model(
    "Join",
    joinSchema
  );

export default Join;