import { Request, Response } from "express";

import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = require("express").Router();

// Signup route
router.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create a new user
  const newUser = new User({ username, password });

  try {
    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error signing up user" });
  }
});

// Login route
router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
