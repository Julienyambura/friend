"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVeterinarians = void 0;
const Veterinarian_1 = __importDefault(require("../models/Veterinarian"));
const getVeterinarians = async (req, res) => {
    try {
        const { lat, lng } = req.query;
        const veterinarians = await Veterinarian_1.default.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [
                            Number.parseFloat(lng),
                            Number.parseFloat(lat),
                        ],
                    },
                    $maxDistance: 50000, // 50km
                },
            },
        });
        res.json(veterinarians);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching veterinarians" });
    }
};
exports.getVeterinarians = getVeterinarians;
