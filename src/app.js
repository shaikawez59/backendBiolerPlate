import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./middlewares/errors.middleware.js";

const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));
app.use(errorHandler);

//middlewares
app.use(
  urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));

export { app };
