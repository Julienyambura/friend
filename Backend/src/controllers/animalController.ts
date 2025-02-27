import type { Request, Response } from "express";
import Animal from "../models/Animal";
import { validateAnswersWithAI } from "../services/aiService";
import { v2 } from "cloudinary";
import upload from "../middleware/multer";

interface RequestWithFiles extends Request {
  files?: {
    [fieldname: string]: Express.Multer.File[]; // for Multer file array
  };
}

export const getAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching animals" });
  }
};

export const validateAnswers = async (req: Request, res: Response) => {
  try {
    const { answers } = req.body;
    const isValid = await validateAnswersWithAI(answers);
    res.json({ success: isValid });
  } catch (error) {
    res.status(500).json({ message: "Error validating answers" });
  }
};


// adding the animal details to the database

export const addAnimal = async (req: RequestWithFiles, res: Response) => {
  try {
    const { name, breed, description, questions, rehomerContact, files } =
      req.body;

    // Type the files properly
    const image1 = req.files?.image1 ? req.files.image1[0] : undefined;
    const image2 = req.files?.image2 ? req.files.image2[0] : undefined;
    const image3 = req.files?.image3 ? req.files.image3[0] : undefined;
    const image4 = req.files?.image4 ? req.files.image4[0] : undefined;

    // Ensure at least one image is provided
    if (!image1 && !image2 && !image3 && !image4) {
      return res
        .status(400)
        .json({ message: "At least one image is required" });
    }

    // Filter out undefined images
    const imagesUrl = await Promise.all(
      files.map(async (file: Express.Multer.File) => {
        const result = await v2.uploader.upload(file?.path ?? '');
        return result.secure_url;
      })
    );

    // Proceed with saving the animal data and image URLs
    // Here, you would insert animal data into your database or perform other operations
  } catch (error) {}
};
