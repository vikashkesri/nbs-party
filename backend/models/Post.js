import mongoose from "mongoose";

const postSchema =
  new mongoose.Schema(
    {

      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        default: "",
      },

      likes: {
        type: Number,
        default: 0,
      },

      shares: {
        type: Number,
        default: 0,
      },

    },
    {
      timestamps: true,
    }
  );

const Post =
  mongoose.model(
    "Post",
    postSchema
  );

export default Post;