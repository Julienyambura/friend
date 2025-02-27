"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogPosts = void 0;
const BlogPost_1 = __importDefault(require("../models/BlogPost"));
const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost_1.default.find();
        res.json(blogPosts);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching blog posts" });
    }
};
exports.getBlogPosts = getBlogPosts;
