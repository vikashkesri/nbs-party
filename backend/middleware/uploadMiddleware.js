import multer from "multer";

import path from "path";

/* STORAGE */

const storage =
  multer.diskStorage({

    destination:
      function (
        req,
        file,
        cb
      ) {

        cb(
          null,
          "uploads"
        );

      },

    filename:
      function (
        req,
        file,
        cb
      ) {

        cb(
          null,
          Date.now() +
          path.extname(
            file.originalname
          )
        );

      },

  });

/* FILE FILTER */

const fileFilter =
  (
    req,
    file,
    cb
  ) => {

    const allowed =
      [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/webp",
      ];

    if (
      allowed.includes(
        file.mimetype
      )
    ) {

      cb(
        null,
        true
      );

    } else {

      cb(
        new Error(
          "Only Images Allowed"
        )
      );

    }
  };

/* UPLOAD */

const upload =
  multer({

    storage,

    fileFilter,

  });

export default upload;