import type { Request, Response } from "express"
import BlogPost from "../models/BlogPost"

export const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPost.find()
    res.json(blogPosts)
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts" })
  }
}

