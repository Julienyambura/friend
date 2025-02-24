import express from "express"
import { getBlogPosts } from "../controllers/blogController"

const router = express.Router()

router.get("/", getBlogPosts)

export default router

