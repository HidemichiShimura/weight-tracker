import { Router } from "express";
import cors from "cors";

import { DataModel } from "../models/Data";

export const router = Router();
const corsOptions = {
  origin: process.env.FRONT as string,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  "Access-Control-Allow-Origin": "*",
  credentials: true,
};

router.use(cors(corsOptions));

router.options("*", (req, res) => {
  res.send();
});
router.get("/", async (req, res) => {
  const allDBData = await DataModel.find({});

  try {
    res.send(allDBData);
  } catch (err) {
    res.status(500).send();
  }
});
router.post("/", async (req, res) => {
  const data = new DataModel(req.body);

  try {
    await data.save();
    res.send();
  } catch (err) {
    res.status(500).send(err);
  }
});
router.patch("/:date/:weight", async (req, res) => {
  try {
    const filter = { date: req.params.date };
    const update = { weight: req.params.weight };

    await DataModel.findOneAndUpdate(filter, update);
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});
router.delete("/:date", async (req, res) => {
  const condition = { date: req.params.date };

  try {
    await DataModel.findOneAndDelete(condition);
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});
