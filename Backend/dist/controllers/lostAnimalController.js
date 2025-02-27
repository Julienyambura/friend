"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportLostAnimal = exports.getLostAnimals = void 0;
const LostAndFound_1 = __importDefault(require("../models/LostAndFound"));
const getLostAnimals = async (req, res) => {
    try {
        const lostAnimals = await LostAndFound_1.default.find();
        res.json(lostAnimals);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching lost animals" });
    }
};
exports.getLostAnimals = getLostAnimals;
const reportLostAnimal = async (req, res) => {
    try {
        const { name, description, lastSeen, contactInfo } = req.body;
        const newLostAnimal = new LostAndFound_1.default({
            name,
            description,
            lastSeen,
            contactInfo,
        });
        await newLostAnimal.save();
        res.status(201).json({ message: "Lost animal reported successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error reporting lost animal" });
    }
};
exports.reportLostAnimal = reportLostAnimal;
