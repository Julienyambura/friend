"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShelters = void 0;
const Shelter_1 = __importDefault(require("../models/Shelter"));
const getShelters = async (req, res) => {
    try {
        const { lat, lng } = req.query;
        const shelters = await Shelter_1.default.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [Number.parseFloat(lng), Number.parseFloat(lat)],
                    },
                    $maxDistance: 50000, // 50km
                },
            },
        });
        res.json(shelters);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching shelters" });
    }
};
exports.getShelters = getShelters;
