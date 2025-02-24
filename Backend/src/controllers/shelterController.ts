import type { Request, Response } from "express"
import Shelter from "../models/Shelter"

export const getShelters = async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.query
    const shelters = await Shelter.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [Number.parseFloat(lng as string), Number.parseFloat(lat as string)],
          },
          $maxDistance: 50000, // 50km
        },
      },
    })
    res.json(shelters)
  } catch (error) {
    res.status(500).json({ message: "Error fetching shelters" })
  }
}

