import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import animalRoutes from "./src/routes/animalRoutes";
import rehomerRoutes from "./src/routes/rehomerRoutes";
import lostAnimalRoutes from "./src/routes/lostAnimalRoutes";
import blogRoutes from "./src/routes/blogRoutes";
import shelterRoutes from "./src/routes/shelterRoutes";
import veterinarianRoutes from "./src/routes/veterinarianRoutes";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/animals", animalRoutes);
app.use("/api/rehomer", rehomerRoutes);
app.use("/api/lost-animals", lostAnimalRoutes);
app.use("/api/blog-posts", blogRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/veterinarians", veterinarianRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
