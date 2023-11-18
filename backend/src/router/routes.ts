import { Router } from "express";
import cors from "cors";

export const router = Router();

router.use(cors());

router.get("/", (req, res) => {
  // Fetched DB data is supposed to be replaced here later

  res.send();
});
router.post("/", (req, res) => {
  // Register the passed data to DB here
  // If the data was successfully saved, return text of success or text of failure if not

  // This data is supposed to be passed to DB
  const data = req.body;
  res.send();
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
