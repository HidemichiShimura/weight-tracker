import { Router } from "express";

import { DataModel } from "../models/Data";

export const router = Router();

router.options("*", (req, res) => {
  res
    .set({
      "Access-Control-Allow-Origin": process.env.FRONT as string,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    })
    .send();
});
router.get("/", async (req, res) => {
  // const allDBData = await DataModel.find({});

  // try {
  //   res.send(allDBData);
  // } catch (err) {
  //   res.status(500).send();
  // }
  try {
    res.status(200).send({ name: "John Doe" });
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
