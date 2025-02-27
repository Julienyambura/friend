"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnimal = exports.validateAnswers = exports.getAnimals = void 0;
const Animal_1 = __importDefault(require("../models/Animal"));
const aiService_1 = require("../services/aiService");
const cloudinary_1 = require("cloudinary");
const getAnimals = async (req, res) => {
    try {
        const animals = await Animal_1.default.find();
        res.json(animals);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching animals" });
    }
};
exports.getAnimals = getAnimals;
const validateAnswers = async (req, res) => {
    try {
        const { answers } = req.body;
        const isValid = await (0, aiService_1.validateAnswersWithAI)(answers);
        res.json({ success: isValid });
    }
    catch (error) {
        res.status(500).json({ message: "Error validating answers" });
    }
};
exports.validateAnswers = validateAnswers;
// adding the animal details to the database
const addAnimal = async (req, res) => {
    try {
        const { name, breed, description, questions, rehomerContact, files } = req.body;
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
        const imagesUrl = await Promise.all(files.map(async (file) => {
            const result = await cloudinary_1.v2.uploader.upload(file?.path ?? '');
            return result.secure_url;
        }));
        // Proceed with saving the animal data and image URLs
        // Here, you would insert animal data into your database or perform other operations
    }
    catch (error) { }
};
exports.addAnimal = addAnimal;
