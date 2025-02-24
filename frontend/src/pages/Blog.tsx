"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/style.css";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>("/api/blog-posts");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <motion.div
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Pet Care Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.image || "/placeholder.svg"} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button>Read More</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// export default Blog;
