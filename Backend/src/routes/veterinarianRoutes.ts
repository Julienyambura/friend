import express from "express";
import { getVeterinarians } from "../controllers/veterinarianController";

const router = express.Router();

router.get("/", getVeterinarians);

export default router;
