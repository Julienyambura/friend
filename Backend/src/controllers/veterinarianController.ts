import type { Request, Response } from "express";
import Veterinarian from "../models/Veterinarian";

export const getVeterinarians = async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.query;
    const veterinarians = await Veterinarian.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [
              Number.parseFloat(lng as string),
              Number.parseFloat(lat as string),
            ],
          },
          $maxDistance: 50000, // 50km
        },
      },
    });
    res.json(veterinarians);
  } catch (error) {
    res.status(500).json({ message: "Error fetching veterinarians" });
  }
};
