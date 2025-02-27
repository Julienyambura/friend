// src/server.ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import Rehomer from "./src/models/Rehomer"; // Import Rehomer model
// Importing Routes
import authRoutes from "./src/routes/authRoutes"; // Auth routes
import animalRoutes from "./src/routes/animalRoutes"; // Animal routes
import rehomerRoutes from "./src/routes/rehomerRoutes"; // Rehomer routes
import lostAnimalRoutes from "./src/routes/lostAnimalRoutes"; // Lost Animal routes
import blogRoutes from "./src/routes/blogRoutes"; // Blog routes
import shelterRoutes from "./src/routes/shelterRoutes"; // Shelter routes
import veterinarianRoutes from "./src/routes/veterinarianRoutes"; // Veterinarian routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes Setup
app.use("/api/auth", authRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/rehomer", rehomerRoutes);
app.use("/api/lost-animals", lostAnimalRoutes);
app.use("/api/blog-posts", blogRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/veterinarians", veterinarianRoutes);

// Rehomer Route - Handles File Uploads and Form Data
app.post("/api/rehomer", upload.array("images", 10), async (req, res) => {
  try {
    // Extract form data and uploaded images
    const {
      type,
      breed,
      age,
      gender,
      size,
      temperament,
      healthConditions,
      description,
    } = req.body;
    const images = (req.files as Express.Multer.File[]).map(
      (file) => file.path
    );

    // Create a new Rehomer listing (model should already be created)
    const newRehomer = new Rehomer({
      type,
      breed,
      age,
      gender,
      size,
      temperament,
      healthConditions,
      description,
      images, // List of image paths
    });

    // Save the new Rehomer to the database
    await newRehomer.save();

    // Respond with success message
    res
      .status(201)
      .json({ message: "Animal listed for adoption!", data: newRehomer });
  } catch (error) {
    console.error("Error creating rehomer listing:", error);
    res.status(500).json({ message: "Error creating rehomer listing." });
  }
});

// Create 'uploads' folder if it doesn't exist
import fs from "fs";
const uploadsDir = "./uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
