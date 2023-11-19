import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import { router } from "./router/routes";
import cors from "cors"; // add

const app = express();

// add
const corsOptions = {
  origin: process.env.FRONT as string,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  "Access-Control-Allow-Origin": "*",
  credentials: true,
};

app.use(cors(corsOptions));
//
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
