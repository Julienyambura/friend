import express from "express";
import { getShelters } from "../controllers/shelterController";

const router = express.Router();

router.get("/", getShelters);

export default router;
