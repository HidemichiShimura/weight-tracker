import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import { router } from "./router/routes";

const app = express();

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
