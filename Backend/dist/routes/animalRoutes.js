"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animalController_1 = require("../controllers/animalController");
const multer_1 = __importDefault(require("../middleware/multer"));
const router = express_1.default.Router();
router.get("/animals", animalController_1.getAnimals);
router.post("/validate-answers", animalController_1.validateAnswers);
router.post("\add", multer_1.default.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
]));
exports.default = router;
