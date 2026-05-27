import mongoose from "mongoose";

const problemSchema =
  new mongoose.Schema(
    {

      name: {
        type: String,
        required: true,
      },

      district: {
        type: String,
        required: true,
      },

      problem: {
        type: String,
        required: true,
      },

    },
    {
      timestamps: true,
    }
  );

const Problem =
  mongoose.model(
    "Problem",
    problemSchema
  );

export default Problem;