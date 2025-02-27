"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rehomerController_1 = require("../controllers/rehomerController");
const router = express_1.default.Router();
router.post("/", rehomerController_1.createRehomerListing);
exports.default = router;
