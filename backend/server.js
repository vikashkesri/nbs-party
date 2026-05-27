import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";

/* ROUTES */
import adminRoutes from "./routes/adminRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
import joinRoutes from "./routes/joinRoutes.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

app.use(cookieParser());

/* ================= CORS ================= */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/* ================= STATIC FOLDER ================= */

app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "uploads")
  )
);

/* ================= MONGODB ================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB Connected Successfully"
    );
  })
  .catch((error) => {
    console.log(
      "MongoDB Error:",
      error
    );
  });

/* ================= ROUTES ================= */

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/posts",
  postRoutes
);

app.use(
  "/api/problems",
  problemRoutes
);

app.use(
  "/api/join",
  joinRoutes
);

/* ================= HOME ================= */

app.get("/", (req, res) => {

  res.send(
    "Backend Running Successfully"
  );

});

/* ================= 404 ================= */

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });

});

/* ================= SERVER ================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running On PORT ${PORT}`
  );

});