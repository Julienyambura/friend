import type { Request, Response } from "express";
import Animal from "../models/Animal";

export const createRehomerListing = async (req: Request, res: Response) => {
  try {
    const { breed, questions, contactInfo } = req.body;
    const newAnimal = new Animal({
      breed,
      questions,
      rehomerContact: contactInfo,
    });
    await newAnimal.save();
    res.status(201).json({ message: "Animal listing created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating animal listing" });
  }
};
