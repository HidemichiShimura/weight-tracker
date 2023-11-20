import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import { router } from "./router/routes";

const app = express();

const corsOptions = {
  origin: process.env.FRONT,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

mongoose
  .connect(process.env.URL as string)
  .then(() => {
    console.log("Connected to database");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running at PORT:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

export default app;
