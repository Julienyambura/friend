import type { Request, Response } from "express";
import LostAnimal from "../models/LostAndFound";

export const getLostAnimals = async (req: Request, res: Response) => {
  try {
    const lostAnimals = await LostAnimal.find();
    res.json(lostAnimals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lost animals" });
  }
};

export const reportLostAnimal = async (req: Request, res: Response) => {
  try {
    const { name, description, lastSeen, contactInfo } = req.body;
    const newLostAnimal = new LostAnimal({
      name,
      description,
      lastSeen,
      contactInfo,
    });
    await newLostAnimal.save();
    res.status(201).json({ message: "Lost animal reported successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error reporting lost animal" });
  }
};
