import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  // Fetched DB data is supposed to be replaced here later

  res.send("GET request reached");
});
router.post("/", (req, res) => {
  // Register the passed data to DB here
  // If the data was successfully saved, return text of success or text of failure if not

  res.send("POST request reached");
});
router.patch("/", (req, res) => {
  // Update the existing data with the passed data
  // If the data was successfully updated, return text of success or text of failure if not

  res.send("PATCH request reached");
});
router.delete("/", (req, res) => {
  // Delete the existing data
  // If the data was successfully deleted, return text of success or text of failure if not

  res.send("DELETE request reached");
});
