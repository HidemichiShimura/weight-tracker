import mongoose, { Schema, model } from "mongoose";

const DataSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    index: { unique: true },
  },
});

export const DataModel = model("Data", DataSchema);
