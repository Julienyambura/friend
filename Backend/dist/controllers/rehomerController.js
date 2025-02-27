"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRehomerListing = void 0;
const Animal_1 = __importDefault(require("../models/Animal"));
const createRehomerListing = async (req, res) => {
    try {
        const { breed, questions, contactInfo } = req.body;
        const newAnimal = new Animal_1.default({
            breed,
            questions,
            rehomerContact: contactInfo,
        });
        await newAnimal.save();
        res.status(201).json({ message: "Animal listing created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating animal listing" });
    }
};
exports.createRehomerListing = createRehomerListing;
