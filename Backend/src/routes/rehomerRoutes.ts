import express from "express";
import { createRehomerListing } from "../controllers/rehomerController";

const router = express.Router();

router.post("/", createRehomerListing);

export default router;
