// src/models/Rehomer.ts
import mongoose from "mongoose";

const rehomerSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    size: { type: String, required: true },
    temperament: { type: String, required: true },
    healthConditions: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }], // Array of image paths
  },
  { timestamps: true }
);

const Rehomer = mongoose.model("Rehomer", rehomerSchema);

export default Rehomer;
