import express from "express";
import { getAnimals, validateAnswers } from "../controllers/animalController";

const router = express.Router();

router.get("/", getAnimals);
router.post("/validate-answers", validateAnswers);

export default router;
