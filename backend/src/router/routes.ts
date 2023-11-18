import { Router } from "express";
import cors from "cors";

import { DataModel } from "../models/Data";

export const router = Router();

router.use(cors());

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
router.delete("/:date", (req, res) => {
  // Delete the existing data
  // If the data was successfully deleted, return text of success or text of failure if not
  const data = req.params;

  res.send();
});
