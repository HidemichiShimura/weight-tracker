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
router.patch("/:date/:weight", (req, res) => {
  // Update the existing data with the passed data
  // If the data was successfully updated, return text of success or text of failure if not
  const data = req.params;

  // console.log(`PATCH received: ${req.body}`);
  res.send();
});
router.delete("/:date", (req, res) => {
  // Delete the existing data
  // If the data was successfully deleted, return text of success or text of failure if not
  const data = req.params;

  res.send();
});
