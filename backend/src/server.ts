import express from "express";
import "dotenv/config";

import { router } from "./router/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT:${process.env.PORT}`);
});
