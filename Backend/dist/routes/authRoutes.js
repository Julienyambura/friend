"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express.Router();
// Signup route
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    // Check if the username already exists
    const userExists = await User_1.default.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: "Username already exists" });
    }
    // Create a new user
    const newUser = new User_1.default({ username, password });
    try {
        await newUser.save();
        const token = jsonwebtoken_1.default.sign({ userId: newUser._id, username: newUser.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Error signing up user" });
    }
});
// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    // Find the user by username
    const user = await User_1.default.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate JWT
    const token = jsonwebtoken_1.default.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});
exports.default = router;
