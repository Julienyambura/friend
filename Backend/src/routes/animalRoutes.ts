import express from "express";
import { getAnimals, validateAnswers } from "../controllers/animalController";
import upload from "../middleware/multer";

const router = express.Router();

router.get("/animals", getAnimals);
router.post("/validate-answers", validateAnswers);
router.post("\add", upload.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 1},
    {name: "image3", maxCount: 1},
    {name: "image4", maxCount: 1},
]))

export default router;
    