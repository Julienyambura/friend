"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnswersWithAI = void 0;
const axios_1 = __importDefault(require("axios"));
const validateAnswersWithAI = async (answers) => {
    try {
        // Replace this URL with your AI service endpoint
        const response = await axios_1.default.post("https://gemini.google.com/app", {
            answers,
        });
        return response.data.isValid;
    }
    catch (error) {
        console.error("Error validating answers with AI:", error);
        return false;
    }
};
exports.validateAnswersWithAI = validateAnswersWithAI;
