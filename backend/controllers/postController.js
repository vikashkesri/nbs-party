import Post from "../models/Post.js";

/* ================= CREATE POST ================= */

export const createPost =
  async (req, res) => {

    try {

      const {
        title,
        description,
      } = req.body;

      if (
        !title ||
        !description
      ) {

        return res.status(400).json({

          success: false,

          message:
            "All Fields Required",

        });

      }

      /* IMAGE */

      const image =
        req.file
          ? `/uploads/${req.file.filename}`
          : "";

      /* CREATE */

      const post =
        await Post.create({

          title,

          description,

          image,

          likes: 0,

          shares: 0,

        });

      res.status(201).json({

        success: true,

        message:
          "Post Created Successfully",

        post,

      });

    } catch (error) {

      console.log(
        "CREATE POST ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= GET POSTS ================= */

export const getPosts =
  async (req, res) => {

    try {

      const posts =
        await Post.find().sort({
          createdAt: -1,
        });

      res.status(200).json({

        success: true,

        posts,

      });

    } catch (error) {

      console.log(
        "GET POSTS ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= GET SINGLE ================= */

export const getSinglePost =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res.status(404).json({

          success: false,

          message:
            "Post Not Found",

        });

      }

      res.status(200).json({

        success: true,

        post,

      });

    } catch (error) {

      console.log(
        "GET SINGLE ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= UPDATE ================= */

export const updatePost =
  async (req, res) => {

    try {

      const {
        title,
        description,
      } = req.body;

      const updatedData = {

        title,

        description,

      };

      /* IMAGE */

      if (req.file) {

        updatedData.image =
          `/uploads/${req.file.filename}`;

      }

      /* UPDATE */

      const post =
        await Post.findByIdAndUpdate(
          req.params.id,
          updatedData,
          {
            new: true,
          }
        );

      res.status(200).json({

        success: true,

        message:
          "Post Updated",

        post,

      });

    } catch (error) {

      console.log(
        "UPDATE ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= DELETE ================= */

export const deletePost =
  async (req, res) => {

    try {

      await Post.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        success: true,

        message:
          "Post Deleted",

      });

    } catch (error) {

      console.log(
        "DELETE ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= LIKE POST ================= */

export const likePost =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res.status(404).json({

          success: false,

          message:
            "Post Not Found",

        });

      }

      /* FIX OLD POSTS */

      if (
        typeof post.likes !==
        "number"
      ) {

        post.likes = 0;

      }

      /* INCREASE LIKE */

      post.likes += 1;

      await post.save();

      res.status(200).json({

        success: true,

        likes: post.likes,

      });

    } catch (error) {

      console.log(
        "LIKE ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };

/* ================= SHARE POST ================= */

export const sharePost =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res.status(404).json({

          success: false,

          message:
            "Post Not Found",

        });

      }

      /* FIX OLD POSTS */

      if (
        typeof post.shares !==
        "number"
      ) {

        post.shares = 0;

      }

      /* INCREASE SHARE */

      post.shares += 1;

      await post.save();

      res.status(200).json({

        success: true,

        shares: post.shares,

      });

    } catch (error) {

      console.log(
        "SHARE ERROR =>",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }
  };