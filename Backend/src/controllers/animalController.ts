import type { Request, Response } from "express"
import Animal from "../models/Animal"
import { validateAnswersWithAI } from "../services/aiService"

export const getAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.find()
    res.json(animals)
  } catch (error) {
    res.status(500).json({ message: "Error fetching animals" })
  }
}

export const validateAnswers = async (req: Request, res: Response) => {
  try {
    const { answers } = req.body
    const isValid = await validateAnswersWithAI(answers)
    res.json({ success: isValid })
  } catch (error) {
    res.status(500).json({ message: "Error validating answers" })
  }
}

